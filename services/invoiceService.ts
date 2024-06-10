import  Invoice  from '../models/Invoice';

export const createInvoice = async (invoiceData: any) => {
  return await Invoice.create(invoiceData);
};

export const getInvoiceById = async (id: string) => {
  return await Invoice.findByPk(id);
};

export const updateInvoice = async (id: string, updateData: any) => {
  const invoice = await Invoice.findByPk(id);
  if (invoice) {
    return await invoice.update(updateData);
  }
  return null;
};

export const deleteInvoice = async (id: string) => {
  const invoice = await Invoice.findByPk(id);
  if (invoice) {
    await invoice.destroy();
    return true;
  }
  return false;
};
