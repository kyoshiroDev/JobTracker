/*
  Warnings:

  - You are about to drop the `annonces` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `content` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."annonces" DROP CONSTRAINT "annonces_company_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."annonces" DROP CONSTRAINT "annonces_content_id_fkey";

-- DropTable
DROP TABLE "public"."annonces";

-- DropTable
DROP TABLE "public"."company";

-- DropTable
DROP TABLE "public"."content";

-- CreateTable
CREATE TABLE "public"."User" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Annonce" (
    "id" UUID NOT NULL,
    "job" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "user_id" UUID NOT NULL,
    "company_id" UUID NOT NULL,
    "content_id" UUID NOT NULL,

    CONSTRAINT "Annonce_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Company" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Content" (
    "id" UUID NOT NULL,
    "contract_type" TEXT NOT NULL,
    "workmode" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "about" TEXT,
    "description" TEXT,
    "skills" TEXT,
    "benefits" TEXT,
    "salary" TEXT,
    "annonce_link" TEXT,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "public"."User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "Annonce_job_idx" ON "public"."Annonce"("job");

-- CreateIndex
CREATE INDEX "Company_name_idx" ON "public"."Company"("name");

-- CreateIndex
CREATE INDEX "Company_city_idx" ON "public"."Company"("city");

-- CreateIndex
CREATE INDEX "Content_status_idx" ON "public"."Content"("status");

-- CreateIndex
CREATE INDEX "Content_salary_idx" ON "public"."Content"("salary");

-- AddForeignKey
ALTER TABLE "public"."Annonce" ADD CONSTRAINT "Annonce_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Annonce" ADD CONSTRAINT "Annonce_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Annonce" ADD CONSTRAINT "Annonce_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "public"."Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;
