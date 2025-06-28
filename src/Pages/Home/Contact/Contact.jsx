import React from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const whatsappNumber = "8801758524125";
  const whatsappMessage = "Hello Azijul";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-start text-primary mb-10">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-5 text-lg">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-primary" />
            <span className="text-base-content">Nalitabari - 2110, Sherpur</span>
          </div>

          <div className="flex items-center gap-3">
            <FaWhatsapp className="text-green-500" />
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover text-primary"
            >
              +8801758524125 (Chat on WhatsApp)
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-red-500" />
            <a
              href="mailto:azijul.info@gmail.com"
              className="link link-hover text-primary"
            >
              azijul.info@gmail.com
            </a>
          </div>

          {/* QR Code or Image */}
          <div className="mt-6">
            <h4 className="font-semibold mb-2 text-base-content">📱 Scan to More Details</h4>
            <img
              className="w-40 border rounded-md shadow"
              src="https://i.postimg.cc/3RKKHf1J/Contact.jpg"
              alt="QR WhatsApp"
            />
          </div>
        </div>

        {/* Contact Form */}
        <form
          action="mailto:azijul.info@gmail.com"
          method="POST"
          encType="text/plain"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full bg-base-100 text-base-content"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-full bg-base-100 text-base-content"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="textarea textarea-bordered w-full bg-base-100 text-base-content"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary w-full md:w-auto">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
