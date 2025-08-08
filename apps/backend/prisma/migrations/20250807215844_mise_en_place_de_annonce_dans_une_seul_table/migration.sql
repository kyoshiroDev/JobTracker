/*
  Warnings:

  - You are about to drop the column `company_id` on the `Annonce` table. All the data in the column will be lost.
  - You are about to drop the column `content_id` on the `Annonce` table. All the data in the column will be lost.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Annonce" DROP CONSTRAINT "Annonce_company_id_fkey";

-- AlterTable
ALTER TABLE "public"."Annonce" DROP COLUMN "company_id",
DROP COLUMN "content_id",
ADD COLUMN     "company_city" TEXT,
ADD COLUMN     "company_email" TEXT,
ADD COLUMN     "company_name" TEXT,
ADD COLUMN     "company_phone" TEXT;

-- DropTable
DROP TABLE "public"."Company";

-- CreateIndex
CREATE INDEX "Annonce_company_name_idx" ON "public"."Annonce"("company_name");

-- CreateIndex
CREATE INDEX "Annonce_company_city_idx" ON "public"."Annonce"("company_city");
