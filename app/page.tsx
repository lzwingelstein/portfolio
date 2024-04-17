import HeroSection from "@/components/HeroSection";
import SocialLinks from "../src/components/SocialLinks";
import "./globals.css";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import ProjectSection from "@/components/ProjectSection";
export default function Home() {
  return (
    <main className="h-[100vh] overflow-x-hidden overflow-y-scroll">
      <div className="px-4 md:px-8 xl:px-32 relative">
        <div className="absolute top-0 left-0 right-0 z-50 px-4 md:px-8 xl:px-32">
          <SocialLinks />
        </div>
        <HeroSection className="min-h-[100vh]" />
        {/* <hr className="w-full text-white" /> */}
        <SkillsSection className="md:min-h-[100vh]" />
        {/* <hr className="md:hidden w-full text-white" /> */}
        <ProjectSection className="min-h-[100vh]" />
      </div>
      <Footer className="min-h-[100vh]" />
    </main>
  );
}
