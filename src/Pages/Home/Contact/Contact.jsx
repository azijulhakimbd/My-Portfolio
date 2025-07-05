import React from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import contactAnimation from "../../../assets/Lottie/Email.json";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.4 },
  }),
};

const Contact = () => {
  const whatsappNumber = "8801758524125";
  const whatsappMessage = "Hello Azijul";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <motion.div
      data-aos="zoom-in"
      className="max-w-6xl mx-auto px-4 py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="space-grotesk text-3xl font-bold text-start text-primary mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <div className="grid fira-sans-bold md:grid-cols-2 gap-10 items-center">
        {/* Contact Info */}
        <motion.div
          className="space-y-5 text-lg"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            {
              icon: <FaMapMarkerAlt className="text-primary" />,
              content: "Nalitabari - 2110, Sherpur",
              isLink: false,
            },
            {
              icon: <FaWhatsapp className="text-green-500" />,
              content: (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-hover text-primary"
                >
                  +8801758524125 (Chat on WhatsApp)
                </a>
              ),
              isLink: true,
            },
            {
              icon: <FaEnvelope className="text-red-500" />,
              content: (
                <a
                  href="mailto:azijul.info@gmail.com"
                  className="link link-hover text-primary"
                >
                  azijul.info@gmail.com
                </a>
              ),
              isLink: true,
            },
          ].map(({ icon, content, isLink }, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3"
              custom={i}
              variants={itemVariants}
              whileHover={isLink ? { scale: 1.05 } : undefined}
              whileTap={isLink ? { scale: 0.95 } : undefined}
            >
              {icon}
              <span>{content}</span>
            </motion.div>
          ))}

          <motion.div
            className="mt-6"
            custom={3}
            variants={itemVariants}
          >
            <h4 className="font-semibold fira-sans-bold mb-2 text-base-content">
              📱 Scan to More Details
            </h4>
            <img
              className="w-40 border rounded-md shadow"
              src="https://i.postimg.cc/3RKKHf1J/Contact.jpg"
              alt="QR WhatsApp"
            />
          </motion.div>
        </motion.div>

        {/* Lottie Animation & Contact Form */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Lottie animationData={contactAnimation} loop={true} className="h-50" />

          <motion.form
            action="mailto:azijul.info@gmail.com"
            method="POST"
            encType="text/plain"
            className="space-y-4 inter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileFocus={{ scale: 1.02 }}
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full bg-base-100 text-base-content"
              required
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full bg-base-100 text-base-content"
              required
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full bg-base-100 text-base-content"
              required
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="rubik btn btn-primary w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
