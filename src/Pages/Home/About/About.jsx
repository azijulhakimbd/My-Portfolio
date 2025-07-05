import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-5xl mx-auto px-4 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="rubik text-3xl font-bold text-primary mb-6"
      >
        About Me
      </motion.h2>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="space-y-6 inter text-base-content text-lg leading-relaxed"
      >
        {[
          `I'm Md. Azijul Hakim, a dedicated and detail-oriented frontend developer with a deep love for clean code and smooth user experiences. My journey into programming began in 2020, and since then, I’ve explored a wide range of technologies from React to Firebase.`,
          `I particularly enjoy building intuitive UIs, solving logical problems, and continuously learning new things. Outside of programming, I enjoy playing football, reading tech blogs, Making Video and traveling.`,
          `My goal is to contribute to impactful and scalable digital products that improve lives through thoughtful design and efficient development.`,
        ].map((text, i) => (
          <motion.p
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {text
              .split(/(playing football|reading tech blogs|Making Video|traveling)/g)
              .map((chunk, index) =>
                ["playing football", "reading tech blogs", "Making Video", "traveling"].includes(chunk) ? (
                  <span key={index} className="text-primary">
                    {chunk}
                  </span>
                ) : (
                  <span key={index}>{chunk}</span>
                )
              )}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
