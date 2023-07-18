import { AiFillThunderbolt } from "react-icons/ai";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { photo } from "@/public/assets";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall px-2 sml:px-8 xl:px-0 mx-auto py-10 mdl:py-12 flex flex-col gap-4 lgl:gap-8 scroll-m-12"
    >
      <SectionTitle title="About Me" number="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-sm sml:text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello there! I&apos;m Gyanendra Kumar Tiwari, a highly motivated
            Full Stack Developer with a strong passion for problem-solving and a
            knack for competitive programming. Currently pursuing my BTech in
            Computer Science at IIIT Ranchi, I am committed to continuous
            learning and skill evolution.
          </p>
          <p>
            My programming journey started with languages like Python, C, and
            C++, and I am now expanding my expertise in Data Structures and
            Algorithms alongside web development. I have hands-on experience
            with HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB,
            Tailwind CSS, TypeScript, NextJS, Git, and Ruby on Rails.
          </p>
          <p>
            Being a quick learner, I grasp concepts that stay with me for years.
            I eagerly embrace new challenges and opportunities, always striving
            to approach tasks uniquely by investing extra time for worthy
            results.
          </p>
          <p>
            Beyond my technical skills, I bring humor to the table. A good laugh
            can create a positive work environment and foster creativity.
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

        <div className="w-3/5 mx-auto lgl:w-1/3 lgl:h-80 relative group">
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
    </section>
  );
};

export default About;
