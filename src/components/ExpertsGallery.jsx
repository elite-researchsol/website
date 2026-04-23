"use client";

import { useState } from "react";
import "./ExpertsGallery.css";

const expertsData = [
  {
    id: 1,
    name: "KS Adhith Aydin",
    initials: "KA",
    title: "Co-Founder & Strategic Operations Lead",
    subtitle: "MBA (Finance) | PGDHR (MIT Pune) | DCFM (C-DIT)",
    bio: [
      "A results-driven professional with over 7 years of specialized experience in the field of journal publications, bringing a strong blend of strategic leadership, financial expertise, and people-centric management. With a deep understanding of publication lifecycles and academic ecosystems, he plays a key role in shaping organizational growth and operational excellence.",
      "Holding a Post Graduate Diploma in Human Resources, along with an MBA in Finance and a Diploma in Computer Financial Management, he combines strong financial acumen with modern digital capabilities. This multidisciplinary foundation enables a balanced approach to decision-making—integrating fiscal discipline with scalable human resource strategies.",
      "With a solid academic background in business administration and hands-on industry experience, he focuses on building efficient systems, optimizing workflows, and fostering high-performance teams. His approach emphasizes aligning people, processes, and profitability to create sustainable and growth-oriented business models.",
      "Driven by innovation and precision, he is committed to transforming strategic vision into measurable outcomes, ensuring the organization consistently delivers excellence and remains future-ready in a competitive landscape."
    ]
  },
  {
    id: 2,
    name: "Dr. Jerin Johnkutty",
    initials: "JJ",
    title: "Mechanical Engineer",
    subtitle: "Co- founder & Technical analyst",
    bio: [
      "Jerin Johnkutty is an experienced engineering professional and academic with over 15 years of combined experience in industry and education.",
      "A dedicated researcher, Jerin holds a B.Tech and M.Tech in Engineering and is currently pursuing his Ph.D. His technical expertise spans Industrial Safety, Green Engineering, and Mechatronics, with a specific focus on applying Machine Learning to improve workplace safety standards.",
      "He has published research in reputable journals such as the Journal of the Knowledge Economy and has presented on topics ranging from quality control to behavior-based safety interventions.",
      "Jerin is an active member of professional bodies including the Indian Society for Technical Education (ISTE) and the Institution of Engineers (India) (IEI). He is committed to bridging the gap between theoretical engineering principles and practical industrial applications."
    ]
  },
  {
    id: 3,
    name: "Er. Jakesh P. Kuriakose",
    initials: "JK",
    title: "IT Specialist",
    subtitle: "M.Tech - AI, B.Tech - EEE",
    bio: [
      "Jakesh P. Kuriakose is a forward-thinking IT Specialist with a unique blend of engineering expertise and advanced knowledge in Artificial Intelligence. Holding an M.Tech in AI and a B.Tech in Electrical & Electronics Engineering, he brings a multidisciplinary approach to solving complex technological challenges.",
      "With extensive international experience across the Middle East and India, Jakesh has built a strong foundation in system design, digital construction technologies, and data-driven innovation. His expertise spans Artificial Intelligence, BIM (Building Information Modeling), and modern software tools, enabling him to transform traditional engineering workflows into intelligent, efficient digital solutions.",
      "He is particularly known for his ability to bridge the gap between engineering and IT—integrating AI-powered insights with practical applications. As a skilled trainer and mentor, he has guided professionals and students in adopting cutting-edge technologies, fostering industry-ready skills and future-focused thinking.",
      "Driven by precision, innovation, and continuous learning, Jakesh plays a key role in delivering smart, scalable, and technology-driven solutions in today’s rapidly evolving digital landscape."
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
