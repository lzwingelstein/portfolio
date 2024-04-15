'use client'
import Image from "next/image";
import Button from "../Button";
import PhotoMobile from "../../assets/images/image-profile-mobile.webp";
import PhotoTablet from "../../assets/images/image-profile-tablet.webp";
import PhotoDesktop from "../../assets/images/image-profile-desktop.webp";
import Rings from "../../assets/images/pattern-rings.svg";
import useWindowSize from "@/hooks/useWindowSize";

export default function HeroSection() {
  const size = useWindowSize();
  return (
    <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center text-center md:flex-row-reverse  md:text-left md:justify-between">
          {size.width && size.width<768 && <div className="h-full w-[174px] z-30">
            <Image className="z-10" src={PhotoMobile} alt="Photo de profile" width={174} height={383}/>
          </div>}
          {size.width && size.width>=768 && size.width<1024 && <div className="h-full z-30">
            <Image className="z-10" src={PhotoTablet} alt="Photo de profile" width={322} height={600}/>
          </div>}
          {size.width && size.width>=1024 && <div className="h-full z-30">
            <Image className="z-10" src={PhotoDesktop} alt="Photo de profile" width={445} height={720}/>
          </div>}
          <div className="md:w-3/5 md:pt-16 z-50">
            <h1 className="md:w-[120%] relative">
              <Image className="absolute top-[-270px] md:top-[-70px] left-[-230px] z-10" src={Rings} width={530} height={129} alt="Rings"/>
              Nice to meet you! I&apos;m <span className="underline decoration-[#4EE1A0] decoration-accent underline-offset-8">Ludovic&nbsp;Z</span>.
            </h1>
            <p className="pb-8 "></p>
            <p>Based in Paris, I’m a front-end developer passionate about building web apps that users love.</p>
            <p className="pb-8 md:pb-16"></p>
            <Button>CONTACT ME</Button>
            <p className="md:pb-16"></p>
          </div>
        </div>
        <p className="pb-16"></p>
    </div>
  );
}