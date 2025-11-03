import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    number: 1,
    title: "Clone the Repository",
    description: "Download the template to your local machine",
    code: "git clone https://github.com/username/fullstack-template.git"
  },
  {
    number: 2,
    title: "Install Dependencies",
    description: "Install both frontend and backend dependencies",
    code: `cd fullstack-template
npm install
cd client && npm install`
  },
  {
    number: 3,
    title: "Setup Environment",
    description: "Configure your database connection",
    code: `DATABASE_URL=postgresql://username:password@localhost:5432/mydb
JWT_SECRET=your-secret-key
NODE_ENV=development`
  },
  {
    number: 4,
    title: "Start Development",
    description: "Run both frontend and backend servers",
    code: "npm run dev"
  }
];

const features = [
  "React app running on localhost:3000",
  "Express API server on localhost:5000",
  "PostgreSQL database connection",
  "Hot reload for development",
  "Working CRUD operations"
];

export default function QuickStartSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="setup" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Quick Start</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get your development environment running in minutes
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Setup Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400">Terminal</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-400 hover:text-white h-6 w-6 p-0"
                        onClick={() => copyToClipboard(step.code, index)}
                      >
                        {copiedIndex === index ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                      </Button>
                    </div>
                    <pre className="whitespace-pre-wrap">{step.code}</pre>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Preview Card */}
          <div className="bg-gradient-to-br from-primary to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">What You'll Get</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="text-green-300 h-5 w-5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <Card className="mt-8 bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="pt-4">
                <h4 className="font-semibold mb-2 text-white">URLs</h4>
                <div className="space-y-1 text-sm text-white/90">
                  <div>Frontend: http://localhost:3000</div>
                  <div>Backend: http://localhost:5000</div>
                  <div>API Docs: http://localhost:5000/api-docs</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
