import { NextFunction, Request, Response } from 'express';
import { isValidTimeframe } from '../helpers';

export const validateEnergyUsageRequest = (req: Request, res: Response, next: NextFunction) => {

    const { amount, timeframe, date } = req.body;

    // Check if the amount is provided and is a valid number
    if (amount == null || typeof amount !== 'number' || amount <= 0) {
        return res.status(400).json({
            error: 'Invalid or missing amount',
        });
    }

    // Check if the date is provided and is a valid date
    if (date == null || typeof date !== 'string' || !Date.parse(date)) {
        return res.status(400).json({
            error: 'Invalid or missing date',
        });
    }

    // Check if the timeframe is provided and follows the expected format (e.g., "14:00-19:00")
    if (!timeframe || typeof timeframe !== 'string' || !isValidTimeframe(timeframe)) {
        return res.status(400).json({
            error: 'Invalid or missing timeframe',
        });
    }

    next();
};

