import React from "react";
import { motion } from "framer-motion";
import "../styles/skills.css";

const SKILLS = [
  { name: "React", level: "Advanced" },
  { name: "JavaScript (ES6+)", level: "Advanced" },
  { name: "Framer Motion", level: "Advanced" },
  { name: "CSS/HTML", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2>Skills</h2>
        </div>
        <div className="skill-grid">
          {SKILLS.map((s, index) => (
            <motion.div
              className="skill-card"
              key={s.name}
              tabIndex={0}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 12px 30px rgba(255,204,0,0.25)",
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            >
              <div className="skill-icon">{s.name.split(" ")[0].charAt(0)}</div>
              <h3>{s.name}</h3>
              <p className="meta">{s.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
