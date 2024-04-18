import Skill from "../Skill";

interface SkillData {
  name: string;
  description?: string;
}

type SkillsSectionProps = {
  className?: string;
};

export default function SkillsSection({ className }: SkillsSectionProps) {
  const separator = " | ";
  const frontends: string[] = [
    "HTML",
    "CSS",
    "TypeScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "Vue.js",
    "Cypress",
  ];

  const backends: string[] = [
    "Go",
    "Node.js",
    "NestJS",
    "Python",
    "PostgreSQL",
  ];

  const devops: string[] = [
    "Docker",
    "Kubernetes",
    "AWS",
    "Jenkins",
    "GitlabCI",
    "Datadog",
  ];

  const domains: string[] = ["Marketplace", "Logistics", "Payment", "SEO"];

  const practices: string[] = [
    "Micro-services",
    "Hexagonal Architecture",
    "MVC",
    "Unit Test",
    "TDD",
    "DDD",
    "Scrum",
  ];

  const softskills: string[] = [
    "Pragmatism",
    "Teamwork",
    "Communication",
    "Problem-solving",
  ];

  const skills: SkillData[] = [
    {
      name: "Frontend",
      description: frontends.join(separator),
    },
    {
      name: "Backend",
      description: backends.join(separator),
    },
    {
      name: "Practices",
      description: practices.join(separator),
    },
    {
      name: "DevOps",
      description: devops.join(separator),
    },
    {
      name: "Domains",
      description: domains.join(separator),
    },
    {
      name: "Soft Skills",
      description: softskills.join(separator),
    },
  ];

  return (
    <section
      className={`${className} pt-16 md:pt-16 pb-20 md:flex md:align-middle`}
    >
      <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-28 gap-y-14 xl:gap-y-40 items-center">
        {skills.map((skill: SkillData, index: number) => (
          <li key={index} className="basis-full md:basis-1/2">
            <Skill name={skill.name} description={skill.description} />
          </li>
        ))}
      </ul>
    </section>
  );
}
