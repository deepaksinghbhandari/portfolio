import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("about");

  const navLinks = [
    { id: "about", text: "About" },
    { id: "projects", text: "Projects" },
    { id: "contact", text: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPos = window.scrollY + 100;
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveLink(link.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className={`navbar navbar-expand-md fixed-top ${scrolled ? "bg-dark shadow" : "bg-transparent"}`} style={{ transition: "0.3s" }}>
      <div className="container">
        <a
          className="navbar-brand fw-bold text-primary"
          href="#about"
          onClick={(e) => handleClick(e, "about")}
        >
          Deepak Bhandari
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link ${activeLink === link.id ? "text-primary fw-bold" : "text-light"}`}
                  onClick={(e) => handleClick(e, link.id)}
                >
                  {link.text}
                </a>
              </li>
            ))}

            <li className="nav-item d-flex gap-2 ms-3">
              <a href="https://github.com/deepaksinghbhandari" target="_blank" className="nav-link text-light fs-5">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/deepak-singh-bhandari-96311a317" target="_blank" className="nav-link text-light fs-5">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
