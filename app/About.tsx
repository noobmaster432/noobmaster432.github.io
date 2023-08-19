import { AiFillThunderbolt } from "react-icons/ai";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { photo } from "@/public/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall px-2 sml:px-8 md:px-0 mx-auto py-10 lgl:py-12 scroll-m-14"
    >
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4 lgl:gap-8"
      >
        <SectionTitle title="About Me" number="01" />
        <div className="flex flex-col lgl:flex-row gap-16">
          <div className="w-full lgl:w-2/3 text-sm sml:text-base text-textDark font-medium flex flex-col gap-4">
            <p>
              Hello there! I&apos;m Gyanendra Kumar Tiwari, a full stack
              developer with a knack for competitive programming and a pre-final
              year BTech undergrad at the prestigious Indian Institute of
              Information Technology (IIIT) Ranchi! 🎓
            </p>
            <p>
              🚀 My programming journey began with languages like Python, C, and
              C++, igniting a spark of curiosity that led me deeper into the
              world of technology. I&apos;m currently expanding my expertise in
              Data Structures and Algorithms alongside web development.
            </p>
            <p>
              🔗 Git and Linux are like my trusty sidekicks throughout this
              coding adventure, aiding me in version control and navigating the
              tech ecosystem with finesse. 🐧
            </p>
            <p>
              Beyond my technical skills, I bring humor to the table. A good
              laugh can create a positive work environment and foster
              creativity.
            </p>
            <p>
              Here are a few technologies I&apos;ve been working with recently:
            </p>
            <ul className="text-xs sml:text-sm max-w-[450px] font-sans grid grid-cols-2 gap-2 mt-4">
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>{" "}
                JavaScript (ES6+)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>{" "}
                Next.js{" "}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>{" "}
                React
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>{" "}
                Node.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>{" "}
                TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>{" "}
                Express.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>{" "}
                MongoDB
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>{" "}
                TailwindCSS
              </li>
            </ul>
          </div>

          <div className="w-3/5 mx-auto md:w-1/3 lgl:h-80 relative group">
            <div className="w-full h-full relative z-20 p-2 flex items-center justify-between rounded-full lgl:group-hover:border-2 border-textGreen">
              <Image
                src={photo}
                alt="Profile Pic"
                className="rounded-full h-full object-cover"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-black/30 rounded-full top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
            {/* <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-full group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
