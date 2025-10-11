import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/deepaksinghbhandari", color: "#6e5494", label: "GitHub" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/deepak-singh-bhandari-96311a317", color: "#0A66C2", label: "LinkedIn" },
  { icon: <FaEnvelope />, url: "mailto:deepakbhandari8008@gmail.com", color: "#D44638", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="pt-5 pb-4">
      <div className="container-fluid text-center text-md-start px-4">

        {/* Top Tagline */}
        <div className="mb-4">
          <h5 className="text-primary mb-2">Let's Build Something Amazing Together!</h5>
          <p className="mb-0 text-light">
            Reach out if you have a project, collaboration idea, or just want to say hi.
          </p>
        </div>

        {/* Social Icons */}
        <div className="mb-4 d-flex justify-content-center justify-content-md-start gap-3">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="fs-4"
              style={{ color: "#ffffff", transition: "transform 0.3s, color 0.3s" }}
              title={link.label}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.3) rotate(-5deg)";
                e.currentTarget.style.color = link.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-secondary" />

        {/* Bottom Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-3 w-100">
          <p className="mb-2 mb-md-0 small" style={{ color: "#0d6efd" }}>
            © {new Date().getFullYear()} Deepak Bhandari. All rights reserved.
          </p>
          <p className="mb-0 small" style={{ color: "#0d6efd" }}>
            Designed & Developed by <span className="fw-bold">Deepak Bhandari</span>
          </p>
        </div>

      </div>

      {/* Footer Animation & Gradient */}
      <style>{`
        footer {
          background: linear-gradient(145deg, #0f0f0f, #1a1a1a);
          animation: fadeInUp 1s ease forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
