import React, { useState, useEffect } from "react";

const Hero = () => {
  const skills = ["React", "JavaScript", "Node.js", "Java", "MySQL", "Bootstrap", "HTML5", "CSS3"];
  const titles = ["Full-Stack Developer", "Problem Solver", "Tech Enthusiast"];
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  // Typing animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typingIndex < titles[currentTitle].length) {
        setDisplayText((prev) => prev + titles[currentTitle][typingIndex]);
        setTypingIndex(typingIndex + 1);
      } else {
        setTimeout(() => {
          setDisplayText("");
          setTypingIndex(0);
          setCurrentTitle((prev) => (prev + 1) % titles.length);
        }, 1500);
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [typingIndex, currentTitle]);

  return (
    <section id="about" className="py-5 bg-dark text-light">
      <div className="container">
        <div className="row align-items-center mb-5">

          {/* Left Side: Text */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h1 className="display-4 fw-bold mb-3" style={{ lineHeight: "1.2" }}>
              Hi, I'm <span className="text-primary">Deepak Bhandari</span>
            </h1>

            <p className="lead text-primary mb-4" style={{ minHeight: "1.5em", fontSize: "1.25rem" }}>
              {displayText}<span className="blink">|</span>
            </p>

            <p className="mb-4" style={{ fontSize: "1.05rem", textAlign: "justify", lineHeight: "1.6" }}>
              I am an ambitious and passionate Full-Stack Developer from Pune, India. My journey began with curiosity and a desire to solve real-world problems through technology. Over the years, I have gained expertise in React, JavaScript, Node.js, Java, MySQL, and Bootstrap, building modern, responsive web applications.
            </p>

            <p className="mb-4" style={{ fontSize: "1.05rem", textAlign: "justify", lineHeight: "1.6" }}>
              My goal is to work with top-tier tech companies, applying my skills to develop impactful solutions and contribute to innovations that make a difference in people's lives. I am driven by problem-solving, continuous learning, and leveraging my expertise to improve products and user experiences.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start mb-4">
              <a
                href="/portfolio/assets/deepakprofesswionalcv.pdf"
                download
                className="btn btn-primary fw-bold px-4"
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="btn btn-outline-primary fw-bold px-4"
              >
                View Projects
              </a>
            </div>

            {/* Skills */}
            <h5 className="mb-3 mt-3">Skills & Technologies:</h5>
            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="badge bg-primary text-dark fw-semibold px-3 py-2"
                  style={{ fontSize: "0.95rem" }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className="mt-4" style={{ fontSize: "1rem", textAlign: "justify", lineHeight: "1.6" }}>
              I am constantly exploring new technologies and frameworks to expand my skill set. My long-term vision is to contribute to large-scale projects in reputed organizations, using my knowledge to create robust, efficient, and user-friendly software solutions. Through collaboration and innovation, I aim to make meaningful contributions to the tech community.
            </p>
          </div>

          {/* Right Side: Profile Image */}
          <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
            <img
              src="/portfolio/assets/profile.jpg"
              alt="Deepak Bhandari"
              className="rounded-circle border border-primary shadow-lg"
              style={{
                width: "250px",
                height: "250px",
                objectFit: "cover",
                transform: "translateY(10px)", // move slightly lower
              }}
            />
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        .blink { animation: blink 1s step-start infinite; }
        @keyframes blink { 0%,50%,100%{opacity:1;} 25%,75%{opacity:0;} }
      `}</style>
    </section>
  );
};

export default Hero;