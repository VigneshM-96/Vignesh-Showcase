import React from "react";
import IronManFlyTalk from "./components/IronManFlyTalk";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Internships from "./components/Internships";
import Contact from "./components/Contact";
import CurrentProject from "./components/CurrentProject";
import "./styles/main.css";

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <IronManFlyTalk />

      <main>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="internships"><Internships /></section>
        <section id="current-projects"><CurrentProject/> </section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}
