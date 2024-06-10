import { Router } from 'express';
import {
  createOrganization,
  getOrganizations,
  getOrganizationById
} from '../controllers/organizationController';

const router = Router();

router.post('/', createOrganization);
router.get('/', getOrganizations);
router.get('/:id', getOrganizationById);

export default router;
