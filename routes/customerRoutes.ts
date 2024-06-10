import { Router } from 'express';
import {
  createCustomer,
  getCustomers,
  getCustomerById
} from '../controllers/customerController';

const router = Router();

router.post('/', createCustomer);
router.get('/', getCustomers);
router.get('/:id', getCustomerById);

export default router;
