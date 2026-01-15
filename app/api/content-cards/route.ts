import prisma from "@/lib/prisma";
import { type NextRequest, NextResponse } from "next/server";

// GET - Récupérer toutes les cartes
export async function GET() {
  try {
    const cards = await prisma.contentCard.findMany({
      orderBy: { position: "asc" },
    });

    return NextResponse.json(cards);
  } catch (error) {
    console.error("[v0] Error fetching content cards:", error);
    return NextResponse.json(
      { error: "Failed to fetch content cards" },
      { status: 500 }
    );
  }
}

// POST - Créer ou mettre à jour une carte
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { position, title, url, imageData } = body;

    if (position === undefined || !title || !url || !imageData) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const card = await prisma.contentCard.upsert({
      where: { position },
      update: { title, url, imageData, updatedAt: new Date() },
      create: { position, title, url, imageData },
    });

    return NextResponse.json(card);
  } catch (error) {
    console.error("[v0] Error saving content card:", error);
    return NextResponse.json(
      { error: "Failed to save content card" },
      { status: 500 }
    );
  }
}
