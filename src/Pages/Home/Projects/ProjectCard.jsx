import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

const ProjectCard = ({ project }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % project.images.length);
    }, 3000); // change image every 3s
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="card bg-base-100 shadow-xl border-primary border hover:shadow-2xl transition duration-300">
      {/* Auto-changing Carousel */}
      <div className="h-52 w-full overflow-hidden relative rounded-t">
        <img
          src={project.images[current]}
          alt={project.name}
          className="w-full h-full object-cover transition-all duration-700"
          loading="lazy"
        />
      </div>

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

        {/* Buttons */}
        <div className="card-actions justify-start flex-wrap gap-2">
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-primary btn-sm">
            🌐 Live
          </a>
          <a href={project.client} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-primary btn-sm">
            💻 Client
          </a>
          {project.server?.trim() && (
            <a href={project.server} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-primary btn-sm">
              🛠️ Server
            </a>
          )}
          <Link to={`/projects/${project.id}`} className="btn btn-outline btn-primary btn-sm">
            🔍 Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
