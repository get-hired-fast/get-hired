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
    console.log("🔍 Creating new profile for user:", userId)

    if (!userId) {
      console.log("❌ No user ID found")
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await request.json()
    console.log("📝 Received data for creation:", JSON.stringify(data, null, 2))

    const { education, ...profileData } = data

    // Convert date strings to Date objects and handle null values
    const processedProfileData = {
      ...profileData,
      dateOfBirth: profileData.dateOfBirth ? new Date(profileData.dateOfBirth) : null,
      age: profileData.age ? Number(profileData.age) : null,
    }

    console.log("🔄 Processing profile data for creation:", processedProfileData)

    // Use transaction to ensure data consistency
    const result = await prisma.$transaction(async (tx:any) => {
      console.log("🏗️ Starting database transaction for creation...")

      // Create new user profile
      const profile = await tx.userProfile.create({
        data: {
          userId,
          ...processedProfileData,
          isProfileComplete: true,
        },
      })

      console.log("✅ Profile created:", profile.id)

      // Create education records
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

      console.log("🎉 Creation transaction completed successfully")
      return finalProfile
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error("❌ Detailed error creating profile:", error)
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
    console.log("🔍 Updating profile for user:", userId)

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await request.json()
    console.log("📝 Received data for update:", JSON.stringify(data, null, 2))

    const { education, ...profileData } = data

    // Get existing profile to preserve data that wasn't sent
    const existingProfile = await prisma.userProfile.findUnique({
      where: { userId },
      include: { education: true },
    })

    if (!existingProfile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 })
    }

    // Merge existing data with new data (only update fields that are provided)
    const updatedProfileData: any = {}

    // Always update these core fields
    if (profileData.firstName !== undefined) updatedProfileData.firstName = profileData.firstName
    if (profileData.lastName !== undefined) updatedProfileData.lastName = profileData.lastName
    if (profileData.skills !== undefined) updatedProfileData.skills = profileData.skills
    if (profileData.preferredJobRoles !== undefined)
      updatedProfileData.preferredJobRoles = profileData.preferredJobRoles

    // Only update optional fields if they are provided and not empty
    if (profileData.age !== undefined && profileData.age !== null) {
      updatedProfileData.age = Number(profileData.age)
    }
    if (profileData.dateOfBirth !== undefined && profileData.dateOfBirth !== null && profileData.dateOfBirth !== "") {
      updatedProfileData.dateOfBirth = new Date(profileData.dateOfBirth)
    }
    if (profileData.address !== undefined) updatedProfileData.address = profileData.address
    if (profileData.city !== undefined) updatedProfileData.city = profileData.city
    if (profileData.state !== undefined) updatedProfileData.state = profileData.state
    if (profileData.country !== undefined) updatedProfileData.country = profileData.country
    if (profileData.phone !== undefined) updatedProfileData.phone = profileData.phone
    if (profileData.bio !== undefined) updatedProfileData.bio = profileData.bio
    if (profileData.currentRole !== undefined) updatedProfileData.currentRole = profileData.currentRole
    if (profileData.experience !== undefined) updatedProfileData.experience = profileData.experience
    if (profileData.linkedinUrl !== undefined) updatedProfileData.linkedinUrl = profileData.linkedinUrl
    if (profileData.githubUrl !== undefined) updatedProfileData.githubUrl = profileData.githubUrl
    if (profileData.leetcodeUrl !== undefined) updatedProfileData.leetcodeUrl = profileData.leetcodeUrl
    if (profileData.portfolioUrl !== undefined) updatedProfileData.portfolioUrl = profileData.portfolioUrl
    if (profileData.twitterUrl !== undefined) updatedProfileData.twitterUrl = profileData.twitterUrl

    // Only update file URLs if new ones are provided
    if (profileData.profilePicture !== undefined) updatedProfileData.profilePicture = profileData.profilePicture
    if (profileData.resumeUrl !== undefined) updatedProfileData.resumeUrl = profileData.resumeUrl
    if (profileData.resumeFileName !== undefined) updatedProfileData.resumeFileName = profileData.resumeFileName

    // Always update timestamp
    updatedProfileData.updatedAt = new Date()

    console.log("🔄 Processing profile data for update:", updatedProfileData)

    const result = await prisma.$transaction(async (tx:any) => {
      console.log("🏗️ Starting database transaction for update...")

      // Update user profile
      const profile = await tx.userProfile.update({
        where: { userId },
        data: updatedProfileData,
      })

      console.log("✅ Profile updated:", profile.id)

      // Update education if provided
      if (education !== undefined) {
        console.log("📚 Updating education records...")

        // Delete existing education records
        await tx.education.deleteMany({
          where: { userProfileId: profile.id },
        })

        // Create new education records if any
        if (education.length > 0) {
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

          console.log("✅ Education records updated")
        }
      }

      // Return updated profile with education
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

      console.log("🎉 Update transaction completed successfully")
      return finalProfile
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error("❌ Detailed error updating profile:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
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
