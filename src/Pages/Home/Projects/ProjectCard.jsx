import React from "react";
import { Link } from "react-router";
import { FaGlobe, FaCode, FaServer, FaArrowRight } from "react-icons/fa";
import { TbStack } from "react-icons/tb";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCard = ({ project, loading = false }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: project?.images?.length > 1,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
  };

  if (loading) {
    // Skeleton placeholders for card
    return (
      <div className="card mx-auto bg-base-100 shadow-md border border-primary transition duration-300 p-5">
        <Skeleton height={320} className="rounded-t-lg mb-4" />
        <Skeleton height={30} width={"60%"} className="mb-3" />
        <Skeleton count={3} height={15} className="mb-2" />
        <Skeleton height={25} width={"40%"} className="mb-4" />
        <Skeleton height={30} width={"80%"} />
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
      className="card mx-auto bg-base-100 shadow-md border border-primary transition duration-300"
    >
      <div className="relative h-60 sm:h-72 md:h-80 w-full overflow-hidden rounded-t-lg">
        <Slider {...sliderSettings}>
          {project.images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`${project.name} image ${index + 1}`}
                loading="lazy"
                className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-t-lg"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="card-body text-base-content p-5 flex flex-col">
        <motion.h2
          className="space-grotesk card-title text-2xl text-primary font-bold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {project.name}
        </motion.h2>

        <motion.p
          className="fira-sans-bold text-sm md:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {project.description.slice(0, 150)}...
        </motion.p>

        {project.features && (
          <motion.div
            className="mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="font-medium space-grotesk flex items-center gap-2 text-primary">
              Key Features:
            </p>
            <ul className="list-disc list-inside fira-sans-bold text-sm mt-1 space-y-1">
              {project.features.slice(0, 4).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        )}

        <motion.div
          className="my-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
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
        </motion.div>

        <div className="card-actions fira-sans-bold justify-start flex-wrap gap-2 mt-auto">
          {[
            { href: project.live, icon: <FaGlobe />, label: "Live" },
            { href: project.client, icon: <FaCode />, label: "Client" },
          ].map(({ href, icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary btn-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {icon} {label}
            </motion.a>
          ))}

          {project.server?.trim() && (
            <motion.a
              href={project.server}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary btn-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaServer /> Server
            </motion.a>
          )}

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to={`/projects/${project.id}`}
              className="btn btn-outline btn-primary btn-sm"
            >
              <FaArrowRight /> Details
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
