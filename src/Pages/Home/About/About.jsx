import React from "react";

const About = () => {
  return (
    <div data-aos="fade-up-right" className="max-w-5xl mx-auto px-4 py-20">
      <h2 className="rubik text-3xl font-bold text-primary mb-6">About Me</h2>

      <div className="space-y-6 inter text-base-content text-lg leading-relaxed">
        <p>
          I'm <span className="font-semibold text-primary">Md. Azijul Hakim</span>, a dedicated and detail-oriented frontend developer
          with a deep love for clean code and smooth user experiences. My journey
          into programming began in 2020, and since then, I’ve explored a wide
          range of technologies from React to Firebase.
        </p>

        <p>
          I particularly enjoy building intuitive UIs, solving logical problems,
          and continuously learning new things. Outside of programming, I enjoy
          <span className="text-primary"> playing football</span>,{" "}
          <span className="text-primary">reading tech blogs</span>, <span className="text-primary">Making Video</span> and{" "}
          <span className="text-primary">traveling</span>.
        </p>

        <p>
          My goal is to contribute to impactful and scalable digital products that
          improve lives through thoughtful design and efficient development.
        </p>
      </div>
    </div>
  );
};

export default About;
