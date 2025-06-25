import { type NextRequest, NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { existsSync } from "fs"

export async function POST(request: NextRequest) {
  try {
    const { userId } =await auth()
    console.log("📤 Upload request from user:", userId)

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await request.formData()
    const file: File | null = data.get("file") as unknown as File

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
    }

    console.log("📁 File details:", {
      name: file.name,
      size: file.size,
      type: file.type,
    })

    // Validate file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large. Maximum size is 10MB." }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Create uploads directory if it doesn't exist
    const uploadsDir = join(process.cwd(), "public/uploads")
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true })
      console.log("📂 Created uploads directory")
    }

    // Create unique filename
    const timestamp = Date.now()
    const fileExtension = file.name.split(".").pop()
    const filename = `${userId}_${timestamp}.${fileExtension}`
    const filepath = join(uploadsDir, filename)

    await writeFile(filepath, buffer)
    console.log("✅ File saved:", filepath)

    const fileUrl = `/uploads/${filename}`

    return NextResponse.json({
      url: fileUrl,
      filename: file.name,
    })
  } catch (error) {
    console.error("❌ Error uploading file:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
