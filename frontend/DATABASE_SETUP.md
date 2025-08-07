# Database Setup Guide for Helpr

This guide will help you set up the database for the Helpr application using Prisma ORM.

## Prerequisites

- Node.js 18+ installed
- A database (PostgreSQL, MySQL, or SQLite)
- Clerk account for authentication

## Quick Setup

### 1. Environment Variables

Copy the `.env.example` file to `.env`:

\`\`\`bash
cp .env.example .env
\`\`\`

Update the following variables in your `.env` file:

\`\`\`env
# Database - Choose one:
# PostgreSQL (Recommended for production)
DATABASE_URL="postgresql://username:password@localhost:5432/helpr_db?schema=public"

# MySQL
# DATABASE_URL="mysql://username:password@localhost:3306/helpr_db"

# SQLite (Good for development)
# DATABASE_URL="file:./dev.db"

# Clerk Authentication (Get these from your Clerk dashboard)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
\`\`\`

### 2. Database Setup Options

#### Option A: Automated Setup (Recommended)

Run the setup script:

\`\`\`bash
chmod +x scripts/setup-db.sh
./scripts/setup-db.sh
\`\`\`

#### Option B: Manual Setup

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Generate Prisma client:
\`\`\`bash
npx prisma generate
\`\`\`

3. Push database schema:
\`\`\`bash
npx prisma db push
\`\`\`

4. (Optional) Seed database:
\`\`\`bash
npm run db:seed
\`\`\`

### 3. Database Commands

Here are useful commands for managing your database:

\`\`\`bash
# Generate Prisma client after schema changes
npm run db:generate

# Push schema changes to database (development)
npm run db:push

# Create and run migrations (production)
npm run db:migrate

# Deploy migrations (production)
npm run db:migrate:deploy

# Seed database with initial data
npm run db:seed

# Open Prisma Studio (database GUI)
npm run db:studio

# Reset database (⚠️ This will delete all data)
npm run db:reset
\`\`\`

## Database Schema

The database includes the following main tables:

### UserProfile
- Stores user profile information
- Links to Clerk user ID
- Includes basic details, professional info, social links, and resume

### Education
- Stores educational background
- Multiple education entries per user
- Linked to UserProfile

### Application (Future feature)
- Tracks job applications
- Stores application status and details

### SavedOpportunity (Future feature)
- Stores saved job opportunities
- Allows users to bookmark interesting positions

## Production Deployment

### Using Vercel with PostgreSQL

1. Create a PostgreSQL database (recommended: Neon, Supabase, or Railway)

2. Add your production DATABASE_URL to Vercel environment variables

3. Add build command to run migrations:
\`\`\`json
{
  "scripts": {
    "build": "prisma generate && prisma migrate deploy && next build"
  }
}
\`\`\`

### Using Railway

1. Create a new Railway project
2. Add PostgreSQL service
3. Connect your GitHub repository
4. Railway will automatically detect and run your migrations

## Troubleshooting

### Common Issues

1. **"Environment variable not found: DATABASE_URL"**
   - Make sure your `.env` file exists and contains DATABASE_URL
   - Restart your development server after adding environment variables

2. **"Can't reach database server"**
   - Check if your database is running
   - Verify connection string format
   - For local PostgreSQL: `postgresql://username:password@localhost:5432/database_name`

3. **"Table doesn't exist"**
   - Run `npx prisma db push` to create tables
   - Or run `npx prisma migrate dev` to create and apply migrations

4. **Prisma Client errors**
   - Run `npx prisma generate` to regenerate the client
   - Restart your development server

### Getting Help

- Check the [Prisma documentation](https://www.prisma.io/docs)
- Visit the [Clerk documentation](https://clerk.com/docs) for authentication issues
- Open an issue in the project repository

## Next Steps

After setting up the database:

1. Start the development server: `npm run dev`
2. Visit `http://localhost:3000` to see your application
3. Sign up with Clerk authentication
4. Create your profile using the multi-step form
5. View your profile at `/profile`

The database is now ready to store user profiles, education details, and future features like job applications and saved opportunities!
