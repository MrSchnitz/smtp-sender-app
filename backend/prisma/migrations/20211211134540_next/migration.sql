/*
  Warnings:

  - The primary key for the `Mail` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Mail" DROP CONSTRAINT "Mail_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Mail_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Mail_id_seq";
