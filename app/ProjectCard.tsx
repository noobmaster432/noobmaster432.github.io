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
      <div className={`flex flex-col ${id===2 ? "lgl:flex-row-reverse" : "lgl:flex-row"} gap-6`}>
        <a href={link} target="_blank" className="w-full lgl:w-1/2 h-auto relative group">
          <div>
            <Image
              className="w-full h-full object-contain rounded-md shadow-md"
              src={image}
              alt={name}
            />
            <div className="absolute w-full h-full bg-black opacity-20 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </div>
        </a>
        <div className={`w-full lgl:w-1/2 flex flex-col gap-3 lgl:justify-between items-end text-right ${id===2 ? "" : "lgl:-ml-16"} z-10`}>
          <div>
            <p className="font-sans text-textGreen text-sm tracking-wide">Featured Project</p>
            <h3 className="text-2xl font-bold">{name}</h3>
          </div>
          <p className={`bg-[#112240] text-sm md:text-base p-2 md:p-4 rounded-md ${id===2 ? "lgl:-mr-16" : ""}`}>
            {description}
          </p>
          <ul className="text-xs md:text-sm font-sans tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            {tech.map((t, index) => (
              <li key={index}>{t}</li>
            ))}
          </ul>
          <div className="text-2xl flex gap-4">
            <a href={github} target="_blank" className="hover:text-textGreen text-textDark duration-300">
              <TbBrandGithub />
            </a>
            <a href={link} target="_blank" className="hover:text-textGreen text-textDark duration-300">
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard