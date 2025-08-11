import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaDownload,
  FaNodeJs,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const galleryVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const AboutPage = () => {
  const galleryImages = [
    {
      src: "https://i.postimg.cc/N02mRxnY/Web-Design-And-Development.png",
      title: "Web Design And Development",
    },
    {
      src: "https://i.postimg.cc/JhS3FFXG/UC-06ecc7b3-f41e-4164-9a6c-41f192d17785.jpg",
      title: "Udemy Cybersecurity Course",
    },
    {
      src: "https://i.postimg.cc/L6hXq8wF/DSE-Varifyed.jpg",
      title: "Digital Security Essentials Course",
    },
    {
      src: "https://i.postimg.cc/MK4G18JM/asp-net.png",
      title: "ASP.NET Core MVC Web Application",
    },
    {
      src: "https://i.postimg.cc/43RNFbdX/Az-m.png",
      title: "Microsoft Azure Fundamentals",
    },
    {
      src: "https://i.postimg.cc/cJ74qggw/GA.png",
      title: "Google Analytics Course",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [loadedGalleryImages, setLoadedGalleryImages] = useState({});

  return (
    <section className="px-4 py-24 bg-base-100 text-base-content min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        {/* Profile Section */}
        <div className="relative flex justify-center items-center">
          {loadingProfile && (
            <Skeleton
              circle
              width={256}
              height={256}
              baseColor="#e0e0e0"
              highlightColor="#f5f5f5"
            />
          )}
          <motion.img
            src="https://i.postimg.cc/VvL4StR9/WEB.jpg"
            alt="Azijul Hakim"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              !loadingProfile
                ? { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                : {}
            }
            className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-primary z-10"
            onLoad={() => setLoadingProfile(false)}
          />
          <div className="absolute w-80 h-80 rounded-full animate-spin-slow z-0 flex justify-center items-center">
            <div className="absolute top-0">
              <SiMongodb size={30} className="text-green-600 shadow-2xl" />
            </div>
            <div className="absolute bottom-0">
              <FaNodeJs size={30} className="text-green-700 shadow-2xl" />
            </div>
            <div className="absolute left-0">
              <SiExpress size={30} className="text-gray-800 shadow-2xl" />
            </div>
            <div className="absolute right-0">
              <SiReact size={30} className="text-cyan-500 shadow-2xl" />
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div>
          <h1 className="space-grotesk text-3xl md:text-4xl font-bold text-primary mb-4">
            Hi, I'm Md. Azijul Hakim
          </h1>
          <p className="text-base fira-sans-bold leading-relaxed mb-4">
            A passionate{" "}
            <span className="font-semibold">Front-End Developer</span> based in
            <span className="text-primary"> Sherpur, Mymensingh</span>. I
            specialize in building modern, user-friendly web applications using
            technologies like React, Tailwind CSS, Firebase, and Express.js. I'm
            dedicated to writing clean, efficient code and constantly improving
            my skills.
          </p>
          <div className="space-y-2 inter mb-6">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-primary" /> azijul.info@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-primary" /> +880 1758 52 4125
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" /> Mymensingh,
              Bangladesh.
            </p>
            <p className="flex items-center gap-2">
              <SiGithub className="text-primary" />
              <a
                href="https://github.com/azijulhakimbd"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </p>
            <p className="flex items-center gap-2">
              <SiLinkedin className="text-primary" />
              <a
                href="https://www.linkedin.com/in/azijulhakimbd"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1PYkcLkx86rO7tMKc0nNcTfju0y6gHmRV/view?usp=sharing"
            className="btn btn-primary btn-sm inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload /> Download Resume
          </motion.a>
        </div>
      </motion.div>

      {/* Highlights & Gallery */}
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-10">
        {/* Highlights */}
        <div>
          <h2 className="rubik text-xl font-semibold text-primary mb-3">
            Personal Highlights
          </h2>
          <ul className="fira-sans-bold list-disc list-inside text-sm space-y-1 mb-6">
            <li>🌍 Built 5+ full-stack projects using MERN stack</li>
            <li>🚀 Deployed apps on Netlify & Firebase with real users</li>
            <li>🔒 Implemented secure JWT-based authentication</li>
            <li>📊 Passionate about clean UI, charts, and dashboards</li>
          </ul>

          <h2 className="rubik text-xl font-semibold text-primary mb-3">
            Certifications & Achievements
          </h2>
          <ul className="fira-sans-bold text-sm space-y-3">
            <li className="flex items-center gap-2">
              <img
                src="https://d4.alternativeto.net/ySSfp0y2o2yCDSyU6iEdA0rGBv6xs2LQM43xJJeCT_I/rs:fit:140:140:0/g:ce:0:0/exar:1/YWJzOi8vZGlzdC9pY29ucy9wcm9ncmFtbWluZy1oZXJvXzE3NzMyNS5qcGc.png"
                className="w-5 h-5 rounded-full"
              />
              Complete Web Development – Programming Hero - 2025
            </li>
            <li className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg"
                className="w-6 h-5 bg-white"
              />
              Cyber Security Fundamentals – Udemy - 2023
            </li>
            <li className="flex items-center gap-2">
              <img
                src="https://i.postimg.cc/MHCdMLNW/Influencer-Academy-Logo.webp"
                className="w-5 h-5 rounded-full"
              />
              UI/UX Design Using Figma — Influencer Academy — 2022
            </li>
            <li className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                className="w-5 h-5 rounded-full"
              />
              Microsoft Azure Fundamentals – Bangladesh Hi-Tech Park Authority -
              2021
            </li>
            <li className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                className="w-5 h-5 rounded-full"
              />
              ASP.NET Core MVC – Bangladesh Hi-Tech Park Authority - 2021
            </li>
            <li className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Government_of_Bangladesh_Logo_%28unofficial_and_fictional_logo%29.png"
                className="w-5 h-5 rounded-full"
              />
              Web Design and Development – LEDP, ICT Division, Bangladesh — 2020
            </li>
            <li className="flex items-center gap-2">
              <FaGithub className="text-gray-600" />
              100+ contributions on GitHub in a month
            </li>
            <li className="flex items-center gap-2">
              <FaReact className="text-cyan-500" />
              Built 10+ React projects including dashboards, portals, and admin
              panels
            </li>
          </ul>
        </div>

        {/* Gallery */}
        <motion.div
          variants={galleryVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 shadow-xl rounded-2xl p-5"
        >
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              className="cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(img)}
            >
              {!loadedGalleryImages[index] && (
                <Skeleton
                  height={160}
                  borderRadius={8}
                  baseColor="#e0e0e0"
                  highlightColor="#f5f5f5"
                />
              )}
              <motion.img
                src={img.src}
                alt={img.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={
                  loadedGalleryImages[index]
                    ? { opacity: 1, scale: 1, transition: { duration: 0.4 } }
                    : {}
                }
                onLoad={() =>
                  setLoadedGalleryImages((prev) => ({
                    ...prev,
                    [index]: true,
                  }))
                }
                className="rounded-lg shadow-md object-cover h-40 w-full"
              />
              <p className="text-center text-xs mt-1 text-primary font-semibold">
                {img.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="bg-white rounded-lg p-4 max-w-3xl w-full relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-red-500 text-2xl font-bold"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded"
              />
              <h3 className="text-center mt-4 text-lg font-semibold text-primary">
                {selectedImage.title}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutPage;
