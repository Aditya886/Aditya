import React, { useMemo } from 'react';

export default function AboutMe() {
  const metrics = useMemo(() => {
    const now = new Date();

    // 1. Full-Time Developer Job: Started July 1, 2024
    const jobStart = new Date(2024, 6, 1);
    let jobMonths = (now.getFullYear() - jobStart.getFullYear()) * 12 + (now.getMonth() - jobStart.getMonth());
    if (now.getDate() < jobStart.getDate()) jobMonths -= 1;
    if (jobMonths < 0) jobMonths = 0;
    const jobYearsDecimal = (jobMonths / 12).toFixed(1);

    // 2. 6-Month Intensive Internship (Jan 2024 - June 2024)
    const internshipMonths = 6;
    const totalMonths = jobMonths + internshipMonths;
    const totalYearsDecimal = (totalMonths / 12).toFixed(1);

    // 3. Ongoing MCA at Chandigarh University (May 1, 2026 to May 1, 2028 = 24 Months)
    const mcaStart = new Date(2026, 4, 1);
    let mcaElapsedMonths = (now.getFullYear() - mcaStart.getFullYear()) * 12 + (now.getMonth() - mcaStart.getMonth());
    if (now.getDate() < mcaStart.getDate()) mcaElapsedMonths -= 1;
    if (mcaElapsedMonths < 0) mcaElapsedMonths = 0;

    const mcaProgressPercent = Math.min(100, Math.max(8, Math.round((mcaElapsedMonths / 24) * 100)));
    const mcaYearText = mcaElapsedMonths < 12 ? '1st Year' : '2nd Year';

    return {
      totalExp: `${totalYearsDecimal}+ Yrs`,
      jobExp: `${jobYearsDecimal}+ Yrs`,
      jobTenure: `${jobYearsDecimal}+ Years Active`,
      mcaYear: mcaYearText,
      mcaTerm: mcaYearText.toUpperCase(),
      mcaProgress: mcaProgressPercent,
      mcaProgressText: `${mcaYearText} in Progress (~${mcaProgressPercent}% Completed)`,
    };
  }, []);

  return (
    <section className="section-container" id="page2">
      {/* Title in red color container with black title text (outside the card) */}
      <div className="section-header-wrap">
        <div className="about-title-container">
          <h2>ABOUT ME</h2>
        </div>
      </div>

      {/* Bento Grid Container Stacks (No Outer Enclosing Card) */}
      <div className="about-bento-grid">
        {/* STACK CARD 1: BIO & SPECIALIZATION SPOTLIGHT */}
        <div className="about-stack-card card-bio-hero">
          <div className="stack-card-top">
            <span className="stack-badge red-pill">
              <span className="panel-status-dot"></span>
              Mobile App Developer
            </span>
            <span className="stack-corner-icon"><i className="fa-solid fa-code"></i></span>
          </div>
          <div className="stack-card-body">
            <h3 className="stack-hero-name">ADITYA MAHIWAL</h3>
            <div className="stack-role-line">
              <span className="role-highlight">React Native Specialist</span>
              <span className="role-sep">•</span>
              <span>Cross-Platform Engineer</span>
            </div>
            <p className="stack-body-text">
              I specialize in building modern, responsive, visually appealing, and high-performance mobile
              applications with smooth 60FPS animations, intuitive user experiences, and optimized
              functionality. My focus is on creating applications that are not only attractive but also
              scalable, reliable, and lag-free.
            </p>
            <div className="stack-pills-row">
              <span className="stack-pill"><i className="fa-brands fa-react" style={{ color: '#61dbfb' }}></i> React Native</span>
              <span className="stack-pill"><i className="fa-solid fa-feather" style={{ color: '#02569b' }}></i> Flutter</span>
              <span className="stack-pill"><i className="fa-brands fa-android" style={{ color: '#3ddc84' }}></i> Android Dev</span>
              <span className="stack-pill"><i className="fa-solid fa-network-wired" style={{ color: '#ff2a2a' }}></i> REST APIs</span>
              <span className="stack-pill"><i className="fa-solid fa-fire" style={{ color: '#ffa000' }}></i> Firebase</span>
            </div>
          </div>
        </div>

        {/* STACK CARD 2: DYNAMIC CAREER METRICS COUNTER */}
        <div className="about-stack-card card-metrics-stack">
          <div className="stack-card-top">
            <span className="stack-badge grey-pill">
              <i className="fa-solid fa-chart-simple"></i> Experience Metrics
            </span>
            <span className="stack-corner-icon pulse-red"><i className="fa-solid fa-bolt"></i></span>
          </div>
          <div className="metrics-stack-list">
            <div className="metric-stack-item">
              <div className="metric-num">{metrics.totalExp}</div>
              <div className="metric-info">
                <span className="metric-label">Total Dev Experience</span>
                <span className="metric-note">Job + 6M Internship</span>
              </div>
            </div>
            <div className="metric-stack-item">
              <div className="metric-num">{metrics.jobExp}</div>
              <div className="metric-info">
                <span className="metric-label">Full-Time Job</span>
                <span className="metric-note">Delaine Technologies</span>
              </div>
            </div>
            <div className="metric-stack-item">
              <div className="metric-num">6 Months</div>
              <div className="metric-info">
                <span className="metric-label">Mobile Internship</span>
                <span className="metric-note">Kodu / Dhurina Ventures</span>
              </div>
            </div>
            <div className="metric-stack-item highlight-item">
              <div className="metric-num">{metrics.mcaYear}</div>
              <div className="metric-info">
                <span className="metric-label">Ongoing MCA Degree</span>
                <span className="metric-note">Chandigarh University</span>
              </div>
            </div>
          </div>
        </div>

        {/* STACK CARD 3: CURRENT ONGOING MCA SPOTLIGHT */}
        <div className="about-stack-card card-mca-spotlight">
          <div className="mca-banner-header">
            <div>
              <span className="mca-live-tag">
                <span className="panel-status-dot"></span> CURRENTLY PURSUING • 1ST YEAR
              </span>
              <h3 className="mca-banner-title">MASTER OF COMPUTER APPLICATIONS (MCA)</h3>
              <div className="mca-institution-row">
                <i className="fa-solid fa-building-columns"></i>
                <strong>Chandigarh University, Chandigarh</strong>
                <span className="mca-sep">•</span>
                <span>May 2026 – May 2028 (2-Year Master's Degree)</span>
              </div>
            </div>
            <div className="mca-status-badge">
              <span className="mca-badge-term">{metrics.mcaTerm}</span>
              <span className="mca-badge-note">Active Session</span>
            </div>
          </div>

          <div className="mca-progress-container">
            <div className="mca-progress-header">
              <span>
                <i className="fa-regular fa-clock"></i> Program Duration: <strong>May 2026 – May 2028 (2-Year Program)</strong>
              </span>
              <span>{metrics.mcaProgressText}</span>
            </div>
            <div className="mca-progress-track">
              <div className="mca-progress-fill" style={{ width: `${metrics.mcaProgress}%` }}></div>
            </div>
          </div>

          <p className="mca-banner-desc">
            Currently in the <strong>1st year</strong> of my 2-year Master of Computer Applications (MCA) at
            Chandigarh University (commenced May 2026, graduating in 2028). This advanced program systematically
            elevates my expertise across distributed cloud computing, scalable enterprise architectures, machine
            learning integration, and advanced database engineering—complementing my everyday production
            experience in building mission-critical mobile applications.
          </p>
        </div>

        {/* STACK CARD 4: FULL-TIME DEVELOPER JOB (Delaine Technologies) */}
        <div className="about-stack-card card-job-delaine">
          <div className="stack-card-top">
            <span className="stack-badge live-green-pill">
              <span className="live-pulse-dot"></span> FULL-TIME ROLE
            </span>
            <span className="stack-tenure-tag">{metrics.jobTenure}</span>
          </div>
          <div className="stack-card-body">
            <div className="stack-role-title">Mobile App Developer</div>
            <div className="stack-company-name">
              <i className="fa-solid fa-building"></i>
              <strong>Delaine Technologies Pvt. Ltd.</strong>
            </div>
            <div className="stack-date-location">
              <span><i className="fa-regular fa-calendar"></i> July 2024 – Present (Ongoing)</span>
            </div>
            <p className="stack-card-desc">
              Contributing to developing feature-rich mobile applications, implementing complex business
              logic, integrating APIs, and building responsive user interfaces with smooth animations and
              performance-focused architecture. Engineered applications across AI wellness, sports betting
              analytics, and BNPL fintech.
            </p>
            <div className="stack-tech-badges">
              <span>React Native</span>
              <span>Redux Toolkit</span>
              <span>Supabase</span>
              <span>Firebase</span>
              <span>REST APIs</span>
            </div>
          </div>
        </div>

        {/* STACK CARD 5: 6-MONTH INTERNSHIP (Kodu - Powered by Dhurina) */}
        <div className="about-stack-card card-internship-kodu">
          <div className="stack-card-top">
            <span className="stack-badge blue-pill">
              <i className="fa-solid fa-briefcase"></i> 6-MONTH INTERNSHIP
            </span>
            <span className="stack-tenure-tag">Jan 2024 – Jun 2024</span>
          </div>
          <div className="stack-card-body">
            <div className="stack-role-title">Android / Mobile App Development Intern</div>
            <div className="stack-company-name">
              <i className="fa-solid fa-building"></i>
              <strong>Kodu – Powered by Dhurina Ventures Pvt. Ltd.</strong>
            </div>
            <div className="stack-date-location">
              <span><i className="fa-solid fa-location-dot"></i> Hisar, Haryana</span>
            </div>
            <p className="stack-card-desc">
              Completed a 6-month internship focused on mobile application development, working on multiple
              live projects and gaining practical industry experience. Worked on building application
              features, implementing mobile UI/UX, debugging, improving performance, and developing
              application functionality using React Native and modern development tools.
            </p>
            <div className="stack-tech-badges">
              <span>React Native</span>
              <span>Android Dev</span>
              <span>Mobile UI/UX</span>
              <span>Performance Optimization</span>
            </div>
          </div>
        </div>

        {/* STACK CARD 6: KODU APP DEV SPECIALIZATION PROGRAM */}
        <div className="about-stack-card card-edu-kodu">
          <div className="stack-card-top">
            <span className="stack-badge red-pill">
              <i className="fa-solid fa-certificate"></i> APP DEV PROGRAM
            </span>
            <span className="stack-tenure-tag">Jun 2023 – Dec 2023</span>
          </div>
          <div className="stack-card-body">
            <div className="stack-role-title">App Development Specialization</div>
            <div className="stack-company-name">
              <i className="fa-solid fa-award"></i>
              <strong>KODU – Powered by Dhurina, Hisar</strong>
            </div>
            <p className="stack-card-desc">
              Completed an intensive app development program covering mobile app architecture, UI/UX
              fundamentals, React Native, Firebase integration, testing, and deployment. Gained practical
              experience through hands-on projects and collaborative development.
            </p>
            <div className="stack-tech-badges">
              <span>React Native Architecture</span>
              <span>Testing & Deployment</span>
            </div>
          </div>
        </div>

        {/* STACK CARD 7: BCA DEGREE */}
        <div className="about-stack-card card-edu-bca">
          <div className="stack-card-top">
            <span className="stack-badge green-pill">
              <i className="fa-solid fa-graduation-cap"></i> GRADUATED
            </span>
            <span className="stack-tenure-tag">Apr 2019 – Apr 2024</span>
          </div>
          <div className="stack-card-body">
            <div className="stack-role-title">Bachelor of Computer Applications (BCA)</div>
            <div className="stack-company-name">
              <i className="fa-solid fa-building-columns"></i>
              <strong>Dayanand College, Hisar</strong>
            </div>
            <p className="stack-card-desc">
              Studied software development, database management, object-oriented programming, data structures,
              and web technologies, building strong computational and algorithmic foundations.
            </p>
            <div className="stack-tech-badges">
              <span>Software Engineering</span>
              <span>DBMS</span>
              <span>Data Structures</span>
            </div>
          </div>
        </div>

        {/* STACK CARD 8: HIGHER SECONDARY SCHOOL (+2) */}
        <div className="about-stack-card card-edu-school">
          <div className="stack-card-top">
            <span className="stack-badge grey-pill">
              <i className="fa-solid fa-school"></i> HIGHER SECONDARY (+2)
            </span>
            <span className="stack-tenure-tag">Mar 2018 – Mar 2019</span>
          </div>
          <div className="stack-card-body">
            <div className="stack-role-title">Higher Secondary Certificate (+2)</div>
            <div className="stack-company-name">
              <i className="fa-solid fa-school"></i>
              <strong>Vishwas Nav Sharda Public School, Bhuna</strong>
            </div>
            <p className="stack-card-desc">
              Completed Higher Secondary Certificate (+2) in 2019 with foundational curriculum in sciences and
              mathematics.
            </p>
            <div className="stack-tech-badges">
              <span>Mathematics</span>
              <span>Sciences</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

