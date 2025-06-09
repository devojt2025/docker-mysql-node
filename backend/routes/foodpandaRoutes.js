import express from 'express';
import { getOrders, index, receiveOrder, testDB } from '../controllers/foodpandaController.js';

const router = express.Router();

router.get('/test', index);
router.get('/testdb', testDB);
router.post('/order/:remoteId', receiveOrder);
router.get('/orders/raw', getOrders);

export default router;
