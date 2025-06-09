import express from 'express';
import { index, testDB, receiveOrder, getOrders } from '../controllers/grabController.js';

const router = express.Router();

router.get('/test', index);
router.get('/testdb', testDB);
router.post('/orders', receiveOrder);
router.get('/orders/raw', getOrders);

export default router;
