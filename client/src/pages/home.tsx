import Header from "../components/header";
import HeroSection from "../components/hero-section";
import FeaturesSection from "../components/features-section";
import QuickStartSection from "../components/quick-start-section";
import ApiDocsSection from "../components/api-docs-section";
import ProjectStructureSection from "../components/project-structure-section";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <QuickStartSection />
      <ApiDocsSection />
      <ProjectStructureSection />
      <Footer />
    </div>
  );
}
