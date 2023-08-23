import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();


const weekdays = ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai'];
export const getBestTime = async (req: Request, res: Response) => {

    try {
        const dateString = req.query.date;

        const date = new Date(dateString as string);
        const weekdaynumber = date.getUTCDay();
        const isWeekend = weekdaynumber === 0 || weekdaynumber === 6;

        // Set the time to the start of the day
        const startOfDay = new Date(date);
        if (isWeekend) {
            startOfDay.setUTCHours(14, 0, 0, 0);
        } else {
            startOfDay.setUTCHours(17, 0, 0, 0);
        }
        // Set the time to the end of the day
        const endOfDay = new Date(date);
        endOfDay.setUTCHours(19, 59, 59, 999);


        console.log(startOfDay.toISOString()); // 2023-08-23T00:00:00.000Z
        console.log(endOfDay.toISOString());   // 2023-08-23T23:59


        console.log(startOfDay, endOfDay);
        const hourlyPriceByDate = await prisma.hourlyPrice.findMany({
            where: {
                AND: [
                    {
                        datetime: {
                            gte: startOfDay
                        }
                    },
                    {
                        datetime: {
                            lte: endOfDay
                        }
                    }
                ]
            }
        });

        const bestTimeToSauna = hourlyPriceByDate.reduce((bestTime, currentHourlyPrice) => {
            if (currentHourlyPrice.price < bestTime.price) {
                return currentHourlyPrice;
            } else {
                return bestTime;
            }
        });

        res.json({
            bestTime: bestTimeToSauna.datetime,
            weekDay: weekdays[weekdaynumber],
        });

    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}