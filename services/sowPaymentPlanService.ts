import  SOWPaymentPlan  from '../models/SOWPaymentPlan';

export const createSowPaymentPlan = async (sowPaymentPlanData: any) => {
  return await SOWPaymentPlan.create(sowPaymentPlanData);
};

export const getSowPaymentPlanById = async (id: string) => {
  return await SOWPaymentPlan.findByPk(id);
};

export const updateSowPaymentPlan = async (id: string, updateData: any) => {
  const sowPaymentPlan = await SOWPaymentPlan.findByPk(id);
  if (sowPaymentPlan) {
    return await sowPaymentPlan.update(updateData);
  }
  return null;
};

export const deleteSowPaymentPlan = async (id: string) => {
  const sowPaymentPlan = await SOWPaymentPlan.findByPk(id);
  if (sowPaymentPlan) {
    await sowPaymentPlan.destroy();
    return true;
  }
  return false;
};
