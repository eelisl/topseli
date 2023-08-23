import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import { fetchPricePerHour } from '../helpers/cronJob';

jest.mock('@prisma/client');
jest.mock('axios');

describe('fetchPricePerHour', () => {
    it('fetches and processes data successfully', async () => {
        // Mock the axios response
        (axios.get as jest.Mock).mockResolvedValue({
            data: {
                data: [
                    // sample data to match the structure expected by your function
                    { Rank: 1, DateTime: '2023-01-01T00:00:00', PriceWithTax: 100 },
                ],
            },
        });

        const prisma = new PrismaClient();

        // Call the function
        const result = await fetchPricePerHour();

        // Expect the correct data processing and database call
        expect(prisma.hourlyPrice.createMany).toHaveBeenCalledWith({
            data: [
                { rank: 1, datetime: '2023-01-01T00:00:00', price: 100 },
            ],
        });
    });
});
