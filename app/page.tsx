import HeroSection from "@/components/HeroSection";
import SocialLinks from "../src/components/SocialLinks";
import "./globals.css";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <div className="px-4 md:px-8 xl:px-32 relative">
        <div className="absolute top-0 left-0 right-0 z-50 px-4 md:px-8 xl:px-32">
          <SocialLinks />
        </div>
        <HeroSection />
        <hr className="w-full text-white" />
        <SkillsSection></SkillsSection>
      </div>
      <Footer />
    </main>
  );
}
