import { Card, CardContent } from "@/components/ui/card";
import { SiReact } from "react-icons/si";
import { Server, Database } from "lucide-react";

const components = [
  {
    icon: SiReact,
    title: "Frontend Components",
    color: "bg-blue-100 text-blue-600",
    items: [
      "User management interface",
      "Form components with validation",
      "Data tables with pagination",
      "Navigation and routing",
      "Error boundary components"
    ]
  },
  {
    icon: Server,
    title: "Backend Services",
    color: "bg-green-100 text-green-600",
    items: [
      "Express.js server setup",
      "Database connection pooling",
      "Authentication middleware",
      "Input validation & sanitization",
      "Error handling & logging"
    ]
  },
  {
    icon: Database,
    title: "Database Layer",
    color: "bg-purple-100 text-purple-600",
    items: [
      "PostgreSQL connection setup",
      "Migration system",
      "Seed data for development",
      "Query optimization",
      "Connection pooling"
    ]
  }
];

const directoryStructure = `fullstack-template/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API service functions
│   │   ├── utils/          # Utility functions
│   │   └── App.js
│   ├── package.json
│   └── tailwind.config.js
├── server/                 # Node.js backend
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── migrations/         # Database migrations
│   ├── config/             # Configuration files
│   └── server.js
├── database/               # Database setup
│   ├── migrations/
│   ├── seeds/
│   └── schema.sql
├── docker-compose.yml      # Docker setup
├── .env.example           # Environment template
└── README.md              # Setup instructions`;

export default function ProjectStructureSection() {
  return (
    <section id="structure" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Project Structure</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Clean, modular architecture for easy customization and scaling
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* File Structure */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Directory Structure</h3>
            <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm text-gray-100 overflow-x-auto">
              <pre>{directoryStructure}</pre>
            </div>
          </div>

          {/* Key Components */}
          <div className="space-y-8">
            {components.map((component, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${component.color}`}>
                      <component.icon className="text-lg" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{component.title}</h4>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    {component.items.map((item, itemIndex) => (
                      <li key={itemIndex}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
