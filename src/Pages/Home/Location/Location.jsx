import React, { useState } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Location = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-10">
      {/* Google Maps Title */}
      <motion.h2
        className="space-grotesk text-2xl sm:text-3xl lg:text-4xl font-bold text-start text-primary mt-6 sm:mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Maps Locations
      </motion.h2>

      <div className="mt-8 sm:mt-16 border border-[#efefef] rounded-2xl hover:shadow-xl">
        {/* Skeleton Loader */}
        {loading && (
          <Skeleton
            height={450}
            borderRadius={16}
            baseColor="#e0e0e0"
            highlightColor="#f5f5f5"
          />
        )}

        {/* Google Maps Embed */}
        <iframe
          className={`border border-[#efefef] rounded-2xl transition-opacity duration-500 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4481.383136633451!2d90.15849477608134!3d25.154615733422762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757db1afe5c42a9%3A0x76be73fc046d4402!2sMd%20Azijul%20Hakim!5e1!3m2!1sen!2sbd!4v1753907992449!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
};

export default Location;
