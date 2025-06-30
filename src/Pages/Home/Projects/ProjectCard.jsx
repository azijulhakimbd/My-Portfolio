import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { FaGlobe, FaCode, FaServer, FaArrowRight } from "react-icons/fa";
import { TbStack } from "react-icons/tb";
import { FiInfo } from "react-icons/fi";
const ProjectCard = ({ project }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="card  mx-auto bg-base-100 shadow-md border border-primary hover:shadow-xl transition duration-300">
      {/* Image Carousel */}
      <div className="relative h-60 sm:h-72 md:h-80 w-full overflow-hidden rounded-t-lg">
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

      {/* Card Body */}
      <div className="card-body text-base-content p-5">
        {/* Title */}
        <h2 className="space-grotesk card-title text-2xl text-primary font-bold">
           {project.name}
        </h2>

        {/* Description */}
        <p className="fira-sans-bold text-sm md:text-base">
          {project.description.slice(0, 150)}...
        </p>

        {/* Features List */}
        {project.features && (
          <div className="mt-3">
            <p className="font-medium space-grotesk flex items-center gap-2 text-primary">
               Key Features:
            </p>
            <ul className="list-disc list-inside fira-sans-bold text-sm mt-1 space-y-1">
              {project.features.slice(0, 4).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Stack Badges */}
        <div className="my-3">
          <p className="font-medium flex space-grotesk items-center gap-2 text-primary">
            <TbStack /> Tech Stack:
          </p>
          <div className="flex fira-sans-bold flex-wrap gap-2 mt-2">
            {project.stack.map((tech, i) => (
              <span key={i} className="badge badge-outline badge-primary">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="card-actions fira-sans-bold justify-start flex-wrap gap-2 mt-auto">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-primary btn-sm"
          >
            <FaGlobe /> Live
          </a>
          <a
            href={project.client}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-primary btn-sm"
          >
            <FaCode /> Client
          </a>
          {project.server?.trim() && (
            <a
              href={project.server}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary btn-sm"
            >
              <FaServer /> Server
            </a>
          )}
          <Link
            to={`/projects/${project.id}`}
            className="btn btn-outline btn-primary btn-sm"
          >
            <FaArrowRight /> Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
