-- CreateTable
CREATE TABLE "clientdelivery" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "clientdelivery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clientdelivery_name_key" ON "clientdelivery"("name");
