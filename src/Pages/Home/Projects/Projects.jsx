import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Spinner from "../../../Components/Spinner";
import { projects } from "../../../assets/projects";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-4 py-20"
    >
      <motion.h2
        className="text-3xl space-grotesk font-bold text-start text-primary mb-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        My Projects
      </motion.h2>

      {projects.length === 0 ? (
        <Spinner />
      ) : (
        <motion.div
          className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;
