"use client";
import Image from "next/image";
import PhotoDesktop from "../../assets/images/photo-profile-desktop.jpeg";
import Rings from "../../assets/images/pattern-rings.svg";
import Circle from "../../assets/images/pattern-circle.svg";
import ContactLink from "../ContactLink";

type HeroSectionProps = {
  className?: string;
};

export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <div className={`${className} flex flex-col`}>
      <div className="flex flex-col items-center justify-between text-center md:flex-row-reverse md:text-left">
        <div className="flex justify-start md:h-[100vh]">
          <div className="flex items-end h-fit md:h-[80vh] xl:h-[90vh] bg-dark-500 relative md:right-[-2rem] xl:right-[0rem]">
            {/* Mobile picture */}
            <div className="md:hidden flex w-full z-30 relative">
              <Image
                className="absolute bottom-[0px] right-[-45vw] z-50"
                src={Circle}
                width={129}
                height={129}
                alt="Circle"
              />
              <Image
                className="absolute bottom-[0px] right-[-12px] z-50"
                src={Circle}
                width={24}
                height={24}
                alt="Circle"
              />
              <Image
                className="z-10"
                src={PhotoDesktop}
                alt="Photo de profile"
                width={174}
                height={383}
              />
            </div>
            {/* Tablette picture */}
            <div className="max-md:hidden xl:hidden z-30 relative">
              <Image
                className="absolute bottom-[0px] right-[-64px] z-50"
                src={Circle}
                width={129}
                height={129}
                alt="Circle"
              />
              <Image
                className=" z-10"
                src={PhotoDesktop}
                alt="Photo de profile"
                width={322}
                height={600}
              ></Image>
            </div>
            {/* Desktop Picture */}
            <div className="max-xl:hidden z-30 relative h-fit">
              <Image
                className="absolute bottom-[80px] left-[-62px] z-50"
                src={Circle}
                width={129}
                height={129}
                alt="Circle"
              />
              <Image
                className="z-10"
                src={PhotoDesktop}
                alt="Photo de profile"
                width={445}
                height={720}
              ></Image>
            </div>
          </div>
        </div>
        <div className=" pt-16 md:w-3/5 md:pt-16 z-50 md:h-[100vh] md:content-center">
          <h1 className="md:w-[120%] relative ">
            <Image
              className="absolute top-[-270px] md:top-[-70px] left-[-230px] z-10"
              src={Rings}
              width={530}
              height={129}
              alt="Rings"
            />
            Nice to meet you! I&apos;m{" "}
            <span className="underline decoration-[#4EE1A0] decoration-accent underline-offset-8">
              Ludovic&nbsp;Z
            </span>
            .
          </h1>
          <p className="pb-8 "></p>
          <p>
            Based in Paris, I’m a front-end developer passionate about building
            web apps that users love.
          </p>
          <p className="pb-16 md:pb-16"></p>
          <ContactLink />
          <p className="pb-8 md:pb-16"></p>
        </div>
      </div>
    </div>
  );
}
