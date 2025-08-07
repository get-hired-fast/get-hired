import { type NextRequest, NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/db"

export async function GET() {
  try {
    const { userId } =await auth()

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const applications = await prisma.application.findMany({
      where: { userId },
      orderBy: { appliedAt: "desc" },
    })

    return NextResponse.json(applications)
  } catch (error) {
    console.error("Error fetching applications:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId } =await auth()

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await request.json()

    const application = await prisma.application.create({
      data: {
        userId,
        ...data,
        deadline: data.deadline ? new Date(data.deadline) : null,
      },
    })

    return NextResponse.json(application)
  } catch (error) {
    console.error("Error creating application:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
