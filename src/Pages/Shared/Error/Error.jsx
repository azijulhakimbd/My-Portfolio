import React from "react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import notFoundAnim from "../../../assets/Lottie/404.json"; 

const Error = () => {
  return (
    <section className="flex items-center min-h-screen p-8 bg-base-100 text-base-content">
      <div className="container flex flex-col items-center justify-center mx-auto">
        {/* Lottie Animation */}
        <div className="max-w-md w-full mb-6">
          <Lottie animationData={notFoundAnim} loop />
        </div>

        {/* Text Content */}
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold space-grotesk text-error">404 - Page Not Found</h2>
          <p className="text-lg fira-sans-bold mb-6">
            Sorry, we couldn’t find this page. But don’t worry — you can return to the homepage.
          </p>
          <Link
            to="/"
            className="btn btn-primary"
          >
            🔙 Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
