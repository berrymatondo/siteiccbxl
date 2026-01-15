-- CreateTable
CREATE TABLE "media" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "imageData" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "video_embeds" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT,
    "duration" TEXT,
    "speaker" TEXT,
    "thumbnail" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "video_embeds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content_cards" (
    "id" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "imageData" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "content_cards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "media_key_key" ON "media"("key");

-- CreateIndex
CREATE UNIQUE INDEX "video_embeds_key_key" ON "video_embeds"("key");

-- CreateIndex
CREATE UNIQUE INDEX "content_cards_position_key" ON "content_cards"("position");
