/*
  Warnings:

  - You are about to drop the `Content` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `contract_type` to the `Annonce` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Annonce` table without a default value. This is not possible if the table is not empty.
  - Added the required column `work_mode` to the `Annonce` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Annonce" DROP CONSTRAINT "Annonce_content_id_fkey";

-- AlterTable
ALTER TABLE "public"."Annonce" ADD COLUMN     "about" TEXT,
ADD COLUMN     "annonce_link" TEXT,
ADD COLUMN     "benefits" TEXT,
ADD COLUMN     "contract_type" TEXT NOT NULL,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "salary" TEXT,
ADD COLUMN     "skills" TEXT,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "work_mode" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."Content";

-- CreateIndex
CREATE INDEX "Annonce_status_idx" ON "public"."Annonce"("status");

-- CreateIndex
CREATE INDEX "Annonce_salary_idx" ON "public"."Annonce"("salary");
