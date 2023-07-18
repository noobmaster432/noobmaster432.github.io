import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Gyan } from "@/public/assets";
import { useRef, useState } from "react";
import {MdOutlineClose} from "react-icons/md";
import { TbBrandGithub, TbBrandLeetcode } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiCodechef, SiCodeforces } from "react-icons/si";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });

    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick(e: any) {
    if(e.target.contains(ref.current)){
      setShowMenu(false);
    }
  }

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-8">
      <div className="max-w-container h-full mx-auto py-1 font-sans flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={Gyan} className="w-8" alt="Gyan" />
        </motion.div>
        <div className="hidden mdl:inline-flex gap-7">
          <ul className="flex text-sm items-center md:gap-5 lg:gap-7">
            <Link
              href="#home"
              onClick={handleScroll}
              className="nav-link text-textDark hover:text-textGreen font-medium flex items-center gap-1 transition duration-300 ease-in-out"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              href="#about"
              onClick={handleScroll}
              className="nav-link text-textDark hover:text-textGreen font-medium flex items-center gap-1 transition duration-300 ease-in-out"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                <span className="text-textGreen">01.</span>About
              </motion.li>
            </Link>
            <Link
              href="#experience"
              onClick={handleScroll}
              className="nav-link text-textDark hover:text-textGreen font-medium flex items-center gap-1 transition duration-300 ease-in-out"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                <span className="text-textGreen">02.</span>Experience
              </motion.li>
            </Link>
            <Link
              href="#projects"
              onClick={handleScroll}
              className="nav-link text-textDark hover:text-textGreen font-medium flex items-center gap-1 transition duration-300 ease-in-out"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className="text-textGreen">03.</span>Projects
              </motion.li>
            </Link>
            <Link
              href="#contact"
              onClick={handleScroll}
              className="nav-link text-textDark hover:text-textGreen font-medium flex items-center gap-1 transition duration-300 ease-in-out"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                <span className="text-textGreen">04.</span>Contact
              </motion.li>
            </Link>
          </ul>
          <a href="/assets/gyan_resume.pdf" target="_blank" className="w-fit">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-textGreen px-4 py-2 rounded-md font-medium text-sm border border-textGreen hover:bg-hoverColor transition duration-300 ease-in-out"
            >
              Resume
            </motion.button>
          </a>
        </div>

        {/* Small Icon Section  */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-3/4 h-full overflow-y-scroll scrollbar-none bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex text-sm flex-col gap-7">
                  <Link
                    href="#home"
                    onClick={handleScroll}
                    className="nav-link text-textDark hover:text-textGreen font-medium flex items-center gap-1 transition duration-300 ease-in-out"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    href="#about"
                    onClick={handleScroll}
                    className="nav-link text-textDark hover:text-textGreen font-medium flex items-center gap-1 transition duration-300 ease-in-out"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                    >
                      <span className="text-textGreen">01.</span>About
                    </motion.li>
                  </Link>
                  <Link
                    href="#experience"
                    onClick={handleScroll}
                    className="nav-link text-textDark hover:text-textGreen font-medium flex items-center gap-1 transition duration-300 ease-in-out"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      <span className="text-textGreen">02.</span>Experience
                    </motion.li>
                  </Link>
                  <Link
                    href="#projects"
                    onClick={handleScroll}
                    className="nav-link text-textDark hover:text-textGreen font-medium flex items-center gap-1 transition duration-300 ease-in-out"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      <span className="text-textGreen">03.</span>Projects
                    </motion.li>
                  </Link>
                  <Link
                    href="#contact"
                    onClick={handleScroll}
                    className="nav-link text-textDark hover:text-textGreen font-medium flex items-center gap-1 transition duration-300 ease-in-out"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                    >
                      <span className="text-textGreen">04.</span>Contact
                    </motion.li>
                  </Link>
                </ul>
                <a
                  href="/assets/gyan_resume.pdf"
                  target="_blank"
                  className="w-fit"
                >
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, ease: "easeIn" }}
                    className="text-textGreen px-4 py-2 rounded-md font-medium text-sm border border-textGreen hover:bg-hoverColor transition duration-300 ease-in-out"
                  >
                    Resume
                  </motion.button>
                </a>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, ease: "easeIn" }}
                  className="inline-flex items-center justify-center w-full py-6 gap-4"
                >
                  <a href="https://github.com/noobmaster432" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-1 transition-all duration-300">
                      <TbBrandGithub />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/noobmaster432"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-1 transition-all duration-300">
                      <SlSocialLinkedin />
                    </span>
                  </a>
                  <a
                    href="https://leetcode.com/noobmaster_432/"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-1 transition-all duration-300">
                      <TbBrandLeetcode />
                    </span>
                  </a>
                  <a
                    href="https://www.codechef.com/users/noobmaster_432"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-1 transition-all duration-300">
                      <SiCodechef />
                    </span>
                  </a>
                  <a
                    href="https://codeforces.com/profile/noobmaster432"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-1 transition-all duration-300">
                      <SiCodeforces />
                    </span>
                  </a>
                </motion.div>
              </div>
              <motion.a
                href="mailto:mrgyan432@gmail.com"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, ease: "easeIn" }}
                className="text-sm text-textDark mt-2 font-medium hover:text-textGreen transition duration-300 ease-in-out"
              >
                mrgyan432@gmail.com
              </motion.a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
