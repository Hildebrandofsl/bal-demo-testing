#!/bin/bash

# Deployment script for FullStack Template
# This script helps deploy the application to various platforms

set -e

echo "🚀 FullStack Template Deployment Script"
echo "========================================"

# Check if required commands exist
command -v node >/dev/null 2>&1 || { echo "❌ Node.js is required but not installed. Aborting." >&2; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "❌ npm is required but not installed. Aborting." >&2; exit 1; }

# Function to deploy to different platforms
deploy_local() {
    echo "📦 Building for local production..."
    npm run build
    echo "✅ Build complete! Run 'npm start' to serve the application."
}

deploy_docker() {
    echo "🐳 Building Docker image..."
    docker build -t fullstack-template .
    echo "✅ Docker image built! Run 'docker-compose up' to start with database."
}

deploy_vercel() {
    echo "▲ Preparing for Vercel deployment..."
    echo "1. Install Vercel CLI: npm i -g vercel"
    echo "2. Run: vercel"
    echo "3. Set DATABASE_URL environment variable in Vercel dashboard"
    echo "4. Deploy: vercel --prod"
}

deploy_netlify() {
    echo "🌐 Preparing for Netlify deployment..."
    echo "1. Install Netlify CLI: npm i -g netlify-cli"
    echo "2. Run: netlify deploy"
    echo "3. Set DATABASE_URL environment variable in Netlify dashboard"
    echo "4. Deploy: netlify deploy --prod"
}

deploy_railway() {
    echo "🚂 Preparing for Railway deployment..."
    echo "1. Install Railway CLI: npm i -g @railway/cli"
    echo "2. Run: railway login"
    echo "3. Run: railway init"
    echo "4. Add PostgreSQL service: railway add postgresql"
    echo "5. Deploy: railway up"
}

# Main deployment logic
case "${1:-local}" in
    "local")
        deploy_local
        ;;
    "docker")
        deploy_docker
        ;;
    "vercel")
        deploy_vercel
        ;;
    "netlify")
        deploy_netlify
        ;;
    "railway")
        deploy_railway
        ;;
    "help")
        echo "Usage: ./scripts/deploy.sh [platform]"
        echo ""
        echo "Available platforms:"
        echo "  local     - Build for local production (default)"
        echo "  docker    - Build Docker image"
        echo "  vercel    - Instructions for Vercel deployment"
        echo "  netlify   - Instructions for Netlify deployment"
        echo "  railway   - Instructions for Railway deployment"
        echo "  help      - Show this help message"
        ;;
    *)
        echo "❌ Unknown deployment target: $1"
        echo "Run './scripts/deploy.sh help' for usage information."
        exit 1
        ;;
esac