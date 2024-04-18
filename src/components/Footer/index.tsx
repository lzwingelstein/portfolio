import ContactForm from "../ContactForm";
import SocialLinks from "../SocialLinks";
import Rings from "../../assets/images/pattern-rings.svg";
import Image from "next/image";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={`${className} bg-dark-500 pt-16 px-4 md:px-8 xl:px-32 flex flex-col relative`}
    >
      <ContactForm className="grow pb-20" />
      <div className="flex-none">
        <hr className="w-full text-white" />
        <SocialLinks />
      </div>
      <Image
        className="absolute bottom-[30vh] left-[-230px] z-0"
        src={Rings}
        width={530}
        height={129}
        alt="Rings"
      />
    </footer>
  );
}
