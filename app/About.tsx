import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { photo, nivaas } from "@/public/assets";
import { motion } from "framer-motion";
import { about } from "./data";

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
            {about.map((a, id) => (
              <p key={id}>{a.description}</p>
            ))}
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
