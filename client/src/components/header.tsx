import { Button } from "@/components/ui/button";
import { Layers, Github } from "lucide-react";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Layers className="text-white text-sm" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">FullStack Template</h1>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('overview')}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Overview
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('setup')}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Quick Start
            </button>
            <button 
              onClick={() => scrollToSection('api')}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              API Docs
            </button>
            <button 
              onClick={() => scrollToSection('structure')}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Structure
            </button>
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="bg-primary text-white hover:bg-blue-600">
              <Github className="mr-2 h-4 w-4" />
              Clone Template
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
