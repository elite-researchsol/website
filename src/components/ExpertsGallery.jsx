"use client";

import { useState } from "react";
import "./ExpertsGallery.css";

const expertsData = [
  {
    id: 1,
    name: "Dr. Jerin Johnkutty",
    initials: "JJ",
    imageUrl: "/jerin.jpg",
    title: "Mechanical Engineer",
    subtitle: "Co-founder & Director - Operations",
    bio: [
      "Jerin Johnkutty is an experienced engineering professional and academic with over 15 years of combined experience in industry and education. He currently serves as the Assistant Professor and Head of Department (In-Charge) of Mechanical Engineering at Thejus Engineering College in Thrissur, Kerala.",
      "A dedicated researcher, Jerin holds a B.Tech and M.Tech in Engineering and is currently pursuing his Ph.D. His technical expertise spans Industrial Safety, Green Engineering, and Mechatronics, with a specific focus on applying Machine Learning to improve workplace safety standards.",
      "He has published research in reputable journals such as the Journal of the Knowledge Economy and has presented on topics ranging from quality control to behavior-based safety interventions.",
      "Jerin is an active member of professional bodies including the Indian Society for Technical Education (ISTE) and the Institution of Engineers (India) (IEI). He is committed to bridging the gap between theoretical engineering principles and practical industrial applications."
    ]
  },
  {
    id: 2,
    name: "Add Expert Here",
    initials: "EX",
    title: "Academic Consultant",
    bio: [
      "Additional expert details can be added here. Elite Research Solutions collaborates with leading academicians to provide you with world-class support."
    ]
  }
];

export default function ExpertsGallery() {
  const [activeExpert, setActiveExpert] = useState(expertsData[0]);

  return (
    <div className="experts-gallery">
      {/* Selection Tabs */}
      <div className="experts-sidebar">
        {expertsData.map((expert) => (
          <button
            key={expert.id}
            className={`expert-tab ${activeExpert.id === expert.id ? "active-tab" : ""}`}
            onClick={() => setActiveExpert(expert)}
          >
            <div className="expert-tab-avatar" style={{ overflow: 'hidden' }}>
              {expert.imageUrl ? (
                <img src={expert.imageUrl} alt={expert.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : expert.initials}
            </div>
            <div className="expert-tab-info">
              <h4>{expert.name}</h4>
              <p>{expert.title}</p>
              {expert.subtitle && <p style={{ fontSize: '0.85rem', color: 'var(--elite-saffron)', marginTop: '0.2rem', fontWeight: 500 }}>{expert.subtitle}</p>}
            </div>
          </button>
        ))}
      </div>

      {/* Main Detail Panel */}
      <div className="qcard glass-panel expert-detail-panel">
        <div className="expert-header text-center">
          <div className="expert-avatar-large" style={{ overflow: 'hidden' }}>
            {activeExpert.imageUrl ? (
              <img src={activeExpert.imageUrl} alt={activeExpert.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : activeExpert.initials}
          </div>
          <h3 className="card-title" style={{ marginBottom: "0.25rem" }}>{activeExpert.name}</h3>
          <p style={{ color: "var(--elite-saffron)", fontWeight: "600", fontSize: "1.1rem" }}>
            {activeExpert.title}
          </p>
          {activeExpert.subtitle && (
            <p style={{ color: "var(--elite-navy)", fontWeight: "600", fontSize: "0.95rem", marginTop: "0.25rem", opacity: 0.8 }}>
              {activeExpert.subtitle}
            </p>
          )}
        </div>
        
        <div className="expert-bio-content fade-in-key">
          {activeExpert.bio.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
