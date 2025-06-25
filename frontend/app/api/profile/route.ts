import { type NextRequest, NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/db"

export async function GET() {
  try {
    const { userId } =await auth()

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const profile = await prisma.userProfile.findUnique({
      where: { userId },
      include: {
        education: {
          orderBy: {
            startDate: "desc",
          },
        },
      },
    })

    return NextResponse.json(profile)
  } catch (error) {
    console.error("Error fetching profile:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId } =await auth()
    console.log("🔍 User ID from auth:", userId)

    if (!userId) {
      console.log("❌ No user ID found")
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await request.json()
    console.log("📝 Received data:", JSON.stringify(data, null, 2))

    const { education, ...profileData } = data

    // Convert date strings to Date objects
    const processedProfileData = {
      ...profileData,
      dateOfBirth: profileData.dateOfBirth ? new Date(profileData.dateOfBirth) : null,
      age: profileData.age ? Number(profileData.age) : null,
    }

    console.log("🔄 Processing profile data:", processedProfileData)

    // Use transaction to ensure data consistency
    const result = await prisma.$transaction(async (tx:any) => {
      console.log("🏗️ Starting database transaction...")

      // Upsert user profile
      const profile = await tx.userProfile.upsert({
        where: { userId },
        update: {
          ...processedProfileData,
          updatedAt: new Date(),
          isProfileComplete: true,
        },
        create: {
          userId,
          ...processedProfileData,
          isProfileComplete: true,
        },
      })

      console.log("✅ Profile upserted:", profile.id)

      // Delete existing education records
      await tx.education.deleteMany({
        where: { userProfileId: profile.id },
      })

      console.log("🗑️ Deleted existing education records")

      // Create new education records
      if (education && education.length > 0) {
        console.log("📚 Creating education records:", education.length)

        const educationData = education.map((edu: any) => ({
          institution: edu.institution,
          degree: edu.degree,
          fieldOfStudy: edu.fieldOfStudy,
          startDate: new Date(edu.startDate),
          endDate: edu.endDate ? new Date(edu.endDate) : null,
          isCurrentlyStudying: Boolean(edu.isCurrentlyStudying),
          grade: edu.grade || null,
          description: edu.description || null,
          userProfileId: profile.id,
        }))

        await tx.education.createMany({
          data: educationData,
        })

        console.log("✅ Education records created")
      }

      // Return profile with education
      const finalProfile = await tx.userProfile.findUnique({
        where: { id: profile.id },
        include: {
          education: {
            orderBy: {
              startDate: "desc",
            },
          },
        },
      })

      console.log("🎉 Transaction completed successfully")
      return finalProfile
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error("❌ Detailed error saving profile:", error)
    console.error("❌ Error stack:", error instanceof Error ? error.stack : "No stack trace")

    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { userId } =await auth()

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await request.json()
    const { education, ...profileData } = data

    const result = await prisma.$transaction(async (tx:any) => {
      const profile = await tx.userProfile.update({
        where: { userId },
        data: {
          ...profileData,
          updatedAt: new Date(),
        },
      })

      // Update education if provided
      if (education) {
        // Delete existing education records
        await tx.education.deleteMany({
          where: { userProfileId: profile.id },
        })

        // Create new education records
        if (education.length > 0) {
          await tx.education.createMany({
            data: education.map((edu: any) => ({
              ...edu,
              userProfileId: profile.id,
              startDate: new Date(edu.startDate),
              endDate: edu.endDate ? new Date(edu.endDate) : null,
            })),
          })
        }
      }

      return await tx.userProfile.findUnique({
        where: { id: profile.id },
        include: {
          education: {
            orderBy: {
              startDate: "desc",
            },
          },
        },
      })
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error updating profile:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE() {
  try {
    const { userId } =await auth()

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await prisma.userProfile.delete({
      where: { userId },
    })

    return NextResponse.json({ message: "Profile deleted successfully" })
  } catch (error) {
    console.error("Error deleting profile:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
