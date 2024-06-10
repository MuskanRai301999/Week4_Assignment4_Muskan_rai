import  SOW  from '../models/SOW';

export const createSow = async (sowData: any) => {
  return await SOW.create(sowData);
};

export const getSowById = async (id: string) => {
  return await SOW.findByPk(id);
};

export const updateSow = async (id: string, updateData: any) => {
  const sow = await SOW.findByPk(id);
  if (sow) {
    return await sow.update(updateData);
  }
  return null;
};

export const deleteSow = async (id: string) => {
  const sow = await SOW.findByPk(id);
  if (sow) {
    await sow.destroy();
    return true;
  }
  return false;
};
