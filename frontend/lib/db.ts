import { PrismaClient } from "../generated/client"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  })

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}

// Helper function to connect to database
export async function connectToDatabase() {
  try {
    await prisma.$connect()
    console.log("✅ Database connected successfully")

    // Test the connection
    await prisma.$queryRaw`SELECT 1`
    console.log("✅ Database query test successful")

    return true
  } catch (error) {
    console.error("❌ Database connection failed:", error)
    throw error
  }
}

// Helper function to disconnect from database
export async function disconnectFromDatabase() {
  await prisma.$disconnect()
}
