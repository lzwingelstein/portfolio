import ProjectCard from "../ProjectCard";
import Project1 from "../../assets/images/thumbnail-project-1-large.webp";
import Project2 from "../../assets/images/thumbnail-project-2-large.webp";
import Project3 from "../../assets/images/thumbnail-project-3-large.webp";
import ContactLink from "../ContactLink";

type ProjectSectionProps = {
  className?: string;
};

export default function ProjectSection({ className }: ProjectSectionProps) {
  return (
    <section className={`${className} pt-16`}>
      <div className="flex flex-row justify-between w-full items-center pb-4 md:pb-8">
        <h1 className="w-fit">Projects</h1>
        <ContactLink />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProjectCard
          title="Project 1"
          stack="HTML CSS JS"
          image={Project1}
          link="https://github.com"
          code="https://github.com"
        />
        <ProjectCard
          title="Project 2"
          stack="HTML CSS JS"
          image={Project2}
          link="https://github.com"
          code="https://github.com"
        />
        <ProjectCard
          title="Project 3"
          stack="HTML CSS JS"
          image={Project3}
          link="https://github.com"
          code="https://github.com"
        />
      </div>
      <p className="pb-20"></p>
    </section>
  );
}
