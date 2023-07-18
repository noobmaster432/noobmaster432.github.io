import { FaRegFolder } from 'react-icons/fa';
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

interface ArchiveCardProps {
    name: string
    description: string
    link: string
    github: string
    tech: string[]
}

const ArchiveCard = ({name, description, link, github, tech}: ArchiveCardProps) => {
  return (
    <div className='w-full rounded-lg shadow-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group'>
        <div className='flex justify-between items-center'>
          <FaRegFolder className='text-4xl text-textGreen' />
          <div className="text-3xl flex gap-3">
            <a href={github} target="_blank" className="hover:text-textGreen text-textDark duration-300">
              <TbBrandGithub />
            </a>
            <a href={link} target="_blank" className="hover:text-textGreen text-textDark duration-300">
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
        <div>
            <h3 className='text-xl font-semibold font-sans tracking-wide group-hover:text-textGreen'>{name}</h3>
            <p className='text-sm mt-3'>{description}</p>
        </div>
        <ul className='text-xs mdl:text-sm flex gap-2 justify-between items-center text-textDark flex-wrap'>
            {tech.map((t, index) => (
                <li key={index}>{t}</li>
            ))}
        </ul>
    </div>
  )
}

export default ArchiveCard