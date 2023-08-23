const prismaMock = {
    hourlyPrice: {
        createMany: jest.fn(),
    },
    // other models if needed
};

export const PrismaClient = jest.fn(() => prismaMock);
