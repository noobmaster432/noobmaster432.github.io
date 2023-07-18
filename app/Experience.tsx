import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { TiArrowForward } from "react-icons/ti";
import { useState } from "react";

const Experience = () => {
  const [active, setActive] = useState("1" as string);
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-12 px-4"
    >
      <SectionTitle title="Where I have Worked" number="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-12 md:gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={() => setActive("1")}
            className={`border-l-2 ${
              active === "1" ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
            } text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Coforge
          </li>
          <li
            onClick={() => setActive("2")}
            className={`border-l-2 ${
              active === "2" ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
            }  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            GDSC
          </li>
        </ul>

        {active === "1" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full"
          >
            <h3 className="flex gap-1 font-medium text-base sml:text-xl font-sans">
              Full Stack Developer Intern{" "}
              <span className="text-textGreen tracking-wide">@Coforge</span>
            </h3>
            <p className="text-xs sml:text-sm mt-1 font-medium text-textDark">
              May 2023 - Present
            </p>

            <ul className="mt-5 flex flex-col gap-3">
              <li className="text-sm sm:text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                  <TiArrowForward />
                </span>
                Developed and enhanced a Dashboarding and Reporting Tool using
                Ruby on Rails and MySQL.
              </li>
              <li className="text-sm sm:text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                  <TiArrowForward />
                </span>
                Integrated data visualization components to present data in
                visually appealing and informative ways.
              </li>
              <li className="text-sm sm:text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                  <TiArrowForward />
                </span>
                Collaborated with a team of developers to implement new
                features, including data visualization components and
                interactive dashboards, resulting in improved data analysis and
                decision-making capabilities.
              </li>
            </ul>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full"
          >
            <h3 className="flex gap-1 font-medium text-base sml:text-xl font-sans">
              GDSC Core Member{" "}
              <span className="text-textGreen tracking-wide">@GDSC IIITR</span>
            </h3>
            <p className="text-xs sml:text-sm mt-1 font-medium text-textDark">
              Dec 2022 - Present
            </p>

            <ul className="mt-5 flex flex-col gap-3">
              <li className="text-sm sm:text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                  <TiArrowForward />
                </span>
                Organized and conducted workshops and training sessions on
                Javascript, React.js and GitHub.
              </li>
              <li className="text-sm sm:text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                  <TiArrowForward />
                </span>
                Developed and delivered high-quality web applications utilizing
                modern technologies.
              </li>
              <li className="text-sm sm:text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                  <TiArrowForward />
                </span>
                Provided guidance and support to club members on web development
                projects, troubleshooting code issues and offering coding best
                practices.
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Experience;
