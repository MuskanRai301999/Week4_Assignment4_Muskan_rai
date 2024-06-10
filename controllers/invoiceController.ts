import { Request, Response } from 'express';
import Invoice from '../models/Invoice';
import InvoiceItem from '../models/InvoiceItem';
import SOWPaymentPlan from '../models/SOWPaymentPlan';
import {SOWPaymentPlanLineItem} from '../models/sowPaymentPlanLineItem';
import { Op } from 'sequelize';
import InvoiceLineItem from '../models/InvoiceItem';

// Create a new invoice
export const createInvoice = async (req: Request, res: Response) => {
  const { invoiceData, lineItems } = req.body;

  try {
    const invoice = await Invoice.create(invoiceData);

    if (lineItems && lineItems.length > 0) {
      for (const item of lineItems) {
        item.invoiceId = invoice.id;
        await InvoiceLineItem.create(item);
      }
    }

    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all invoices
export const getInvoices = async (req: Request, res: Response) => {
  try {
    const invoices = await Invoice.findAll({
      include: [InvoiceLineItem]
    });
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific invoice by ID
export const getInvoiceById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const invoice = await Invoice.findByPk(id, {
      include: [InvoiceLineItem]
    });

    if (invoice) {
      res.status(200).json(invoice);
    } else {
      res.status(404).json({ message: 'Invoice not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Generate invoices for due SOW payment plans
export const generateInvoices = async (req: Request, res: Response) => {
  const today = new Date();
  try {
    const duePaymentPlans = await SOWPaymentPlan.findAll({
      where: {
        plannedInvoiceDate: {
          [Op.lte]: today
        }
      }
    });

    const invoices = [];

    for (const paymentPlan of duePaymentPlans) {
      const lineItems = await SOWPaymentPlanLineItem.findAll({
        where: { sowPaymentPlanId: paymentPlan.id }
      });

      const invoiceData = {
        id: `INV_${paymentPlan.id}`,
        totalInvoiceValue: paymentPlan.totalActualAmount,
        sowId: paymentPlan.sowId,
        status: 'Drafted',
        invoiceSentOn: null,
        customerId: paymentPlan.customerId,
        paymentReceivedOn: null,
        invoiceVersionNumber: 1
      };

      const invoice = await Invoice.create(invoiceData);

      for (const item of lineItems) {
        await InvoiceItem.create({
          id: `LINE_ITEM_${item.id}`,
          invoiceId: invoice.id,
          orderNo: item.orderId,
          particular: item.particular,
          rate: item.rate,
          unit: item.unit,
          total: item.total
        });
      }

      invoices.push();
    }

    res.status(201).json(invoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
