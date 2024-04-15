import ContactForm from "../ContactForm";
import SocialLinks from "../SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-dark-500 pt-16 px-4 md:px-8 xl:px-32 text-center">
      <ContactForm />
      <hr className="w-full text-white" />
      <SocialLinks />
    </footer>
  );
}
