# FullStack Template

A complete, production-ready fullstack application template built with React, Node.js, Express, and PostgreSQL. Perfect for rapid application development with modern best practices.

## 🚀 Features

- **Frontend**: React 18 with TypeScript and Tailwind CSS
- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **UI Components**: shadcn/ui with Radix UI primitives
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing
- **Form Handling**: React Hook Form with Zod validation
- **Styling**: Tailwind CSS with responsive design
- **Development**: Hot reload with Vite
- **Type Safety**: Full TypeScript implementation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database

## ⚡ Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/fullstack-template.git
cd fullstack-template
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/your_database
NODE_ENV=development
```

### 4. Database Setup

Push the database schema:

```bash
npm run db:push
```

### 5. Start Development Server

```bash
npm run dev
```

Your application will be running at:
- Frontend: http://localhost:5000
- Backend API: http://localhost:5000/api

## 🏗️ Project Structure

```
fullstack-template/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities and configurations
│   │   └── App.tsx         # Main app component
│   └── index.html
├── server/                 # Express.js backend
│   ├── db.ts              # Database connection
│   ├── storage.ts         # Data access layer
│   ├── routes.ts          # API routes
│   ├── index.ts           # Server entry point
│   └── vite.ts            # Vite middleware
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Database schema definitions
├── package.json
└── README.md
```

## 🗄️ Database Schema

The template includes a basic users table:

| Column     | Type         | Constraints        |
|------------|--------------|-------------------|
| id         | SERIAL       | PRIMARY KEY       |
| name       | VARCHAR(100) | NOT NULL          |
| email      | VARCHAR(255) | UNIQUE, NOT NULL  |
| password   | TEXT         | NOT NULL          |
| created_at | TIMESTAMP    | DEFAULT NOW()     |
| updated_at | TIMESTAMP    | DEFAULT NOW()     |

## 🔌 API Endpoints

### Users API

| Method | Endpoint        | Description           |
|--------|----------------|-----------------------|
| GET    | `/api/users`   | Get all users (paginated) |
| GET    | `/api/users/:id` | Get user by ID       |
| POST   | `/api/users`   | Create new user       |
| PUT    | `/api/users/:id` | Update user          |
| DELETE | `/api/users/:id` | Delete user          |

### Example API Usage

```javascript
// Get all users
const response = await fetch('/api/users?page=1&limit=10');
const data = await response.json();

// Create a new user
const newUser = await fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'securepassword'
  })
});
```

## 🛠️ Development

### Available Scripts

```bash
# Start development server (frontend + backend)
npm run dev

# Push database schema changes
npm run db:push

# Generate database migrations
npm run db:generate

# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables

| Variable      | Description                    | Required |
|---------------|--------------------------------|----------|
| DATABASE_URL  | PostgreSQL connection string   | Yes      |
| NODE_ENV      | Environment (development/production) | No   |

## 🚀 Deployment

### Option 1: Replit

1. Fork this repository on Replit
2. Set your `DATABASE_URL` environment variable
3. Run `npm run db:push` to set up the database
4. Click "Run" to start your application

### Option 2: Vercel/Netlify

1. Connect your GitHub repository
2. Set environment variables in your deployment platform
3. Build command: `npm run build`
4. Output directory: `dist`

### Option 3: Traditional Hosting

1. Build the application: `npm run build`
2. Upload the `dist` folder to your server
3. Set up your PostgreSQL database
4. Configure environment variables
5. Start with: `npm start`

## 🎨 Customization

### Adding New Pages

1. Create a new component in `client/src/pages/`
2. Register the route in `client/src/App.tsx`
3. Add navigation links as needed

### Database Changes

1. Modify the schema in `shared/schema.ts`
2. Update the storage interface in `server/storage.ts`
3. Run `npm run db:push` to apply changes

### Styling

- Global styles: `client/src/index.css`
- Component styles: Use Tailwind classes
- Custom components: `client/src/components/ui/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you have questions or need help:

- Create an issue on GitHub
- Check the documentation
- Review the example code in the template

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Frontend framework
- [Express.js](https://expressjs.com/) - Backend framework
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [TanStack Query](https://tanstack.com/query) - Data fetching