import React from "react";
import "../styles/projects.css";

const PROJECTS = [
  { id:1, title:"Smart Traffic Diversion", tech:["React","Node.js","Mapbox"], short:"Real-time traffic diversion with predictive routing.", details:"Frontend (React), Backend (Node), realtime mapping, deployed on AWS.", live:"#", repo:"#"},
  { id:2, title:"Crop Disease Predictor", tech:["Python","TensorFlow","Flask"], short:"Detect crop disease from leaf images with high accuracy.", details:"CNN model + Flask API + React UI.", live:"#", repo:"#"},
  { id:3, title:"E-commerce PWA", tech:["React","Redux","Stripe"], short:"PWA e-commerce with offline support and fast checkout.", details:"Performance-focused PWA with Stripe integration.", live:"#", repo:"#"},
  { id:4, title:"IronMan Portfolio", tech:["React","Framer Motion","CSS"], short:"Interactive portfolio with Iron Man guided walkthrough.", details:"Animated assistant, responsive cards, accessible nav.", live:"#", repo:"#"},
  { id:5, title:"Health Tracker Dashboard", tech:["React","D3","Express"], short:"Real-time health monitoring dashboard for clinics.", details:"Custom charts, WebSocket live updates, auth.", live:"#", repo:"#"},
  { id:6, title:"AI Chat Assist", tech:["Node.js","OpenAI API","Socket.io"], short:"In-app AI assistant with context and memory.", details:"Context-aware chat with streaming responses.", live:"#", repo:"#"},
];

export default function Projects(){
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map(p => (
            <article className="project-card" key={p.id}>
              <div className="project-visual">
                <div className="visual-placeholder">{p.title.split(" ").slice(0,2).join(" ")}</div>
              </div>
              <h3>{p.title}</h3>
              <p className="short">{p.short}</p>
              <p className="details">{p.details}</p>
              <div className="tags">{p.tech.map(t => <span className="tag" key={t}>{t}</span>)}</div>
              <div className="proj-actions">
                <a className="btn" href={p.live}>Live</a>
                <a className="btn outline" href={p.repo}>Code</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
