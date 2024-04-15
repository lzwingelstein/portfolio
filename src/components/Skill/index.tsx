interface SkillProps {
  name: string;
  description?: string;
}

export default function Skill({ name, description }: SkillProps) {
  return (
    <div className="text-center">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}
