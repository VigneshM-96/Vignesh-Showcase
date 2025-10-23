// src/components/IronManFlyTalk.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../components/IronManFlyTalk.css";
import ironman from "../assets/ironman.png";

const sectionsData = [
  {
    id: "intro",
    message: "Hey there! I'm Iron Man, and this is Vignesh’s Showcase 🚀 Let’s explore his world of tech and innovation!",
  },
  {
    id: "projects",
    message: "Check this out! Vignesh has built some amazing projects 💻 – from apps to AI experiments!",
  },
  {
    id: "skills",
    message: "Here’s what makes Vignesh a tech superhero ⚡ – his skills in programming, ML, and more!",
  },
  {
    id: "achievements",
    message: "Achievements unlocked! 🏆 Vignesh has earned awards, recognitions, and milestones in his journey.",
  },
  {
    id: "experience",
    message: "Experience is power! 👨‍💼 Vignesh has worked on real-world projects that sharpened his expertise.",
  },
  {
    id: "internships",
    message: "Internship missions complete! 💼 Vignesh contributed to top companies gaining hands-on experience.",
  },
  {
    id: "current-projects",
    message: "Current operations in progress 🔥 – Vignesh is building innovative projects live!",
  },
  {
    id: "contact",
    message: "Let’s connect! 📞 Feel free to reach out to Vignesh via LinkedIn, GitHub, or Gmail!",
  },
];
export default function IronManFlyTalk() {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2 - 60,
    y: window.innerHeight * 0.25,
  });
  const [message, setMessage] = useState(sectionsData[0].message);
  const [side, setSide] = useState("center");

  const floatAnimation = {
    y: [0, -12, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  };

  useEffect(() => {
    const handleScroll = () => {
      sectionsData.forEach((sec, idx) => {
        const el = document.getElementById(sec.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          const moveRight = idx % 2 === 1; // alternate sides
          const padding = 24;
          const ironmanWidth = 120;
          const bubbleWidth = 220;

          let newX = moveRight
            ? Math.min(window.innerWidth - ironmanWidth - padding, window.innerWidth * 0.85)
            : padding;

          let newY = Math.min(window.innerHeight - ironmanWidth - 50, window.innerHeight * 0.25);

          setPosition({ x: newX, y: newY });
          setMessage(sec.message);
          setSide(moveRight ? "right" : "left");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="ironman-container"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 60, damping: 15 }}
    >
      {/* Bubble above Iron Man */}
      <div className={`speech-bubble ${side}`}>{message}</div>

      {/* Iron Man image with forced flip */}
      <motion.img
  src={ironman}
  alt="Iron Man"
  className="ironman-img"
  animate={{
    y: floatAnimation.y,      // floating effect
    scaleX: side === "right" ? -1 : 1  // flip when on right
  }}
  transition={{
    y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    default: { duration: 0.5, ease: "easeInOut" }
  }}
  style={{ width: "120px", height: "auto" }}
/>

    </motion.div>
  );
}