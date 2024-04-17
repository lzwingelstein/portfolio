import ContactForm from "../ContactForm";
import SocialLinks from "../SocialLinks";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={`${className} bg-dark-500 pt-16 px-4 md:px-8 xl:px-32 text-center flex flex-col`}
    >
      <ContactForm />
      <div className="space"></div>
      <hr className="w-full text-white" />
      <div className="flex items-stretch h-full">
        <SocialLinks className="self-end" />
      </div>
    </footer>
  );
}
