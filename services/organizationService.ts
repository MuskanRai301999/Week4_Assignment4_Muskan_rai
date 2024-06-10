import  Organization  from '../models/Organization';

export const createOrganization = async (organizationData: any) => {
  return await Organization.create(organizationData);
};

export const getOrganizationById = async (id: string) => {
  return await Organization.findByPk(id);
};

export const updateOrganization = async (id: string, updateData: any) => {
  const organization = await Organization.findByPk(id);
  if (organization) {
    return await organization.update(updateData);
  }
  return null;
};

export const deleteOrganization = async (id: string) => {
  const organization = await Organization.findByPk(id);
  if (organization) {
    await organization.destroy();
    return true;
  }
  return false;
};
