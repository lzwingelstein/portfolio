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
    "Next.js",
    "Docker",
    "PostgreSQL",
    "Datadog",
  ];

  const tools: string[] = ["Git", "Github", "Jenkins", "GitlabCI", "Jira"];

  const domains: string[] = ["Marketplace", "Logisticas", "Payment", "SEO"];

  const practice: string[] = [
    "Micro-services",
    "Hexagonal Architecture",
    "MVC",
    "Unit Test",
    "TDD",
    "DDD",
    "Scrum",
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
      name: "Domains",
      description: domains.join(separator),
    },
    {
      name: "Practice",
      description: practice.join(separator),
    },
  ];

  return (
    <ul className="grid md:grid-cols-2 gap-8 pt-10">
      {skills.map((skill: SkillData, index: number) => (
        <li key={index} className="basis-full md:basis-1/2">
          <Skill name={skill.name} description={skill.description} />
          <p className="pb-8"></p>
        </li>
      ))}
    </ul>
  );
}
