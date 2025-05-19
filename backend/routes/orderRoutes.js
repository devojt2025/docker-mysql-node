import express from 'express';
import { index, receiveOrder } from '../controllers/orderController.js';

const router = express.Router();

router.get('/test', index);
router.post('/:remoteId', receiveOrder);

export default router;
