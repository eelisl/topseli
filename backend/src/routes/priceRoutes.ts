import express, { Request, Response } from 'express';

const router = express.Router();

// Get today's hourly prices
router.get('/today', (req: Request, res: Response) => {
});

// Get tomorrow's hourly prices
router.get('/tomorrow', (req: Request, res: Response) => {
});

export default router;

