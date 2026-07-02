import { TbBrandGithub, TbBrandInstagram } from "react-icons/tb";
import { FiLinkedin, FiPhoneCall } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

interface SocialMediaProps {
  idName: string;
}

const SocialMedia = ({ idName }: SocialMediaProps) => (
  <div
    className={`w-fit hidden md:flex flex-col gap-6 ${
      idName === "boogiedml" || idName === "skills"
        ? "text-[#CCF381]"
        : idName === "about" || idName === "projects" || idName === "contact"
          ? "text-[#4732D3]"
          : ""
    } dark:text-[#9A9A9A] absolute bottom-10 left-8 lg:left-12 xl:left-16`}
  >
    <a
      href="https://github.com/boogiedml"
      className="dark:hover:text-white transition-all duration-300"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <TbBrandGithub size={20} />
      </div>
    </a>
    <a
      href="https://www.instagram.com/boogiedml/"
      className="dark:hover:text-white transition-all duration-300"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <TbBrandInstagram size={20} />
      </div>
    </a>
    <a
      href="https://twitter.com/boogiedml"
      className="dark:hover:text-white transition-all duration-300"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <FaXTwitter size={20} />
      </div>
    </a>
    <a
      href="https://www.linkedin.com/in/sherifdeen-ishola-mern-stack-web-developer/"
      className="dark:hover:text-white transition-all duration-300"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <FiLinkedin size={20} />
      </div>
    </a>
    <a
      href="tel:+2348158121780"
      className="dark:hover:text-white transition-all duration-300"
    >
      <div>
        <FiPhoneCall size={20} />
      </div>
    </a>
  </div>
);

export default SocialMedia;
