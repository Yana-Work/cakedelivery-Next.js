/*
  Warnings:

  - Changed the type of `price` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Order"
ALTER COLUMN "price" SET DATA TYPE DECIMAL(65,30) USING "price"::DECIMAL(65,30),
ALTER COLUMN "price" SET NOT NULL;

