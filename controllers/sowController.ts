import { Request, Response } from 'express';
import SOW from '../models/SOW';
import SOWPaymentPlan from '../models/SOWPaymentPlan';
import SOWPaymentPlanLineItem from '../models/SOWPaymentPlan';

// Create a new SOW
export const createSOW = async (req: Request, res: Response) => {
  const { sowData, paymentPlans } = req.body;

  try {
    const sow = await SOW.create(sowData);

    if (paymentPlans && paymentPlans.length > 0) {
      for (const plan of paymentPlans) {
        plan.sowId = sow.id;
        const paymentPlan = await SOWPaymentPlan.create(plan);

        if (plan.lineItems && plan.lineItems.length > 0) {
          for (const item of plan.lineItems) {
            item.sowPaymentPlanId = paymentPlan.id;
            item.sowId = sow.id;
            await SOWPaymentPlanLineItem.create(item);
          }
        }
      }
    }

    res.status(201).json(sow);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all SOWs
export const getSOWs = async (req: Request, res: Response) => {
  try {
    const sows = await SOW.findAll({
      include: [SOWPaymentPlan]
    });
    res.status(200).json(sows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific SOW by ID
export const getSOWById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const sow = await SOW.findByPk(id, {
      include: [SOWPaymentPlan]
    });

    if (sow) {
      res.status(200).json(sow);
    } else {
      res.status(404).json({ message: 'SOW not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all payment plans of a specific SOW by SOW ID
export const getPaymentPlansBySOWId = async (req: Request, res: Response) => {
  const { sowId } = req.params;

  try {
    const paymentPlans = await SOWPaymentPlan.findAll({
      where: { sowId },
      include: [SOWPaymentPlanLineItem]
    });
    res.status(200).json(paymentPlans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
