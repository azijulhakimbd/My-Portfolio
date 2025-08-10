import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { projects } from "../../../assets/projects";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    // Simulate loading for demo, replace with your real fetch logic
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!project && !loading) {
    return (
      <div className="text-center py-10 text-error text-lg font-semibold">
        ❌ Project not found!
      </div>
    );
  }

  // React Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: project?.images?.length > 1,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 py-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {loading ? (
        <>
          <Skeleton height={40} width={"60%"} className="mb-4" />
          <Skeleton height={320} className="mb-6 rounded-xl" />
          <Skeleton count={3} height={20} width={"100%"} className="mb-2" />
          <Skeleton height={20} width={"80%"} className="mb-6" />

          <div className="mb-6">
            <Skeleton height={28} width={"30%"} className="mb-3" />
            <div className="flex gap-2">
              {Array(4)
                .fill()
                .map((_, i) => (
                  <Skeleton key={i} height={24} width={80} className="rounded-md" />
                ))}
            </div>
          </div>

          <div className="mb-6">
            <Skeleton height={28} width={"30%"} className="mb-3" />
            <Skeleton height={20} width={"100%"} />
          </div>

          <div className="mb-6">
            <Skeleton height={28} width={"30%"} className="mb-3" />
            <Skeleton height={20} width={"80%"} />
          </div>

          <div className="flex gap-4 mt-8">
            {Array(3)
              .fill()
              .map((_, i) => (
                <Skeleton key={i} height={32} width={96} className="rounded" />
              ))}
          </div>
        </>
      ) : (
        <>
          <motion.h2
            className="text-3xl rubik font-bold text-primary mb-4"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {project.name}
          </motion.h2>

          {/* React Slick Image Slider */}
          {Array.isArray(project.images) && project.images.length > 0 && (
            <Slider {...sliderSettings} className="mb-6 rounded-xl overflow-hidden shadow">
              {project.images.map((img, idx) => (
                <div key={idx}>
                  <img
                    src={img}
                    alt={`${project.name} image ${idx + 1}`}
                    className="w-full max-h-[400px] object-cover rounded-xl"
                  />
                </div>
              ))}
            </Slider>
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
                <span key={i} className="badge inter badge-outline badge-primary">
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
        </>
      )}
    </motion.div>
  );
};

export default ProjectDetails;
