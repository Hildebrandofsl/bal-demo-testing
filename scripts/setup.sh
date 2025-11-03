#!/bin/bash

# Setup script for FullStack Template
# This script helps set up the development environment

set -e

echo "🔧 FullStack Template Setup"
echo "============================"

# Check if required commands exist
command -v node >/dev/null 2>&1 || { echo "❌ Node.js is required but not installed. Please install Node.js 18 or higher." >&2; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "❌ npm is required but not installed. Please install npm." >&2; exit 1; }

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18 or higher is required. Current version: $(node --version)"
    exit 1
fi

echo "✅ Node.js $(node --version) found"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if .env file exists
if [ ! -f .env ]; then
    echo "⚙️  Creating .env file from template..."
    cp .env.example .env
    echo "📝 Please edit .env file with your database credentials"
    echo "   DATABASE_URL=postgresql://username:password@localhost:5432/database_name"
else
    echo "✅ .env file already exists"
fi

# Check if database is accessible
echo "🗄️  Checking database connection..."
if npm run db:push > /dev/null 2>&1; then
    echo "✅ Database connection successful"
else
    echo "⚠️  Database connection failed. Please check your DATABASE_URL in .env"
    echo "   Make sure PostgreSQL is running and credentials are correct"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env file with your database credentials"
echo "2. Run 'npm run db:push' to set up database schema"
echo "3. Run 'npm run dev' to start development server"
echo ""
echo "📚 Documentation:"
echo "   - README.md for detailed setup instructions"
echo "   - CONTRIBUTING.md for contribution guidelines"
echo "   - API documentation at http://localhost:5000 once running"