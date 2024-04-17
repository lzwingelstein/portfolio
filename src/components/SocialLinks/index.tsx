import Image from "next/image";
import GithubIcon from "@/assets/images/icon-github.svg";
import LinkedinIcon from "@/assets/images/icon-linkedin.svg";
import FrontendMentorIcon from "@/assets/images/icon-frontend-mentor.svg";
import { ReactElement } from "react";

type SocialLinksProps = {
  className?: string;
};

const SocialLinks = ({ className }: SocialLinksProps): ReactElement => {
  return (
    <div
      className={`${className} flex flex-col md:flex-row justify-between w-full pt-[20px] md:pt-[29px] l:pt-[40px] pb-8 z-50`}
    >
      <p className="text-center font-bold">ludoviczwingelstein</p>
      <p className="p-3 md:p-0"></p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/lzwingelstein"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={GithubIcon} alt="Github" width={20} height={20} />
        </a>
        <a
          href="https://linkedin.com/in/lzwingelstein"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={LinkedinIcon} alt="Linkedin" width={20} height={20} />
        </a>
        <a
          href="https://www.frontendmentor.io/profile/lzwingelstein"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={FrontendMentorIcon}
            alt="Frontend Mentor"
            width={20}
            height={20}
          />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
