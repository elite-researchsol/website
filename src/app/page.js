import "./page.css";
import Image from "next/image";
import ExpertsGallery from "@/components/ExpertsGallery";

export default function Home() {
  return (
    <div className="home-wrapper">
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content text-center">
          <div className="glass-panel hero-glass animate-fade-in">
            <h1 className="hero-title">
              Empowering World-Class <br />
              <span className="accent-text">Scholarly Excellence</span>
            </h1>
            <p className="hero-subtitle">
              We provide a global platform for researchers, academicians, and students to refine and disseminate their work. Ensuring groundbreaking research reaches its full potential.
            </p>
            <div className="hero-cta">
              <a href="#services" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>Explore Our Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="section bg-vanilla">
        <div className="container text-center">
          <h2 className="section-title">Who We Are</h2>
          <div className="who-we-are-content qcard max-w-4xl mx-auto">
            <p>
              Elite Research Assistance is an internationally recognized professional association dedicated to the advancement of scholarly excellence. We provide a global platform for researchers, academicians, and students to refine and disseminate their work. Our core strength lies in bridging the gap between raw data and high-impact publication, ensuring that groundbreaking research reaches its full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-gradient">
        <div className="container">
          <div className="mission-vision-grid">
            
            {/* Mission */}
            <div className="qcard text-center glass-panel">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="var(--elite-saffron)" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="card-title">Our Mission</h3>
              <p>
                At Elite Research Publication, our mission is to empower the global research community by providing world-class technical assistance and publication support. We aim to foster academic growth through expert guidance, ensuring every scholar has the tools to produce rigorous, high-quality research that contributes to the global body of knowledge.
              </p>
            </div>

            {/* Vision */}
            <div className="qcard text-center glass-panel">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="var(--elite-saffron)" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="card-title">Our Vision</h3>
              <p>
                To be the world’s leading partner in academic success, recognized for our commitment to integrity, technical precision, and the seamless publication of multidisciplinary research across science, technology, management, and the humanities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* What We Do / Services */}
      <section id="services" className="section bg-white pt-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">What We Do</h2>
            <p className="max-w-3xl mx-auto opacity-90 mb-4 pb-3" style={{ fontSize: "1.1rem" }}>
              Elite Research Publication is dedicated to elevating the standard of academic and professional writing. We specialize in providing comprehensive support for researchers and students to help them navigate the complexities of scholarly work.
            </p>
          </div>

          <div className="services-grid">
            
            <div className="qcard hover-lift">
              <h4 className="service-title">Journal Publications</h4>
              <p className="service-desc">
                End-to-end assistance in getting your research published in reputable, high-impact international journals, including SCI, Scopus, UGC-CARE, and ABDC indexed journals.
              </p>
            </div>

            <div className="qcard hover-lift">
              <h4 className="service-title">Technical & Research Writing</h4>
              <p className="service-desc">
                Expert drafting and editing of complex research papers to meet rigorous academic standards and journal-specific formatting.
              </p>
            </div>

            <div className="qcard hover-lift">
              <h4 className="service-title">Thesis & Dissertation Support</h4>
              <p className="service-desc">
                Professional guidance in structuring and writing comprehensive theses for postgraduate and doctoral programs.
              </p>
            </div>

            <div className="qcard hover-lift">
              <h4 className="service-title">Proposal Writing</h4>
              <p className="service-desc">
                Crafting compelling, well-structured research proposals designed to secure approvals and funding.
              </p>
            </div>

            <div className="qcard hover-lift">
              <h4 className="service-title">PPT Assistance</h4>
              <p className="service-desc">
                Designing professional, data-driven presentations for viva voces, seminars, and international conferences.
              </p>
            </div>

          </div>
          
          <div className="text-center mt-6 qcard cta-note">
            <p>
              By providing these specialized services, we offer a platform that enables researchers to focus on their core discoveries while we handle the technical intricacies of documentation and publication.
            </p>
          </div>

        </div>
      </section>

      {/* Our Experts */}
      <section id="experts" className="section bg-gradient">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Experts</h2>
          </div>
          <ExpertsGallery />
        </div>
      </section>

    </div>
  );
}
