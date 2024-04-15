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
    <div className="flex flex-col p-4">
      <Image src={image} alt={title} width={540} height={400} />
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{stack}</p>
      </div>
      {/* <div className="flex justify-end mt-4">
        <ButtonCTA onClick={() => window.open(link, "_blank")}>
          View Project
        </ButtonCTA>
        <ButtonCTA onClick={() => window.open(code, "_blank")}>
          View Code
        </ButtonCTA>
      </div> */}
    </div>
  );
}
