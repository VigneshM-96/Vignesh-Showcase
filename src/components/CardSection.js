// src/components/CardSection.jsx
import React from "react";
import "./cardSection.css";

export default function CardSection({ title, items }) {
  return (
    <section className="card-section" id={title.toLowerCase()}>
      <h2 className="section-title">{title}</h2>
      <div className="cards-container">
        {items.map((item, idx) => (
          <div key={idx} className="card">
            {item.image && <img src={item.image} alt={item.title} />}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
