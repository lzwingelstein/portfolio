import ProjectCard from "../ProjectCard";
import Project1 from "../../assets/images/project-portfolio.png";
import Project2 from "../../assets/images/project-pay4fun.jpg";
import ContactLink from "../ContactLink";

type ProjectSectionProps = {
  className?: string;
};

export default function ProjectSection({ className }: ProjectSectionProps) {
  return (
    <section className={`${className} pt-16 xl:pt-40 pb-20`}>
      <div className="flex flex-row justify-between w-full items-center pb-4 md:pb-8">
        <h1 className="w-fit">Projects</h1>
        <ContactLink />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <ProjectCard
          title="Portfolio"
          stack="React NextJS"
          image={Project1}
          link="https://ludev.fr"
          code="https://github.com/lzwingelstein/portfolio"
        />
        <ProjectCard
          title="Play4Fun"
          stack="React NextJS"
          image={Project2}
          link="https://play4fun.ludev.fr"
          code="https://github.com/lzwingelstein/four-fun"
        />
      </div>
    </section>
  );
}
