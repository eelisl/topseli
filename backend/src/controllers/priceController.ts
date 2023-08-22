import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getAllPrices = async (req: Request, res: Response) => {
    try {
        const prices = await prisma.hourlyPrice.findMany();
        res.json(prices);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}