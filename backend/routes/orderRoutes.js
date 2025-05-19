import express from 'express';
import { index, receiveOrder, testDB } from '../controllers/orderController.js';

const router = express.Router();

router.get('/test', index);
router.get('/testdb', testDB);
router.post('/:remoteId', receiveOrder);

export default router;
