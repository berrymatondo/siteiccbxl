import prisma from "@/lib/prisma";
import { type NextRequest, NextResponse } from "next/server";

// GET - Récupérer une ou plusieurs images
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const key = searchParams.get("key");

    if (key) {
      // Récupérer une image spécifique
      const media = await prisma.media.findUnique({
        where: { key },
      });

      if (!media) {
        return NextResponse.json({ error: "Media not found" }, { status: 404 });
      }

      return NextResponse.json(media);
    } else {
      // Récupérer toutes les images
      const allMedia = await prisma.media.findMany({
        orderBy: { updatedAt: "desc" },
      });

      return NextResponse.json(allMedia);
    }
  } catch (error) {
    console.error("[v0] Error fetching media:", error);
    return NextResponse.json(
      { error: "Failed to fetch media" },
      { status: 500 }
    );
  }
}

// POST - Créer ou mettre à jour une image
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { key, imageData } = body;

    if (!key || !imageData) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const media = await prisma.media.upsert({
      where: { key },
      update: { imageData, updatedAt: new Date() },
      create: { key, imageData },
    });

    return NextResponse.json(media);
  } catch (error) {
    console.error("[v0] Error saving media:", error);
    return NextResponse.json(
      { error: "Failed to save media" },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer une image
export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const key = searchParams.get("key");

    if (!key) {
      return NextResponse.json(
        { error: "Missing key parameter" },
        { status: 400 }
      );
    }

    await prisma.media.delete({
      where: { key },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[v0] Error deleting media:", error);
    return NextResponse.json(
      { error: "Failed to delete media" },
      { status: 500 }
    );
  }
}
