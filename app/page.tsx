import HeroSection from "@/components/HeroSection";
import SocialLinks from "../src/components/SocialLinks";
import "./globals.css";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import ProjectSection from "@/components/ProjectSection";
export default function Home() {
  return (
    <main className="h-[100vh] overflow-x-hidden overflow-y-scroll md:snap-y md:snap-mandatory">
      <div className="px-4 md:px-8 xl:px-32 relative">
        <div className="absolute top-0 left-0 right-0 z-50 px-4 md:px-8 xl:px-32">
          <SocialLinks />
        </div>
        <HeroSection className="md:snap-start min-h-[100vh]" />
        <hr className="md:hidden w-full text-white" />
        <SkillsSection className="md:snap-start md:min-h-[100vh]" />
        <hr className="md:hidden w-full text-white" />
        <ProjectSection className="md:snap-start min-h-[100vh]" />
      </div>
      <Footer className="md:snap-start min-h-[100vh]" />
    </main>
  );
}
