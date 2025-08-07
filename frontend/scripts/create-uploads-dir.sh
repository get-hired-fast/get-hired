#!/bin/bash

echo "📂 Creating uploads directory..."

# Create public/uploads directory
mkdir -p public/uploads

# Create .gitkeep file to ensure directory is tracked
touch public/uploads/.gitkeep

echo "✅ Uploads directory created at public/uploads"
