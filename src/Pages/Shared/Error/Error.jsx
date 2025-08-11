import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import notFoundAnim from "../../../assets/Lottie/404.json";

const Error = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800); // 0.8s load
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex items-center min-h-screen p-8 bg-base-100 text-base-content">
      <div className="container flex flex-col items-center justify-center mx-auto">
        
        {/* Animation */}
        <motion.div
          className="max-w-md w-full mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {loading ? (
            <Skeleton height={300} borderRadius={16} />
          ) : (
            <Lottie animationData={notFoundAnim} loop />
          )}
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {loading ? (
            <>
              <Skeleton width={250} height={32} className="mb-4" />
              <Skeleton count={2} width={300} height={18} className="mb-6" />
              <Skeleton width={180} height={40} borderRadius={8} />
            </>
          ) : (
            <>
              <h2 className="mb-4 text-4xl font-bold space-grotesk text-error">
                404 - Page Not Found
              </h2>
              <p className="text-lg fira-sans-bold mb-6">
                Sorry, we couldn’t find this page. But don’t worry — you can return to the homepage.
              </p>
              <Link to="/" className="btn btn-primary">
                 Back to Homepage
              </Link>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Error;
