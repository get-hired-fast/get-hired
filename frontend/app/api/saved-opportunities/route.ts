import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";

// Get all saved opportunities for the logged-in user
export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const saved = await prisma.savedOpportunity.findMany({ where: { userId } });
  return NextResponse.json(saved);
}

// Save a new opportunity
export async function POST(request: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { jobId, title, company, type } = await request.json();
  if (!jobId || !title || !company || !type) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  const saved = await prisma.savedOpportunity.create({
    data: { userId, jobId, title, company, type },
  });
  return NextResponse.json(saved);
}