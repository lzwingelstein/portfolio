import HeroSection from '@/components/HeroSection';
import SocialLinks from '../src/components/SocialLinks';
import './globals.css';
export default function Home() {

  return (
    <main className="p-4 md:p-8 xl:p-32 ">
      <SocialLinks/>
      <HeroSection/>
      <hr className="w-full text-white"/>
    </main>
  );
}
