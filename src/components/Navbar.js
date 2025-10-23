import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import "../styles/navbar.css";

const MENU = [
  "About",
  "Projects",
  "Skills",
  "Achievements",
  "Experience",
  "Internships",
  "Current Projects",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <a href="#about" className="brand">Vignesh Showcase</a>
        </div>

        <div className="nav-right">
          <button
            aria-label="menu"
            className="menu-btn"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu-panel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            onClick={() => setOpen(false)}
          >
            <ul className="menu-list">
              {MENU.map((m) => {
                const id = m.toLowerCase().replace(/\s+/g, "-");
                return (
                  <li key={m}>
                    <a href={`#${id}`}>{m}</a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
