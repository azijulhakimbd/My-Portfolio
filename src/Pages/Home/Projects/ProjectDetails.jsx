import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { projects } from "../../../assets/projects";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    if (project?.images?.length > 1) {
      const interval = setInterval(() => {
        setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
      }, 3000); // change image every 3s
      return () => clearInterval(interval);
    }
  }, [project]);

  if (!project)
    return (
      <div className="text-center py-10 text-error text-lg font-semibold">
        ❌ Project not found!
      </div>
    );

  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 py-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl rubik font-bold text-primary mb-4"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {project.name}
      </motion.h2>

      {Array.isArray(project.images) && project.images.length > 0 && (
        <img
          key={project.images[currentImgIndex]}
          src={project.images[currentImgIndex]}
          alt={`${project.name} ${currentImgIndex + 1}`}
          className="rounded-xl shadow mb-6 w-full max-h-[400px] object-cover"
          
          
        
        />
      )}

      <motion.p
        className="text-base-content inter text-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {project.description}
      </motion.p>

      {/* Tech Stack */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h4 className="text-xl font-semibold mb-2 text-base-content rubik">
          🔧 Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="badge inter badge-outline badge-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Challenges */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h4 className="text-xl font-semibold mb-2 text-base-content rubik">
          ⚠️ Challenges
        </h4>
        <p className="text-base-content inter">{project.challenges}</p>
      </motion.div>

      {/* Improvements */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <h4 className="text-xl font-semibold mb-2 text-base-content">
          🚀 Future Improvements
        </h4>
        <p className="text-base-content inter">{project.improvements}</p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="mt-8 poppins-bold flex flex-wrap gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <motion.a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🌐 Live Site
        </motion.a>

        <motion.a
          href={project.client}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          💻 Client Code
        </motion.a>

        {project.server && project.server.trim() !== "" && (
          <motion.a
            href={project.server}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🛠️ Server Code
          </motion.a>
        )}

        <Link to="/projects" className="btn btn-link rubik btn-sm">
          ← Back to Projects
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
