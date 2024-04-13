import HeroSection from '@/components/HeroSection';
import SocialLinks from '../src/components/SocialLinks';
import './globals.css';
export default function Home() {

  return (
    <main className="px-4 md:px-8 xl:px-32 ">
      <SocialLinks/>
      <HeroSection/>
      <hr className="w-full text-white"/>
    </main>
  );
}
