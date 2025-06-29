import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="card bg-base-100 shadow-xl border-primary border hover:shadow-2xl transition duration-300">
      {/* Fade Carousel */}
      <div className="relative h-52 w-full overflow-hidden rounded-t">
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={project.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              current === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            loading="lazy"
          />
        ))}
      </div>

      <div className="card-body text-base-content">
        <h2 className="card-title text-xl font-semibold">{project.name}</h2>

        {/* Description */}
        <p>{project.description.slice(0, 200)}...</p>

        {/* Features List */}
        {project.features && (
          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
            {project.features.slice(0, 4).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}

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
