import React from "react";
import "../styles/internships.css";


const INTERNSHIPS = [
  {
    id: 1,
    role: "Android Application Developer",
    company: "Oasis Infobyte",
    duration: "Jul 2025 – Aug 2025",
    desc: "Developed Android applications with responsive UI, Firebase integration, and real-time features.",
  },
  {
    id: 2,
    role: "Machine Learning Intern",
    company: "TechcoHacks Solutions",
    duration: "Jul 2025 – Aug 2025",
    desc: "Worked on predictive models, data preprocessing, and ML model deployment for real-world applications.",
  },
];

export default function Internships() {
  return (
    <section id="internships" className="internship-section">
      <div className="container">
        <h2>Internships</h2>
        <div className="internship-grid">
          {INTERNSHIPS.map((item) => (
            <div className="internship-card" key={item.id} tabIndex={0}>
              <div className="internship-header">
                <h3>{item.role}</h3>
                <span className="company">{item.company}</span>
              </div>
              <span className="duration">{item.duration}</span>
              <p className="desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
