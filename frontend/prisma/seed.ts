import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Starting database seed...")

  // You can add initial data here if needed
  // For example, popular skills, job roles, etc.

  const popularSkills = [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "Java",
    "C++",
    "SQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "TypeScript",
    "Vue.js",
    "Angular",
    "Express.js",
    "Machine Learning",
    "Data Analysis",
    "UI/UX Design",
    "Project Management",
    "Kubernetes",
    "GraphQL",
    "Redis",
    "PostgreSQL",
  ]

  const popularJobRoles = [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Data Scientist",
    "Product Manager",
    "UI/UX Designer",
    "DevOps Engineer",
    "Mobile Developer",
    "Machine Learning Engineer",
    "Data Analyst",
    "QA Engineer",
    "Cloud Architect",
    "Cybersecurity Specialist",
    "Technical Writer",
  ]

  console.log("✅ Database seeded successfully")
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
