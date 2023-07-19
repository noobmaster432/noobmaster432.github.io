import { TbBrandGithub, TbBrandLeetcode } from "react-icons/tb";
import { BiLogoLinkedin } from "react-icons/bi";
import { SiCodechef, SiCodeforces } from "react-icons/si";

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <a href="https://github.com/noobmaster432" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-1 transition-all duration-300">
          <TbBrandGithub />
        </span>
      </a>
      <a href="https://www.linkedin.com/in/noobmaster432" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-1 transition-all duration-300">
          <BiLogoLinkedin />
        </span>
      </a>
      <a href="https://leetcode.com/noobmaster_432/" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-1 transition-all duration-300">
          <TbBrandLeetcode />
        </span>
      </a>
      <a href="https://www.codechef.com/users/noobmaster_432" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-1 transition-all duration-300">
          <SiCodechef />
        </span>
      </a>
      <a href="https://codeforces.com/profile/noobmaster432" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-1 transition-all duration-300">
          <SiCodeforces />
        </span>
      </a>
    </div>
  );
};

export default Footer;
