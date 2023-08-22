import express from 'express';
import energyUsageRoutes from './energyUsageRoutes';
import pricesRoutes from './priceRoutes';
import saunaRoutes from './saunaRoutes';

const router = express.Router();

router.use('/prices', pricesRoutes);
router.use('/sauna', saunaRoutes);
router.use('/energy-usage', energyUsageRoutes);

export default router;
