/*
  Warnings:

  - You are about to drop the column `time` on the `HourlyPrice` table. All the data in the column will be lost.
  - Added the required column `datetime` to the `HourlyPrice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rank` to the `HourlyPrice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HourlyPrice" DROP COLUMN "time",
ADD COLUMN     "datetime" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "rank" TIMESTAMP(3) NOT NULL;
