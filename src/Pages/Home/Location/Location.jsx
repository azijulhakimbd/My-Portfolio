import React from "react";
import { motion } from "framer-motion";
const Location = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-10">
      {/* Google Maps Embed */}
      <motion.h2
        className="space-grotesk text-3xl font-bold text-start text-primary mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Maps Locations
      </motion.h2>
      <div className="mt-16 border border-[#efefef] rounded-2xl hover:shadow-xl">
        <iframe
          className="border border-[#efefef] rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4481.383136633451!2d90.15849477608134!3d25.154615733422762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757db1afe5c42a9%3A0x76be73fc046d4402!2sMd%20Azijul%20Hakim!5e1!3m2!1sen!2sbd!4v1753907992449!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Location;
