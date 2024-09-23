"use client";
import Image from "next/image";
import PhotoDesktop from "../../assets/images/next-profile-1270x1556.png";
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
          <div className="flex items-end h-[40vh] md:h-[80vh] xl:h-[90vh] bg-dark-500 relative md:right-[-2rem] xl:right-[0rem]">
            {/* Mobile picture */}
            <div className="md:hidden flex w-full z-30 relative pr-[40px]">
              <Image
                className="absolute top-[0px] right-[-40vw] z-50"
                src={Circle}
                width={90}
                height={90}
                alt="Big circle"
              />
              <Image
                className="absolute bottom-[0px] right-[-12px] z-50"
                src={Circle}
                width={24}
                height={24}
                alt="Little circle"
              />
              <Image
                className="z-10"
                src={PhotoDesktop}
                alt="Photo de profile"
                width={140}
                height={383}
              />
            </div>
            {/* Tablette picture */}
            <div className="max-md:hidden xl:hidden z-30 relative pr-[50px]">
              <Image
                className="absolute top-[-100px] right-[-64px] z-50"
                src={Circle}
                width={120}
                height={120}
                alt="Big circle"
              />
              <Image
                className="absolute bottom-[130px] left-[-24px] z-50"
                src={Circle}
                width={48}
                height={48}
                alt="Little circle"
              />
              <Image
                className=" z-10"
                src={PhotoDesktop}
                alt="Photo de profile"
                width={280}
                height={600}
              ></Image>
            </div>
            {/* Desktop Picture */}
            <div className="max-xl:hidden z-30 relative h-fit pr-[80px]">
              <Image
                className="absolute bottom-[0px] right-[-64px] z-50"
                src={Circle}
                width={120}
                height={120}
                alt="Big circle"
              />
              <Image
                className="absolute top-[-240px] left-[-24px] z-50"
                src={Circle}
                width={48}
                height={48}
                alt="Little circle"
              />
              <Image
                className="z-10"
                src={PhotoDesktop}
                alt="Photo de profile"
                width={360}
                height={720}
              ></Image>
            </div>
          </div>
        </div>
        <div className=" pt-10 md:w-3/5 md:pt-16 z-50 md:h-[100vh] md:content-center">
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
            Based in Paris, I&apos;m a backend developer passionate about
            building software. I used to work with Golang, Nodejs and PostgreSQL
            on the backend side to create APIs and microservices. I also have
            experience with Docker, Kubernetes, and CI/CD pipelines. When
            I&apos;m coding I try to follow the best practices by tests and
            keeping the code simple and clean.
          </p>
          <p className="pb-10 md:pb-16"></p>
          <ContactLink />
          <p className="pb-8 md:pb-16"></p>
        </div>
      </div>
    </div>
  );
}
