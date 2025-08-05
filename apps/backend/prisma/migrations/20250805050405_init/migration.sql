-- CreateTable
CREATE TABLE "public"."annonces" (
    "job" TEXT NOT NULL,
    "content_id" UUID,
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) DEFAULT timezone('utc'::text, now()),
    "updated_at" TIMESTAMP(3) NOT NULL,
    "company_id" UUID,

    CONSTRAINT "annonces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."company" (
    "city" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."content" (
    "about" TEXT,
    "description" TEXT,
    "skills" TEXT,
    "benifits" TEXT,
    "salary" TEXT,
    "contracttype" TEXT,
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "workmode" TEXT,
    "annoncelink" TEXT,
    "status" TEXT,

    CONSTRAINT "content_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."annonces" ADD CONSTRAINT "annonces_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."annonces" ADD CONSTRAINT "annonces_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "public"."content"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
