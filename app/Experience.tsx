import SectionTitle from "./SectionTitle";
import { useState } from "react";
import { experience } from "./data";
import Company from "./Company";
import { motion } from "framer-motion";

const Experience = () => {
  const [active, setActive] = useState(1 as number);
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-12 px-4 scroll-m-14"
    >
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle title="Where I have Worked" number="02" />
        <div className="w-full mt-10 flex flex-col md:flex-row gap-12 md:gap-16">
          <ul className="md:w-32 flex flex-col">
            <li
              onClick={() => setActive(1)}
              className={`border-l-2 ${
                active === 1
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
              Scaler
            </li>
            <li
              onClick={() => setActive(2)}
              className={`border-l-2 ${
                active === 2
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
              Coforge
            </li>
          </ul>

          {experience.map(
            (exp) =>
              active === exp.id && (
                <Company
                  key={exp.id}
                  name={exp.name}
                  company={exp.company}
                  duration={exp.duration}
                  points={exp.points}
                />
              )
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
