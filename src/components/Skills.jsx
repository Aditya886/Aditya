import React, { useState, useEffect } from 'react';

export default function Skills() {
  const [clock, setClock] = useState({ day: '', time: '' });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const day = days[now.getDay()];
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setClock({ day, time: `${hours}:${minutes}` });
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('page6');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-container" id="page3">
      {/* Title in red color container with black title text (outside the card) */}
      <div className="section-header-wrap">
        <div className="skills-title-container">
          <h2>SKILLS & EXPERTISE</h2>
        </div>
      </div>

      {/* Skills Bento Grid */}
      <div className="skills-bento-grid">
        {/* Bento Card 1: Primary Spotlight (Spans 2 rows on left) */}
        <div className="bento-card bento-card-hero">
          <div className="bento-top-row">
            <div className="bento-logo"><i className="fa-solid fa-code"></i> AM</div>
            <div className="bento-time-badge" id="bentoClock">
              {clock.day} <span>{clock.time}</span>
            </div>
          </div>

          <div className="bento-hero-body">
            <span className="bento-label">
              <i className="fa-solid fa-mobile-screen-button"></i> Primary Specialization
            </span>
            <h3 className="bento-hero-title">REACT NATIVE & CROSS-PLATFORM MOBILE ARCHITECTURE</h3>
            <p className="bento-hero-desc">
              Building scalable, high-performance, and lag-free mobile applications with fluid animations,
              native bridging, intuitive UX, and clean state logic.
            </p>
            <div className="bento-hero-tags">
              <span className="bento-pill"><i className="fa-brands fa-react" style={{ color: '#61dbfb' }}></i> React Native</span>
              <span className="bento-pill"><i className="fa-solid fa-feather" style={{ color: '#02569b' }}></i> Flutter</span>
              <span className="bento-pill"><i className="fa-brands fa-android" style={{ color: '#3ddc84' }}></i> Android Development</span>
              <span className="bento-pill">Responsive UI Development</span>
              <span className="bento-pill">Animated UI & Interactions</span>
              <span className="bento-pill">Cross-Platform App Architecture</span>
            </div>
          </div>

          <div className="bento-hero-footer">
            <span>DELAINE TECHNOLOGIES</span>
            <span>BCA & MCA</span>
            <span>CHANDIGARH UNIV</span>
          </div>
        </div>

        {/* Bento Card 2: Programming Languages (Center Top) */}
        <div className="bento-card bento-card-center-top">
          <div className="bento-card-header">
            <span className="bento-label"><i className="fa-solid fa-code"></i> Languages</span>
            <span className="bento-icon-action"><i className="fa-solid fa-arrow-up-right-from-square"></i></span>
          </div>
          <h3 className="bento-title">CORE PROGRAMMING</h3>
          <div className="bento-hero-tags">
            <span className="bento-pill"><i className="fa-brands fa-js" style={{ color: '#f7df1e' }}></i> JavaScript</span>
            <span className="bento-pill">TypeScript</span>
            <span className="bento-pill"><i className="fa-brands fa-java" style={{ color: '#ea2d2e' }}></i> Java</span>
            <span className="bento-pill">Dart</span>
            <span className="bento-pill">C</span>
            <span className="bento-pill">C++</span>
            <span className="bento-pill">Basic Flutter Dev</span>
          </div>
        </div>

        {/* Bento Card 3: Live Status / Availability (Right Top) */}
        <div className="bento-card bento-card-status">
          <div className="bento-card-header">
            <span className="bento-label">Status</span>
            <span className="bento-icon-action"><i className="fa-solid fa-plus"></i></span>
          </div>
          <div className="bento-status-indicator">
            <span className="bento-status-dot"></span>
            <span>AVAILABLE FOR HIRE</span>
          </div>
          <p style={{ fontSize: '13px', color: '#64748b', marginTop: '8px', lineHeight: 1.4 }}>
            Open for full-time engineering roles, mobile contracts & technical collaborations.
          </p>
        </div>

        {/* Bento Card 4: Say Hello / Work Together (Center Middle) */}
        <a href="#page6" className="bento-card bento-card-cta" onClick={scrollToContact}>
          <div className="bento-card-header">
            <span className="bento-label">Say Hello 👋</span>
            <span className="bento-icon-action"><i className="fa-solid fa-arrow-right"></i></span>
          </div>
          <h3 className="bento-title">LET'S WORK TOGETHER</h3>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.4 }}>
            Have an idea or need a mobile developer? Reach out anytime.
          </p>
        </a>

        {/* Bento Card 5: State Management & Backend (Right Middle) */}
        <div className="bento-card bento-card-backend">
          <div className="bento-card-header">
            <span className="bento-label"><i className="fa-solid fa-database"></i> Cloud & State</span>
            <span className="bento-icon-action"><i className="fa-solid fa-arrow-up-right-from-square"></i></span>
          </div>
          <h3 className="bento-title">STATE & BACKEND</h3>
          <div className="bento-hero-tags">
            <span className="bento-pill">Redux.js</span>
            <span className="bento-pill">Supabase</span>
            <span className="bento-pill">Firebase</span>
            <span className="bento-pill">REST API Integration</span>
          </div>
        </div>

        {/* Bento Card 6: Development & Technical Skills (Bottom Left) */}
        <div className="bento-card bento-card-bottom-1">
          <div className="bento-card-header">
            <span className="bento-label"><i className="fa-solid fa-gears"></i> Engineering</span>
            <span className="bento-icon-action"><i className="fa-solid fa-arrow-up-right-from-square"></i></span>
          </div>
          <h3 className="bento-title">TECHNICAL & OPTIMIZATION</h3>
          <div className="bento-hero-tags">
            <span className="bento-pill">Application Development</span>
            <span className="bento-pill">UI/UX Implementation</span>
            <span className="bento-pill">Performance Optimization</span>
            <span className="bento-pill">Problem Solving</span>
            <span className="bento-pill">Debugging & Troubleshooting</span>
            <span className="bento-pill">Scalable Architecture</span>
          </div>
        </div>

        {/* Bento Card 7: Soft Skills & Additional (Bottom Center) */}
        <div className="bento-card bento-card-bottom-2">
          <div className="bento-card-header">
            <span className="bento-label"><i className="fa-solid fa-users"></i> Team & Creative</span>
            <span className="bento-icon-action"><i className="fa-solid fa-arrow-up-right-from-square"></i></span>
          </div>
          <h3 className="bento-title">COLLABORATION & CREATIVE</h3>
          <div className="bento-hero-tags">
            <span className="bento-pill">Team Collaboration</span>
            <span className="bento-pill">Communication & Coordination</span>
            <span className="bento-pill">Creative Thinking</span>
            <span className="bento-pill">Time Management</span>
            <span className="bento-pill">Video Editing</span>
            <span className="bento-pill">Drawing</span>
            <span className="bento-pill">Microsoft Word</span>
          </div>
        </div>

        {/* Bento Card 8: Tools I Use / Daily Stack Dock (Bottom Right) */}
        <div className="bento-card bento-card-bottom-3">
          <div className="bento-card-header">
            <span className="bento-label"><i className="fa-solid fa-toolbox"></i> Tools I Use</span>
            <span className="bento-icon-action"><i className="fa-solid fa-arrow-up-right-from-square"></i></span>
          </div>
          <h3 className="bento-title">MY DAILY STACK</h3>
          <div className="bento-tools-dock">
            <div className="dock-app-icon" title="React Native / React">
              <img src="/React.png" alt="React" />
            </div>
            <div className="dock-app-icon" title="Android Studio">
              <img src="/Android Studio.png" alt="Android Studio" />
            </div>
            <div className="dock-app-icon" title="Xcode">
              <img src="/Xcode.png" alt="Xcode" />
            </div>
            <div className="dock-app-icon" title="Firebase">
              <img src="/Firebase.png" alt="Firebase" />
            </div>
            <div className="dock-app-icon" title="TypeScript">
              <img src="/TypeScript.png" alt="TypeScript" />
            </div>
            <div className="dock-app-icon" title="Git">
              <img src="/Git.png" alt="Git" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

