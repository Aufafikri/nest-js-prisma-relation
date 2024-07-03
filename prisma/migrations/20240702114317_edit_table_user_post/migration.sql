/*
  Warnings:

  - The primary key for the `UserPost` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UserPost` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserPost" DROP CONSTRAINT "UserPost_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "UserPost_pkey" PRIMARY KEY ("userId", "postId");
