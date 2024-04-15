import Skill from "../Skill";

interface SkillData {
  name: string;
  description?: string;
}

export default function SkillsSection() {
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
    <section>
      <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-28 gap-y-14 pt-10">
        {skills.map((skill: SkillData, index: number) => (
          <li key={index} className="basis-full md:basis-1/2">
            <Skill name={skill.name} description={skill.description} />
          </li>
        ))}
      </ul>
      <p className="pb-10"></p>
    </section>
  );
}
