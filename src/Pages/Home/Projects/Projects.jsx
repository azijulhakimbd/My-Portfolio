import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../../../assets/projects";

// Simple skeleton card for loading state
const SkeletonCard = () => (
  <div className="bg-base-100 dark:bg-base-300 shadow-lg rounded-xl p-5 animate-pulse">
    <div className="w-full h-48 bg-base-300 dark:bg-base-200 rounded-lg mb-4" />
    <div className="h-6 bg-base-300 dark:bg-base-200 rounded w-3/4 mb-3" />
    <div className="h-4 bg-base-300 dark:bg-base-200 rounded w-full mb-2" />
    <div className="h-4 bg-base-300 dark:bg-base-200 rounded w-5/6" />
  </div>
);

const Projects = () => {
  // Simulated loading state (replace with real loading state logic if you fetch projects)
  const loading = projects.length === 0;

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
        {loading
          ? Array(4)
              .fill()
              .map((_, idx) => <SkeletonCard key={idx} />)
          : projects.map((project) => (
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
    </motion.div>
  );
};

export default Projects;
