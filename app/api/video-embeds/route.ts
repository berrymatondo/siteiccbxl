import prisma from "@/lib/prisma";
import { type NextRequest, NextResponse } from "next/server";

// GET - Récupérer une vidéo
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const key = searchParams.get("key");

    if (!key) {
      return NextResponse.json(
        { error: "Missing key parameter" },
        { status: 400 }
      );
    }

    const video = await prisma.videoEmbed.findUnique({
      where: { key },
    });

    if (!video) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }

    return NextResponse.json(video);
  } catch (error) {
    console.error("[v0] Error fetching video:", error);
    return NextResponse.json(
      { error: "Failed to fetch video" },
      { status: 500 }
    );
  }
}

// POST - Créer ou mettre à jour une vidéo
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { key, url, title, duration, speaker, thumbnail } = body;

    if (!key || !url) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const video = await prisma.videoEmbed.upsert({
      where: { key },
      update: {
        url,
        title,
        duration,
        speaker,
        thumbnail,
        updatedAt: new Date(),
      },
      create: { key, url, title, duration, speaker, thumbnail },
    });

    return NextResponse.json(video);
  } catch (error) {
    console.error("[v0] Error saving video:", error);
    return NextResponse.json(
      { error: "Failed to save video" },
      { status: 500 }
    );
  }
}
