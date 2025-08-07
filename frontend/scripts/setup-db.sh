#!/bin/bash

echo "🚀 Setting up Helpr database..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "📝 Creating .env file from .env.example..."
    cp .env.example .env
    echo "⚠️  Please update the DATABASE_URL and other environment variables in .env file"
    echo "⚠️  Then run this script again"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Generate Prisma client
echo "🔧 Generating Prisma client..."
npx prisma generate

# Push database schema (for development)
echo "🗄️  Pushing database schema..."
npx prisma db push

# Seed database (optional)
echo "🌱 Seeding database..."
npm run db:seed

echo "✅ Database setup complete!"
echo "🎉 You can now run 'npm run dev' to start the application"
echo "📊 Run 'npm run db:studio' to view your database in Prisma Studio"
