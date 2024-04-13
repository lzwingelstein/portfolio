import Image from "next/image";
import Button from "../Button";
import Photo from "../../assets/images/photo-profile-desktop.jpeg";

export default function HeroSection() {
  return (
    <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center text-center md:flex-row-reverse md:items-end md:text-left md:justify-between">

          <div className="h-full">
            <Image  src={Photo} alt="Photo de profile" width={300} height={300}></Image>
          </div>
          <div className="md:w-3/5">
            <h1>Nice to meet you! I&apos;m <span className="underline decoration-[#4EE1A0] decoration-accent underline-offset-8">Ludovic&nbsp;Z</span>.</h1>
            <p className="pb-8 "></p>
            <p>Based in Paris, I’m a front-end developer passionate about building web apps that users love.</p>
            <p className="pb-8 md:pb-16"></p>
            <Button>CONTACT ME</Button>
          </div>
        </div>
        <p className="pb-20"></p>
      
    </div>
  );
}