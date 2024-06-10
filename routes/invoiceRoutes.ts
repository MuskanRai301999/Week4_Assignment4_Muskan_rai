import { Router } from 'express';
import {
  createInvoice,
  getInvoices,
  getInvoiceById,
  generateInvoices
} from '../controllers/invoiceController';

const router = Router();

router.post('/', createInvoice);
router.get('/', getInvoices);
router.get('/:id', getInvoiceById);
router.post('/generate', generateInvoices);

export default router;
