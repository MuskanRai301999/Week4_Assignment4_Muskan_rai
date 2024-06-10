import { SOWPaymentPlanLineItem } from '../models/sowPaymentPlanLineItem';

export const createSowPaymentPlanLineItem = async (lineItemData: any) => {
  return await SOWPaymentPlanLineItem.create(lineItemData);
};

export const getSowPaymentPlanLineItemById = async (id: string) => {
  return await SOWPaymentPlanLineItem.findByPk(id);
};

export const updateSowPaymentPlanLineItem = async (id: string, updateData: any) => {
  const lineItem = await SOWPaymentPlanLineItem.findByPk(id);
  if (lineItem) {
    return await lineItem.update(updateData);
  }
  return null;
};

export const deleteSowPaymentPlanLineItem = async (id: string) => {
  const lineItem = await SOWPaymentPlanLineItem.findByPk(id);
  if (lineItem) {
    await lineItem.destroy();
    return true;
  }
  return false;
};
