import React from "react";
import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaRocket,
  FaShieldAlt,
  FaUserCheck,
  FaAward,
  FaGithub,
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.5 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

const StatCard = ({ icon, number, label, description }) => (
  <motion.div
    variants={cardVariants}
    className="card bg-base-200 dark:bg-base-300 shadow-xl rounded-xl p-6 flex flex-col items-center text-center"
  >
    <div className="text-4xl text-primary mb-3">{icon}</div>
    <motion.h2
      className="text-3xl font-bold text-base-content"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {number}
    </motion.h2>
    <p className="text-lg font-semibold mt-2 text-primary">{label}</p>
    <p className="text-base-content opacity-70 mt-1 text-sm">{description}</p>
  </motion.div>
);

const Stats = () => {
  return (
    <section className="min-h-screen bg-base-100 dark:bg-base-200 py-20 px-6">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">
          Stats & Achievements
        </h1>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <StatCard
            icon={<FaProjectDiagram />}
            number="5+"
            label="Full-Stack Projects"
            description="Built robust MERN stack applications"
          />
          <StatCard
            icon={<FaRocket />}
            number="2+"
            label="Deployments"
            description="Hosted apps on Netlify & Firebase"
          />
          <StatCard
            icon={<FaShieldAlt />}
            number="100%"
            label="JWT Auth"
            description="Implemented secure authentication"
          />
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
          <StatCard
            icon={<FaUserCheck />}
            number="10+"
            label="React Projects"
            description="Dashboards, portals & admin panels"
          />
          <StatCard
            icon={<FaAward />}
            number="7"
            label="Certifications"
            description="Professional courses & achievements"
          />
          <StatCard
            icon={<FaGithub />}
            number="100+"
            label="GitHub Contributions"
            description="In a single month"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Stats;
