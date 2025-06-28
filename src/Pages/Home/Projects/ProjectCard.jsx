import React from 'react';
import { Link } from 'react-router'; 

const ProjectCard = ({ project }) => {
  return (
    <div className="card bg-base-100 shadow-xl border hover:shadow-2xl transition duration-300">
      {/* Project Image with lazy loading */}
      <figure>
        <img
          src={project.image}
          alt={project.name}
          loading="lazy" 
          className="h-52 w-full object-cover rounded-t"
        />
      </figure>

      <div className="card-body text-base-content">
        <h2 className="card-title text-xl font-semibold">{project.name}</h2>
        <p>{project.description.slice(0, 80)}...</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 my-3">
          {project.stack.map((tech, i) => (
            <span key={i} className="badge badge-outline badge-primary">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="card-actions justify-start flex-wrap gap-2">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-primary btn-sm"
          >
            🌐 Live
          </a>
          <a
            href={project.client}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-primary btn-sm"
          >
            💻 Client
          </a>
          {project.server?.trim() && (
            <a
              href={project.server}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary btn-sm"
            >
              🛠️ Server
            </a>
          )}
          <Link
            to={`/projects/${project.id}`}
            className="btn btn-outline btn-primary btn-sm"
          >
            🔍 Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
