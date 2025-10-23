import React from "react";
import { motion } from "framer-motion";
import "../styles/currentProjects.css";
import spacezip from "../assets/spacezip.jpg"; // <-- optional project image

export default function CurrentProject() {
  return (
    <section id="current-projects" className="current-projects-section">
      <motion.div
        className="current-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="current-header">
          <h2>Current Project</h2>
          <h3 className="project-name">🚀 Space Zip</h3>
          <p>
            <span className="highlight">Space Zip</span> is an advanced AI-powered system that
            monitors and predicts cosmic and planetary events — from <b>asteroid threats</b> to
            <b>alien detection</b>, <b>earthquake forecasting</b>, and <b>solar system safety</b>.
          </p>
        </div>

        <motion.div
          className="project-display"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.img
            src={spacezip}
            alt="Space Zip"
            className="project-image"
            animate={{ rotate: [0, 1, -1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="project-features">
            <motion.div
              className="feature-card"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
            >
              <h4>🛰 Asteroid Alert System</h4>
              <p>AI predicts asteroid trajectories to safeguard the planet.</p>
            </motion.div>

            <motion.div
              className="feature-card"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
            >
              <h4>👽 Alien Detection AI</h4>
              <p>Tracks unusual cosmic signals and anomalies in real time.</p>
            </motion.div>

            <motion.div
              className="feature-card"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
            >
              <h4>🌋 Earthquake Predictor</h4>
              <p>Uses machine learning to forecast seismic activities early.</p>
            </motion.div>

            <motion.div
              className="feature-card"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
            >
              <h4>☀️ Solar System Monitor</h4>
              <p>Analyzes radiation, orbit data, and environmental risks.</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
