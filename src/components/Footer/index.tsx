import ContactForm from "../ContactForm";
import SocialLinks from "../SocialLinks";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={`${className} bg-dark-500 pt-16 px-4 md:px-8 xl:px-32 flex flex-col`}
    >
      <ContactForm className="grow pb-20" />
      <div className="flex-none">
        <hr className="w-full text-white" />
        <SocialLinks />
      </div>
    </footer>
  );
}
