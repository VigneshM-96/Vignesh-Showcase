import React from "react";
import { motion } from "framer-motion";
import "../styles/about.css";
import vignesh from "../assets/developer.jpeg"; // Your profile image
import codeImg from "../assets/code.png";
import mlImg from "../assets/ml.png";
import creativeImg from "../assets/creative.png";

const highlights = [
  { title: "Passionate Coder", image: codeImg, description: "Vignesh builds futuristic apps, automation tools, and AI-powered systems that stand out." },
  { title: "Machine Learning Expert", image: mlImg, description: "He creates smart prediction models and intelligent systems with real-world impact." },
  { title: "Creative Thinker", image: creativeImg, description: "His creativity shines through clean UI, innovation, and next-level problem-solving." },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="about-header">
          <h2>About Him</h2>
          <p>
            Hey, I’m <b>Iron Man</b> 🤖 — and let me introduce my ally,
            <span className="highlight"> Vignesh</span> — a tech genius who
            blends creativity with technology to build smart solutions for the
            future. Let’s see what makes him awesome!
          </p>
        </div>

        <motion.div
          className="about-profile-container"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img src={vignesh} alt="Vignesh" className="about-profile" />
          
        </motion.div>

        <div className="highlights-container">
          {highlights.map((item, index) => (
            <motion.div
              className="highlight-card"
              key={index}
              whileHover={{
                scale: 1.1,
                y: -6,
                boxShadow: "0 12px 28px rgba(255, 0, 0, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <img src={item.image} alt={item.title} className="highlight-img" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
