import express = require("express");
import itemRouter from './item-dispatcher';
import customerRouter from './customer-dispatcher';
import orderRouter from './order-dispatcher';

const router =express.Router();
export default router;

router.use(express.json());

router.use('/api/v1/customers',customerRouter);
router.use('/api/v1/items',itemRouter);
router.use('/api/v1/orders', orderRouter);
