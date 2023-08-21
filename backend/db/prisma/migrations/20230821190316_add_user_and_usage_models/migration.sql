-- CreateTable
CREATE TABLE "ElectricityUsage" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "timeframe" TIMESTAMP(3) NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ElectricityUsage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ElectricityUsage" ADD CONSTRAINT "ElectricityUsage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
