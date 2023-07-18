import React from "react";
import SectionTitle from "./SectionTitle";
import { projects } from "./data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-container mx-auto py-10 lgl:py-12 lgl:pl-3 xl:px-24 scroll-m-14"
    >
      <SectionTitle title="Some Things I have Built" number="03" />
      <div className="w-full flex flex-col items-center justify-between gap-16 mt-10">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            id={p.id}
            name={p.name}
            description={p.description}
            image={p.image}
            github={p.github}
            link={p.link}
            tech={p.tech}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
