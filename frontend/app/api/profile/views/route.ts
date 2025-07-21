import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(request: NextRequest) {
    const { userId } = await request.json();
    if (!userId) {
        return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }
    try {

        const updated = await prisma.userProfile.update({
            where: { userId },
            data: {
                profileViews: {
                    increment: 1,
                },
            },
        });
        return NextResponse.json({ profileViews: updated.profileViews })
    } catch (error) {
        console.error("Error incrementing profile views:", error);
    }
}