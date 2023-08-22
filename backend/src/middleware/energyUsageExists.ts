import { PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

const prisma = new PrismaClient();

interface EnergyUsageRequest extends Request {
    energyUsage?: {
        id: number;
        amount: number;
        timeframe: Date;
        cost: number;
    };
}

export const energyUsageExists = async (req: EnergyUsageRequest, res: Response, next: NextFunction) => {

    const { id } = req.params;

    // Check if the ID is provided and is a valid number
    if (id == null || isNaN(Number(id))) {
        return res.status(400).json({
            error: 'Invalid or missing ID',
        });
    }

    // Check if the energy usage data point exists
    try {
        const energyUsage = await prisma.electricityUsage.findUnique({
            where: { id: Number(id) },
        });

        if (!energyUsage) {
            return res.status(404).json({
                error: 'Energy usage not found',
            });
        }

        // attach the energyUsage to the request for usage
        req.energyUsage = energyUsage;

        // If everything is valid, call next to continue to the next middleware or controller
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'An error occurred while checking the energy usage data point',
        });
    }

    next();
}