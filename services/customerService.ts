import  Customer from '../models/Customer';

export const createCustomer = async (customerData: any) => {
  return await Customer.create(customerData);
};

export const getCustomerById = async (id: string) => {
  return await Customer.findByPk(id);
};

export const updateCustomer = async (id: string, updateData: any) => {
  const customer = await Customer.findByPk(id);
  if (customer) {
    return await customer.update(updateData);
  }
  return null;
};

export const deleteCustomer = async (id: string) => {
  const customer = await Customer.findByPk(id);
  if (customer) {
    await customer.destroy();
    return true;
  }
  return false;
};
