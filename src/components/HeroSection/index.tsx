import Button from "../Button";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
        <div className="md:w-3/5">
        <h1>Nice to meet you! I&apos;m <span className="underline decoration-[#4EE1A0] decoration-accent underline-offset-8">Ludovic Z</span>.</h1>
        <p className="pb-8 "></p>
        <p>Based in Paris, I’m a front-end developer passionate about building web apps that users love.</p>
        <p className="pb-8 md:pb-16"></p>
        <Button>CONTACT ME</Button>
        </div>
        <p className="pb-20"></p>
      
    </div>
  );
}