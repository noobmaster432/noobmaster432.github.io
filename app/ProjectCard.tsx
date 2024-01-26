import Image, { StaticImageData } from "next/image"
import { TbBrandGithub } from "react-icons/tb"
import { RxOpenInNewWindow } from "react-icons/rx";

interface projectProps {
  id: number
  name: string
  description: string
  image: StaticImageData
  github: string
  link: string
  tech: string[]
}

const ProjectCard = ({id, name, description, image, github, link, tech}: projectProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-28">
      <div
        className={`flex flex-col ${
          id === 2 ? "lgl:flex-row-reverse" : "lgl:flex-row"
        } gap-6`}
      >
        <a
          href={link}
          target="_blank"
          className="w-full hover:scale-[1.01] lgl:w-1/2 hover:shadow-2xl h-auto relative group"
        >
          <div>
            <Image
              className="w-full h-full object-contain rounded-md shadow-lg "
              src={image}
              alt={name}
            />
            <div className="absolute w-full h-full bg-black opacity-20 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </div>
        </a>
        <div
          className={`w-full lgl:w-1/2 flex flex-col gap-3 lgl:justify-between items-end text-right ${
            id === 2 ? "" : "lgl:-ml-16"
          } z-10`}
        >
          <div>
            <p className="font-sans text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">{name}</h3>
          </div>
          <p
            className={`bg-[#112240] text-sm shadow-lg md:text-base p-2 md:p-4 rounded-md ${
              id === 2 ? "lgl:-mr-16" : ""
            }`}
          >
            {description}
          </p>
          <ul className="text-xs md:text-sm font-sans gap-1 flex flex-wrap justify-between text-textDark">
            {tech.map((t, index) => (
              <li
                key={index}
                className="w-fit text-textLight bg-[#112445] hover:bg-[#1b3666] px-2 py-1 rounded-2xl cursor-pointer"
              >
                {t}
              </li>
            ))}
          </ul>
          <div className="text-2xl flex gap-4">
            <a
              href={github}
              target="_blank"
              className="hover:text-textGreen text-textDark duration-300 w-fit hover:scale-110"
            >
              <TbBrandGithub />
            </a>
            <a
              href={link}
              target="_blank"
              className="hover:text-textGreen text-textDark duration-300 w-fit hover:scale-110"
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard