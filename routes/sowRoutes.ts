import { Router } from 'express';
import {
  createSOW,
  getSOWs,
  getSOWById,
  getPaymentPlansBySOWId
} from '../controllers/sowController';

const router = Router();

router.post('/', createSOW);
router.get('/', getSOWs);
router.get('/:id', getSOWById);
router.get('/:sowId/payment-plans', getPaymentPlansBySOWId);

export default router;
