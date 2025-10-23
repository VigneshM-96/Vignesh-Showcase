import React from "react";
import { motion } from "framer-motion";
import "../styles/experience.css";
import techno from "../assets/techno.png";
import flipkart from "../assets/flipkart.png";
import ironman from "../assets/avengers.png";

export default function Experience() {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "TechnoHacks Solutions",
      duration: "Jul 2025 - Aug 2025",
      description:
        "Worked on AI models that predict outcomes using real-world data. Developed smart and optimized machine learning pipelines.",
      img: techno,
    },
    {
      title: "Material Handling & Process",
      company: "Flipkart India Pvt Ltd",
      duration: "Sept 2025 - Oct 2025",
      description:
        "Learned how Flipkart’s massive logistics system works — managing product flow, warehouse optimization, and on-time delivery.",
      img: flipkart,
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>

        <motion.p
          className="section-intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <img src={ironman} alt="Iron Man" className="ironman-mini" />
          <span>
            “Let’s take a look at Vignesh’s powerful experiences that built his
            tech armor!”
          </span>
        </motion.p>

        <div className="exp-grid">
          {experiences.map((exp, index) => (
            <motion.div
              className="exp-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <div className="exp-img-container">
                <img src={exp.img} alt={exp.company} className="exp-img" />
              </div>
              <h3>{exp.title}</h3>
              <p className="meta">{exp.company}</p>
              <p className="duration">{exp.duration}</p>
              <p className="desc">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
