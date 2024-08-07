/* eslint-disable @next/next/no-img-element */
import SectionTitle from "../ui/SectionTitle";
import Image from "next/image";
import { photo } from "@/public/assets";
import { AnimatePresence, motion } from "framer-motion";
import { about, skills } from "../../utils/data";
import { useState } from "react";

const About = () => {
  let d = 0.1;
  const [fieldType, setFieldType] = useState("languages" as string);
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
            {about.map((a, id) => (
              <p key={id}>{a.description}</p>
            ))}
            <h1 className="mt-8 ml-2 mb-2 text-xl font-bold text-textLight">
              SKILLS
            </h1>
            <AnimatePresence>
              <motion.div
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
                className="flex flex-wrap gap-2 md:gap-4 text-sm md:text-base"
              >
                <button
                  onClick={() => setFieldType("languages")}
                  className={`${
                    fieldType === "languages"
                      ? "bg-hoverColor text-white"
                      : "bg-transparent text-textDark"
                  } hover:bg-[#64ffdb2f] hover:text-white px-2 py-1 md:px-4 md:py-2 rounded-md font-medium duration-300`}
                >
                  Languages
                </button>
                <button
                  onClick={() => setFieldType("frameworks")}
                  className={`${
                    fieldType === "frameworks"
                      ? "bg-hoverColor text-white"
                      : "bg-transparent text-textDark"
                  } hover:bg-[#64ffdb2f] hover:text-white px-2 py-1 md:px-4 md:py-2 rounded-md flex font-medium duration-300`}
                >
                  Frameworks <span className="hidden md:flex">/Libraries</span>
                </button>
                <button
                  onClick={() => setFieldType("others")}
                  className={`${
                    fieldType === "others"
                      ? "bg-hoverColor text-white"
                      : "bg-transparent text-textDark"
                  } hover:bg-[#64ffdb2f] hover:text-white px-2 py-1 md:px-4 md:py-2 rounded-md font-medium duration-300`}
                >
                  <span className="hidden md:flex">Other Technologies</span>
                  <span className="flex md:hidden">Others</span>
                </button>
              </motion.div>
            </AnimatePresence>
            <div className="flex flex-wrap gap-4">
              {skills.map(
                (s, id) =>
                  fieldType === s.field && (
                    <motion.div
                      key={id}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: (d += 0.05) }}
                    >
                      <img
                        src={s.image.src}
                        alt={s.name}
                        className="w-16 h-16 md:w-24 md:h-24 duration-500 ease-in-out hover:scale-105 transition-transform cursor-pointer shadow-md object-contain mx-auto"
                      />
                      <h1 className="text-center text-sm md:text-base text-textLight">
                        {s.name}
                      </h1>
                    </motion.div>
                  )
              )}
            </div>
          </div>

          <div className="w-3/5 mx-auto md:w-1/3 lgl:h-80 relative group">
            <div className="w-full h-full relative z-20 p-2 flex items-center justify-between rounded-full lgl:group-hover:border-2 group-hover:border-indigo-900">
              <Image
                src={photo}
                alt="Profile Pic"
                className="rounded-full h-full object-cover"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-black/30 rounded-full top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
