import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getAllEnergyUsage = async (req: Request, res: Response) => {
    try {
        const energyUsage = await prisma.electricityUsage.findMany();
        res.json(energyUsage);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}