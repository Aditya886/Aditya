import React from 'react';

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="page1">
      <div className="hero-container">
        {/* Left: Content & Text */}
        <div className="hero-content">
          <div className="hero-greeting-pill">
            <span>Hey there! 👋 I'm</span>
          </div>

          <h1 className="hero-name">ADITYA MAHIWAL</h1>

          <div className="hero-role-wrapper">
            <span className="hero-role-badge">Mobile App Developer</span>
            <span className="hero-role-separator">|</span>
            <span className="hero-role-accent">React Native Specialist</span>
          </div>

          <div className="hero-descriptions">
            <p className="hero-lead-text">
              I turn ideas into beautiful, responsive, and high-performance mobile applications.
            </p>
            <p className="hero-body-text">
              Passionate about crafting smooth user experiences, creative interfaces, and powerful mobile
              solutions with modern technologies.
            </p>
            <p className="hero-callout">
              <strong>Let's build something amazing together.</strong>
            </p>
          </div>

          <div className="hero-actions">
            <a href="#page4" className="hero-btn-primary" onClick={(e) => scrollTo(e, 'page4')}>
              <span className="btn-text">Explore My Work</span>
              <span className="btn-icon-circle">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </a>
            <a href="#page6" className="hero-btn-secondary" onClick={(e) => scrollTo(e, 'page6')}>
              <span className="btn-text">Get In Touch</span>
              <span className="btn-icon-circle">
                <i className="fa-solid fa-paper-plane"></i>
              </span>
            </a>
          </div>
        </div>

        {/* Right: 3D Visual Subject with Backdrop & Shadows */}
        <div className="hero-visual-area">
          <div className="hero-3d-scene">
            {/* Modern Backdrop Panel with signature curvature */}
            <div className="hero-backdrop-panel">
              <div className="panel-bg-watermark">REACT NATIVE</div>
            </div>

            {/* 3D Cutout Subject with Multi-Layered Drop Shadow */}
            <div className="hero-subject-wrapper">
              <img src="/Subject.png" alt="Aditya Mahiwal" className="hero-subject-3d" />
            </div>

            {/* Prominent Header Row Overlay (Always visible with z-index: 5) */}
            <div className="panel-header-row">
              <span className="panel-status-pill">
                <span className="panel-status-dot"></span>
                <span>Mobile Architect</span>
              </span>
            </div>

            {/* Floating 3D Badges */}
            <div className="hero-floating-badge badge-top-left">
              <div className="badge-icon react-icon"><i className="fa-brands fa-react"></i></div>
              <div className="badge-text">
                <strong>React Native</strong>
                <span>Specialist</span>
              </div>
            </div>

            <div className="hero-floating-badge badge-bottom-right">
              <div className="badge-icon app-icon"><i className="fa-solid fa-mobile-screen-button"></i></div>
              <div className="badge-text">
                <strong>High Performance</strong>
                <span>Smooth 60FPS UI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

