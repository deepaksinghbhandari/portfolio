import React, { useState, useEffect } from "react";

const Hero = () => {
  const skills = ["React", "JavaScript", "Java", "MySQL", "Bootstrap", "HTML5", "CSS3"];
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
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm <span className="text-primary">Deepak Bhandari</span>
            </h1>

            <p className="lead text-primary mb-3" style={{ minHeight: "1.5em" }}>
              {displayText}<span className="border-start border-primary ps-2">|</span>
            </p>

            <p className="mb-4">
              I am a Full-Stack Developer from Pune, India, specializing in React, JavaScript, Node.js, Java, MySQL, and Bootstrap. I build modern, responsive web applications with a focus on clean design and smooth user experience.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 mb-4 justify-content-center justify-content-md-start">
              <a href="/portfolio/assets/deepakprofesswionalcv.pdf" download className="btn btn-primary fw-bold px-4">
                Download Resume
              </a>
              <a href="#projects" className="btn btn-outline-primary fw-bold px-4">
                View Projects
              </a>
            </div>

            <h5 className="mb-3 mt-3">Skills & Technologies:</h5>
            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
              {skills.map((skill, idx) => (
                <span key={idx} className="badge bg-primary text-dark fw-semibold px-3 py-2">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side: Profile */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="position-relative">
              <img
                src="/portfolio/assets/profile.jpg"
                alt="Deepak Bhandari"
                className="rounded-circle border border-primary shadow-lg"
                style={{ width: "250px", height: "250px", objectFit: "cover" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
