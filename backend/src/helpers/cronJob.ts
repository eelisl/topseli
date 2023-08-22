import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import cron from 'node-cron';
import { PricePerHourResponse } from '../types/responseTypes';

const prisma = new PrismaClient();

export const fetchPricePerHour = async () => {
    try {
        const response: PricePerHourResponse = await axios.get('https://api.spot-hinta.fi/TodayAndDayForward?HomeAssistant=false');
        // Process the data, save it to the database

        const data = response.data.data.map((item) => {
            return {
                rank: item.Rank,
                datetime: item.DateTime,
                price: item.PriceWithTax,
            };
        });

        await prisma.hourlyPrice.createMany({
            data: data,
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const cronFetchPrices = async () => {
    cron.schedule('0 15 * * *', fetchPricePerHour);
};