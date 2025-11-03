import { Button } from "@/components/ui/button";
import { Download, Github } from "lucide-react";
import { SiReact, SiNodedotjs, SiPostgresql } from "react-icons/si";
import { Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="overview" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Production-Ready
            <span className="text-primary"> FullStack Template</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A complete React + Node.js + PostgreSQL template with modern development setup, 
            CRUD operations, and best practices for rapid application development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-white hover:bg-blue-600">
              <Download className="mr-2 h-5 w-5" />
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>
        </div>
        
        {/* Tech Stack Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <div className="flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
            <SiReact className="text-lg" />
            <span className="font-medium">React 18</span>
          </div>
          <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
            <SiNodedotjs className="text-lg" />
            <span className="font-medium">Node.js</span>
          </div>
          <div className="flex items-center space-x-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full">
            <SiPostgresql className="text-lg" />
            <span className="font-medium">PostgreSQL</span>
          </div>
          <div className="flex items-center space-x-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full">
            <Zap className="text-lg" />
            <span className="font-medium">Express.js</span>
          </div>
        </div>
      </div>
    </section>
  );
}
