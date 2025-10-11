import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    text: "deepakbhandari8008@gmail.com",
    link: "mailto:deepakbhandari8008@gmail.com",
  },
  {
    icon: <FaPhone />,
    text: "+91 12345 67890",
    link: "tel:+911234567890",
  },
  {
    icon: <FaMapMarkerAlt />,
    text: "Pune, Maharashtra, India",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_lqynuxg",       // Service ID
        "template_2hdw98b",      // Template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        "YE5rfIjjcW2nbPGzI"      //  Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          alert("🎉 Thank you! Your message has been sent successfully.");
        },
        (err) => {
          console.error("EmailJS Error:", err);
          setStatus("Failed to send. Please try again.");
          alert("⚠️ Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-5 bg-dark text-light">
      <div className="container">
        <h2 className="text-center display-5 fw-bold mb-4 text-primary">Get In Touch</h2>
        <p className="text-center text-secondary mb-5">
          Interested in collaborating or just want to say hi? Fill the form or use the contact details below — I would love to hear from you!
        </p>

        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-md-5 d-flex flex-column gap-4">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="d-flex align-items-center gap-3 p-3 bg-secondary bg-opacity-10 rounded shadow-sm"
                style={{ transition: "transform 0.3s, background 0.3s" }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <span className="text-primary fs-4">{info.icon}</span>
                {info.link ? (
                  <a href={info.link} className="text-light text-decoration-none fw-bold">
                    {info.text}
                  </a>
                ) : (
                  <span className="fw-bold">{info.text}</span>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <form
              onSubmit={handleSubmit}
              className="p-4 bg-secondary bg-opacity-10 rounded shadow-sm"
              style={{ animation: "fadeIn 1s", transition: "transform 0.3s" }}
            >
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-control bg-dark text-light border border-secondary shadow-sm"
                  style={{ transition: "box-shadow 0.2s" }}
                  onFocus={(e) => e.currentTarget.style.boxShadow = "0 0 8px #0d6efd"}
                  onBlur={(e) => e.currentTarget.style.boxShadow = "none"}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-control bg-dark text-light border border-secondary shadow-sm"
                  style={{ transition: "box-shadow 0.2s" }}
                  onFocus={(e) => e.currentTarget.style.boxShadow = "0 0 8px #0d6efd"}
                  onBlur={(e) => e.currentTarget.style.boxShadow = "none"}
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-control bg-dark text-light border border-secondary shadow-sm"
                  style={{ transition: "box-shadow 0.2s" }}
                  onFocus={(e) => e.currentTarget.style.boxShadow = "0 0 8px #0d6efd"}
                  onBlur={(e) => e.currentTarget.style.boxShadow = "none"}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 fw-bold"
                style={{ transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Send Message
              </button>
              {status && <p className="mt-3 text-center">{status}</p>}
            </form>
          </div>
        </div>
      </div>

      {/* Fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Contact;
