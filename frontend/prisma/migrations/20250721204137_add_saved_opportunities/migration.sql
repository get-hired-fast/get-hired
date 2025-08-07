/*
  Warnings:

  - Added the required column `jobId` to the `saved_opportunities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "saved_opportunities" ADD COLUMN     "jobId" TEXT NOT NULL;
