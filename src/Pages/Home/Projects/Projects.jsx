import React from "react";
import ProjectCard from "./ProjectCard";
import Spinner from "../../../Components/Spinner";
import { projects } from "../../../assets/projects"; 

const Projects = () => {
  return (
    <div data-aos="flip-left" className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl space-grotesk font-bold text-start text-primary mb-10">
        My Projects
      </h2>

      {projects.length === 0 ? (
        <Spinner />
      ) : (
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
