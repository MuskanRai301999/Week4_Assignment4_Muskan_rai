import { Request, Response } from 'express';
import Organization from '../models/Organization';

// Create a new organization
export const createOrganization = async (req: Request, res: Response) => {
  try {
    const organization = await Organization.create(req.body);
    res.status(201).json(organization);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all organizations
export const getOrganizations = async (req: Request, res: Response) => {
  try {
    const organizations = await Organization.findAll();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific organization by ID
export const getOrganizationById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const organization = await Organization.findByPk(id);

    if (organization) {
      res.status(200).json(organization);
    } else {
      res.status(404).json({ message: 'Organization not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
