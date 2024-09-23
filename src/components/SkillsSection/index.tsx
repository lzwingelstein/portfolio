import Skill from "../Skill";

interface SkillData {
  name: string;
  description?: string;
}

type SkillsSectionProps = {
  className?: string;
};

export default function SkillsSection({ className }: SkillsSectionProps) {
  const separator = " • ";
  const frontends: string[] = ["Vue.js", "React", "TypeScript"];

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
    "Jenkins",
    "GitlabCI",
    "Datadog",
  ];

  const domains: string[] = ["Marketplace", "Logistics", "Payment"];

  const practices: string[] = [
    "Micro-services",
    "Hexagonal Architecture",
    "Database Indexing",
    "Unit Test",
    "TDD",
    "Keep it Simple",
    "Scrum",
  ];

  const softskills: string[] = [
    "Pragmatism",
    "Teamwork",
    "Communication",
    "Problem-solving",
    "Pair Programming",
  ];

  const skills: SkillData[] = [
    {
      name: "Backend",
      description: backends.join(separator),
    },
    {
      name: "Frontend",
      description: frontends.join(separator),
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
      className={`${className} pt-10 md:pt-10 xl:pt-40 pb-10 md:flex md:align-middle`}
    >
      <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4 xl:gap-y-10">
        {skills.map((skill: SkillData, index: number) => (
          <li key={index} className="basis-full md:basis-1/2 p-10">
            <Skill name={skill.name} description={skill.description} />
          </li>
        ))}
      </ul>
    </section>
  );
}
