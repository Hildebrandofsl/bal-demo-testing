# replit.md

## Overview

This is a complete, production-ready fullstack application template built with React, Node.js, Express, and PostgreSQL. The application serves as a comprehensive starting point for modern web applications, featuring a complete user management system, API documentation, and deployment-ready configuration. The template includes all necessary files for GitHub deployment, including Docker support, CI/CD workflows, and platform-specific deployment configurations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM for type-safe database operations
- **API Pattern**: RESTful API with structured error handling
- **Session Management**: Express sessions with PostgreSQL store

### Project Structure
```
├── client/          # React frontend application
├── server/          # Express.js backend server
├── shared/          # Shared schemas and types
└── migrations/      # Database migration files
```

## Key Components

### Database Layer
- **Schema Definition**: Located in `shared/schema.ts` with Drizzle schema definitions
- **Connection**: Neon serverless PostgreSQL with connection pooling
- **Migrations**: Drizzle Kit for schema migrations and database synchronization
- **Storage Layer**: Database abstraction through storage classes in `server/storage.ts`

### API Layer
- **Routes**: RESTful endpoints for user management (GET, POST, PUT, DELETE)
- **Validation**: Zod schema validation for request data
- **Error Handling**: Global error middleware with structured error responses
- **Logging**: Request/response logging with performance metrics

### Frontend Components
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Routing**: Simple client-side routing with Wouter
- **Data Fetching**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

## Data Flow

1. **Client Requests**: Frontend makes HTTP requests to `/api/*` endpoints
2. **API Processing**: Express routes handle requests with validation and error handling
3. **Database Operations**: Storage layer interacts with PostgreSQL via Drizzle ORM
4. **Response**: Structured JSON responses with proper HTTP status codes
5. **State Management**: TanStack Query caches and manages server state on the client

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management for React
- **@radix-ui/***: Headless UI components for accessibility
- **zod**: Schema validation for TypeScript
- **react-hook-form**: Form state management and validation

### Development Tools
- **Vite**: Fast development server and build tool
- **TypeScript**: Type safety across the entire application
- **Tailwind CSS**: Utility-first CSS framework
- **Drizzle Kit**: Database migrations and introspection

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Single Deployment**: Both frontend and backend deploy as a single Node.js application

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment setting (development/production)
- **Session Configuration**: Handled through environment variables

### Production Setup
- Static files served from Express server
- Database migrations run via `npm run db:push`
- Single process serves both API and static frontend assets
- Proper error handling and logging for production monitoring

The application is designed to be easily deployable to platforms like Replit, Vercel, Netlify, Railway, or traditional hosting providers with minimal configuration changes. Complete deployment configurations and instructions are included for multiple platforms.

## Recent Changes (2024-01-28)

✓ Fixed all TypeScript compilation errors and LSP diagnostics
✓ Added complete GitHub repository setup with .gitignore and README.md
✓ Created comprehensive documentation (CONTRIBUTING.md, CHANGELOG.md, SECURITY.md)
✓ Added deployment configurations (Docker, Vercel, Netlify, Railway)
✓ Implemented CI/CD workflow with GitHub Actions
✓ Created setup and deployment scripts for easy local development
✓ Added environment configuration examples (.env.example)
✓ Included MIT license and security policy
✓ Set up database schema and verified PostgreSQL connection
✓ Created production-ready build configuration