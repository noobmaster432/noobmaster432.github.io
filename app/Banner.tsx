import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-16 scroll-m-24"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-sans tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-2xl sm:text-4xl lgl:text-6xl font-sans font-semibold flex flex-col"
      >
        Gyanendra Tiwari.{" "}
        <span className="text-textDark mt-2 lgl:mt-4">
          <TypeAnimation
            sequence={[ "DEVELOPER... ", 2000, "DEBUGGER... ", 2000, "DEBUTANTE... ", 2000, "DISRUPTOR... ", 2000 ]}
            wrapper="span"
            speed={25}
            repeat={Infinity}
          />
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-sm sm:text-base font-body md:max-w-[650px] text-textDark font-medium"
      >
        I embody the role of a web developer with a flair for competitive
        programming. My expertise spans both front-end and back-end development,
        forming a solid groundwork. Proficient in harnessing the potential of
        React and its comprehensive ecosystem, I specialize in designing web
        applications that prioritize user experience.
        <a href="#about">
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group ml-2">
            Learn More
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      <a
        href="https://github.com/noobmaster432"
        target="_blank"
        className="w-fit"
      >
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="py-2 px-4 sm:py-3 sm:px-5 text-xs sm:text-sm font-sans border-[1.3px] border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my Projects!
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
