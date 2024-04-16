"use client";
import Image, { StaticImageData } from "next/image";
import ButtonCTA from "../ButtonCTA";

type ProjectCardProps = {
  code: string;
  image: StaticImageData;
  link: string;
  stack: string;
  title: string;
};

export default function ProjectCard({
  code,
  image,
  link,
  stack,
  title,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col p-4 ">
      <div className="relative group overflow-hidden cursor-pointer">
        <Image
          src={image}
          alt={title}
          layout={"responsive"}
          objectFit={"contain"}
          className="ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125"
        />
        <div
          className="bg-[#00000090] absolute invisible group-hover:visible flex flex-col space-y-4 items-center justify-center"
          style={{ inset: 0 }}
        >
          <ButtonCTA onClick={() => window.open(link, "_blank")}>
            View Project
          </ButtonCTA>
          <ButtonCTA onClick={() => window.open(code, "_blank")}>
            View Code
          </ButtonCTA>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">{title.toUpperCase()}</h3>
        <p className="text-sm text-gray-500">{stack.toLocaleUpperCase()}</p>
      </div>
      <div className="flex space-x-7 mt-4 xl:hidden">
        <ButtonCTA onClick={() => window.open(link, "_blank")}>
          View Project
        </ButtonCTA>
        <ButtonCTA onClick={() => window.open(code, "_blank")}>
          View Code
        </ButtonCTA>
      </div>
    </div>
  );
}
