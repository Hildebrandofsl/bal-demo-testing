import { Card, CardContent } from "@/components/ui/card";
import { Layers, Code, Settings, Shield, TestTube, Book } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Full Stack Architecture",
    description: "Complete frontend and backend setup with proper separation of concerns and modular structure.",
    items: ["React with routing", "Express.js API server", "PostgreSQL database"]
  },
  {
    icon: Code,
    title: "CRUD Operations",
    description: "Complete Create, Read, Update, Delete functionality with database integration.",
    items: ["RESTful API endpoints", "Database migrations", "Form validation"]
  },
  {
    icon: Settings,
    title: "Environment Setup",
    description: "Production-ready configuration with environment variables and deployment setup.",
    items: ["Docker configuration", "Environment variables", "Development scripts"]
  },
  {
    icon: Shield,
    title: "Error Handling",
    description: "Comprehensive error handling and logging for robust application development.",
    items: ["Global error middleware", "Request validation", "Logging system"]
  },
  {
    icon: TestTube,
    title: "Testing Structure",
    description: "Basic testing setup for both frontend and backend with example test cases.",
    items: ["Jest configuration", "API testing", "Component tests"]
  },
  {
    icon: Book,
    title: "Documentation",
    description: "Clear documentation and setup instructions for quick local development.",
    items: ["Setup guides", "API documentation", "Code comments"]
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything You Need</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built with modern best practices and ready for production deployment
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
