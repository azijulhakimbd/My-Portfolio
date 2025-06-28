import React from "react";
import { useParams, Link } from "react-router"; 
import { projects } from "../../../assets/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project)
    return (
      <div className="text-center py-10 text-error text-lg font-semibold">
        ❌ Project not found!
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-primary mb-4">{project.name}</h2>

      <img
        src={project.image}
        alt={project.name}
        className="rounded-xl shadow mb-6 w-full max-h-[400px] object-cover"
      />

      <p className="text-base-content text-lg mb-6">{project.description}</p>

      {/* Tech Stack */}
      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-2 text-base-content">🔧 Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech, i) => (
            <span key={i} className="badge badge-outline badge-primary">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Challenges */}
      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-2 text-base-content">⚠️ Challenges</h4>
        <p className="text-base-content">{project.challenges}</p>
      </div>

      {/* Improvements */}
      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-2 text-base-content">
          🚀 Future Improvements
        </h4>
        <p className="text-base-content">{project.improvements}</p>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          🌐 Live Site
        </a>

        <a
          href={project.client}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm"
        >
          💻 Client Code
        </a>

        {project.server && project.server.trim() !== "" && (
          <a
            href={project.server}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            🛠️ Server Code
          </a>
        )}

        <Link to="/projects" className="btn btn-link btn-sm">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
