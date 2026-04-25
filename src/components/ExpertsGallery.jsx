"use client";

import { useState } from "react";
import "./ExpertsGallery.css";

const expertsData = [
  {
    id: 1,
    name: "Raghav Prasad",
    initials: "KA",
    title: "Co-Founder & Director-Operations",
    subtitle: "MBA (Finance) | PGDHR (MIT Pune) | DCFM (C-DIT)",
    bio: [
      "Executive Leadership & Strategic Growth: With a career defined by 7 years of high-impact leadership in the Journal Publication industry—culminating in his role as General Manager—He brings an executive veteran’s perspective to the helm of the organization. As a Co-Founder, he bridges the gap between complex financial architecture and world-class human capital management.",
      "A Multidisciplinary Foundation: His leadership is backed by an elite academic and technical pedigree designed for operational excellence.",
      "Strategic HR Leadership: Post Graduate Diploma in Human Resources from MIT Pune, focused on building scalable, high-performance organizational cultures.",
      "Financial & Technical Mastery: MBA in Finance (Alagappa University) and a DCFM from C-DIT, blending fiscal precision with modern digital financial management.",
      "General Management Expertise: 7 years of deep-rooted experience navigating the entire Journal Publication lifecycle, specializing in operational efficiency and large-scale team leadership.",
      "Driving the Vision: He believes that a successful startup requires the same discipline he applied as a General Manager: a dual focus on fiscal integrity and empowered talent.",
      "By integrating his foundation with years of executive-level decision-making, he ensures the business remains lean, data-driven, and positioned for rapid growth.",
      "He is dedicated to transforming visionary ideas into operational realities, ensuring the company sets new global benchmarks for professional excellence."
    ]
  },
  {
    id: 2,
    name: "Dr. Jerin Johnkutty",
    initials: "JJ",
    title: "Research Associate",
    subtitle: "Co- founder & Technical analyst",
    bio: [
      "Dr. Jerin Johnkutty is a seasoned engineering professional and academic with over 15 years of combined experience across industry and higher education. With a strong commitment to research and innovation, he brings a balanced perspective that integrates practical engineering applications with advanced academic insights.",
      "He holds a B.Tech, M.Tech, and a Ph.D. in Engineering, with core expertise in Industrial Safety, Green Engineering, and Mechatronics. His work is particularly focused on leveraging Machine Learning techniques to enhance workplace safety, optimize systems, and drive sustainable engineering practices.",
      "Dr. Jerin has an established research profile with more than seven publications indexed in leading platforms such as Scopus, Springer, and Web of Science. His contributions span critical areas including quality control, safety engineering, and behavior-based safety interventions, reflecting a deep engagement with contemporary engineering challenges.",
      "An active member of professional bodies such as the Indian Society for Technical Education (ISTE) and the Institution of Engineers (India) (IEI), he is dedicated to bridging the gap between theoretical knowledge and real-world implementation. His approach emphasizes innovation, applied research, and the development of future-ready engineering solutions."
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
