import { TbBrandGithub, TbBrandLeetcode } from "react-icons/tb";
import { SiCodechef, SiCodeforces } from "react-icons/si";
import { BiLogoLinkedin } from "react-icons/bi";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
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
      <div className="w-[2px] h-24 bg-textDark"></div>
    </div>
  );
}

export default LeftSide