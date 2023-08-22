import express, { Request, Response } from 'express';
import * as priceController from '../controllers/priceController';

const router = express.Router();

// Get all hourly prices
router.get('/', priceController.getAllPrices);
// Get today's hourly prices
router.get('/today', (req: Request, res: Response) => {
});

// Get tomorrow's hourly prices
router.get('/tomorrow', (req: Request, res: Response) => {
});

export default router;

