import React from "react";

const projects = [
  {
    title: "Foodie-Kart",
    description:
      "Online food ordering platform — browse restaurants, add to cart, and place orders seamlessly.",
    live: "https://foodkart.42web.io/",
    image:
      "https://media.istockphoto.com/id/1400224421/vector/order-food-on-smartphone-shopping-online-modern-marketing-and-digital-marketing-e-commerce.jpg?s=612x612&w=0&k=20&c=fY9DpYPe_9X6VbOc8qoHgMNZxyUgRqVvXdF8Y6reV1I=",
  },
  {
    title: "Quizzes Platform",
    description:
      "Interactive quiz app with multiple categories, scoring, and leaderboard features.",
    live: "https://deepaksinghbhandari.github.io/quizes/",
    image:
      "https://media.istockphoto.com/id/1470803729/vector/freehand-drawn-thought-bubble-cartoon-graduation-cap-on-question-mark.jpg?s=612x612&w=0&k=20&c=WxNCZQeRj7pblbDl6J--K1HPF293Jf7JGpLDq7xiBx4=",
  },
  {
    title: "Calculator",
    description:
      "Modern calculator app with history, memory functions, and a clean UI design.",
    live: "https://deepaksinghbhandari.github.io/calculator-project/",
    image:
      "https://media.istockphoto.com/id/1336124758/vector/side-hustle-written-on-yellow-sticky-note.jpg?s=612x612&w=0&k=20&c=unuJ5IyiYn7sbUUIFAezmdr4vOH6z2n1yGoZvODTjNw=",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center display-5 mb-5 fw-bold text-dark">
          My Projects
        </h2>

        <div className="row g-4 justify-content-center">
          {projects.map((project, i) => (
            <div key={i} className="col-md-4 col-sm-6">
              <div
                className="card h-100 shadow-lg border-0 d-flex flex-column"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 22px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0,0,0,0.1)";
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="fw-bold text-dark">{project.title}</h5>
                  <p
                    className="text-muted flex-grow-1"
                    style={{ fontSize: "0.95rem", textAlign: "justify" }}
                  >
                    {project.description}
                  </p>

                  {/* Stylish Live Link */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="see-live mt-auto"
                  >
                    See Live Here →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for stylish link */}
      <style>{`
        .see-live {
          display: inline-block;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          background: linear-gradient(90deg, #0d6efd, #6610f2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: all 0.3s ease;
          position: relative;
        }
        .see-live::after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #0d6efd, #6610f2);
          transition: width 0.3s;
          margin-top: 3px;
        }
        .see-live:hover::after {
          width: 100%;
        }
        .see-live:hover {
          transform: translateX(3px);
        }
      `}</style>
    </section>
  );
};

export default Projects;
