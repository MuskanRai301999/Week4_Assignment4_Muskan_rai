import { InvoiceLineItem } from '../models/invoiceLineItem';

export const createInvoiceLineItem = async (lineItemData: any) => {
  return await InvoiceLineItem.create(lineItemData);
};

export const getInvoiceLineItemById = async (id: string) => {
  return await InvoiceLineItem.findByPk(id);
};

export const updateInvoiceLineItem = async (id: string, updateData: any) => {
  const lineItem = await InvoiceLineItem.findByPk(id);
  if (lineItem) {
    return await lineItem.update(updateData);
  }
  return null;
};

export const deleteInvoiceLineItem = async (id: string) => {
  const lineItem = await InvoiceLineItem.findByPk(id);
  if (lineItem) {
    await lineItem.destroy();
    return true;
  }
  return false;
};
