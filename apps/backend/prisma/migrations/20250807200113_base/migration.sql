-- AlterTable
ALTER TABLE "public"."Annonce" ALTER COLUMN "created_at" SET DATA TYPE DATE,
ALTER COLUMN "updated_at" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "created_at" SET DATA TYPE DATE,
ALTER COLUMN "updated_at" SET DATA TYPE DATE;
