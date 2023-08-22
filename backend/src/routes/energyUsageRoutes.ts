import express, { Request, Response } from 'express';
import { energyUsageExists } from '../middleware/energyUsageExists';
import { validateEnergyUsageRequest } from '../middleware/validateEnergyUsageRequest';

const router = express.Router();

// Get all energy usage data points
router.get('/', (req: Request, res: Response) => {
});

// Create a new energy usage data point
router.post('/', validateEnergyUsageRequest, (req: Request, res: Response) => {
});

// Update a specific energy usage data point
router.put('/:id', energyUsageExists, validateEnergyUsageRequest, (req: Request, res: Response) => {
});

// Delete a specific energy usage data point
router.delete('/:id', energyUsageExists, (req: Request, res: Response) => {
});

export default router;
