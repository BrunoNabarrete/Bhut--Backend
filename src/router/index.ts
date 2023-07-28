import { Router } from "express";
import carsRouter from './Cars.router';
import logsRouter from './Logs.router';

const router = Router();

router.use('/cars', carsRouter);
router.use('/logs', logsRouter);

export default router;