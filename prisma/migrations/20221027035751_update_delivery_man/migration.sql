/*
  Warnings:

  - You are about to drop the column `id_delivery` on the `Deliveries` table. All the data in the column will be lost.
  - Added the required column `id_deliveryman` to the `Deliveries` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Deliveries" DROP CONSTRAINT "Deliveries_id_delivery_fkey";

-- AlterTable
ALTER TABLE "Deliveries" DROP COLUMN "id_delivery",
ADD COLUMN     "id_deliveryman" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Deliveries" ADD CONSTRAINT "Deliveries_id_deliveryman_fkey" FOREIGN KEY ("id_deliveryman") REFERENCES "deliveryman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
