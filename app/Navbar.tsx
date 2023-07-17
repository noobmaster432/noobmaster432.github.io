import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Gyan } from "@/public/assets";

const Navbar = () => {
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
          <ul className="flex text-[13px] items-center md:gap-5 lg:gap-7">
            <Link
              href="#home"
              className="nav-link text-textDark hover:text-textGreen font-medium flex items-center gap-1 transition duration-300 ease-in-out"
              // onClick={handleScroll}
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
              className="nav-link text-textDark hover:text-textGreen font-medium flex items-center gap-1 transition duration-300 ease-in-out"
              // onClick={handleScroll}
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
              className="nav-link text-textDark hover:text-textGreen font-medium flex items-center gap-1 transition duration-300 ease-in-out"
              // onClick={handleScroll}
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
              className="nav-link text-textDark hover:text-textGreen font-medium flex items-center gap-1 transition duration-300 ease-in-out"
              // onClick={handleScroll}
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
              className="nav-link text-textDark hover:text-textGreen font-medium flex items-center gap-1 transition duration-300 ease-in-out"
              // onClick={handleScroll}
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
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-textGreen px-4 py-2 rounded-md font-medium text-sm border border-textGreen hover:bg-hoverColor transition duration-300 ease-in-out"
          >
            Resume
          </motion.button>
        </div>

        {/* Small Icon Section  */}
        <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
