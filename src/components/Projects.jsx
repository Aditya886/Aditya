import React, { useEffect, useRef } from 'react';

export default function Projects() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    let wrapperTop = 0;
    let wrapperHeight = 0;
    let maxTranslate = 0;

    const measure = () => {
      if (!wrapperRef.current || !trackRef.current) return;
      wrapperTop = wrapperRef.current.offsetTop;
      wrapperHeight = wrapperRef.current.offsetHeight;
      const containerWidth = trackRef.current.parentElement.clientWidth;
      maxTranslate = Math.max(0, trackRef.current.scrollWidth - containerWidth + 60);
    };

    const updateTrack = () => {
      if (!wrapperRef.current || !trackRef.current) {
        ticking = false;
        return;
      }

      if (window.innerWidth <= 768) {
        trackRef.current.style.transform = 'none';
        ticking = false;
        return;
      }

      const windowH = window.innerHeight;
      const maxScroll = wrapperHeight - windowH;
      const scrollY = window.scrollY;

      // If user is far above (e.g. Hero, About, Skills), ensure track is at 0 and skip calculations
      if (scrollY < wrapperTop - windowH) {
        if (trackRef.current.style.transform !== 'translateX(0px)') {
          trackRef.current.style.transform = 'translateX(0px)';
        }
        ticking = false;
        return;
      }

      if (maxScroll <= 0) {
        ticking = false;
        return;
      }

      const scrolled = scrollY - wrapperTop;
      const progress = Math.min(Math.max(scrolled / maxScroll, 0), 1);
      trackRef.current.style.transform = `translateX(-${progress * maxTranslate}px)`;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateTrack);
        ticking = true;
      }
    };

    measure();
    updateTrack();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => {
      measure();
      handleScroll();
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="projects-scroll-wrapper" id="page4" ref={wrapperRef}>
      <div className="projects-sticky-container">
        <div className="projects-header-area">
          <div className="projects-title-container">
            <h2>PROJECTS & TOOLS</h2>
          </div>
          <div className="scroll-hint">
            <i className="fa-solid fa-arrow-right"></i> Scroll down to explore projects
          </div>
        </div>

        <div className="projects-track" id="projectsTrack" ref={trackRef}>
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-card-top">
              <span className="project-num">01</span>
              <span className="project-badge"><i className="fa-solid fa-brain"></i> AI & Wellness</span>
            </div>
            <h3 className="project-title">Galinia – AI Meditation & Prayer</h3>
            <div className="project-meta">
              <div className="project-duration"><i className="fa-regular fa-calendar"></i> October 2025 – May 2026</div>
              <div className="project-company"><i className="fa-solid fa-building"></i> In-House Product (Delaine)</div>
            </div>
            <p className="project-desc">
              Next-generation mental health platform powered by Google Gemini and generative AI. Features real-time voice-driven prayers, adaptive meditation journeys, customized mood-tracker analytics, and localized content delivery.
            </p>
            <div className="project-tech-stack">
              <span className="tech-tag">React Native</span>
              <span className="tech-tag">Gemini API</span>
              <span className="tech-tag">FastAPI</span>
              <span className="tech-tag">Redux Toolkit</span>
              <span className="tech-tag">WebSockets</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-card-top">
              <span className="project-num">02</span>
              <span className="project-badge"><i className="fa-solid fa-mobile-screen"></i> Social & Media</span>
            </div>
            <h3 className="project-title">Klick Shot – Status Saver & Media Suite</h3>
            <div className="project-meta">
              <div className="project-duration"><i className="fa-regular fa-calendar"></i> August 2025 – September 2025</div>
              <div className="project-company"><i className="fa-solid fa-rocket"></i> Production Release</div>
            </div>
            <p className="project-desc">
              High-utility mobile toolkit with advanced storage access framework integration. Enables ultra-fast media retrieval, video compression, WA business status backups, and multi-format batch downloading.
            </p>
            <div className="project-tech-stack">
              <span className="tech-tag">React Native</span>
              <span className="tech-tag">SAF Storage</span>
              <span className="tech-tag">FFmpeg Kit</span>
              <span className="tech-tag">Native Modules</span>
              <span className="tech-tag">AsyncStorage</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-card-top">
              <span className="project-num">03</span>
              <span className="project-badge"><i className="fa-solid fa-newspaper"></i> Live Media</span>
            </div>
            <h3 className="project-title">Global News Aggregator</h3>
            <div className="project-meta">
              <div className="project-duration"><i className="fa-regular fa-calendar"></i> June 2025 – July 2025</div>
              <div className="project-company"><i className="fa-solid fa-globe"></i> Cross-Platform App</div>
            </div>
            <p className="project-desc">
              Curated news aggregation ecosystem delivering instant breaking alerts, offline article caching, category-filtered reading streams, and smooth gesture transitions.
            </p>
            <div className="project-tech-stack">
              <span className="tech-tag">React Native</span>
              <span className="tech-tag">News API</span>
              <span className="tech-tag">SQLite</span>
              <span className="tech-tag">Firebase Cloud Messaging</span>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card">
            <div className="project-card-top">
              <span className="project-num">04</span>
              <span className="project-badge"><i className="fa-solid fa-graduation-cap"></i> EdTech</span>
            </div>
            <h3 className="project-title">Kodu App – Next-Gen Learning</h3>
            <div className="project-meta">
              <div className="project-duration"><i className="fa-regular fa-calendar"></i> January 2024 – June 2024</div>
              <div className="project-company"><i className="fa-solid fa-building"></i> Kodu / Dhurina</div>
            </div>
            <p className="project-desc">
              Full-scale education app powering interactive video learning, real-time mock test simulations, progress reports, secure payments, and student community discussions for 100K+ learners.
            </p>
            <div className="project-tech-stack">
              <span className="tech-tag">React Native</span>
              <span className="tech-tag">Razorpay</span>
              <span className="tech-tag">Video SDK</span>
              <span className="tech-tag">Node.js API</span>
              <span className="tech-tag">MongoDB</span>
            </div>
          </div>

          {/* Project 5 */}
          <div className="project-card">
            <div className="project-card-top">
              <span className="project-num">05</span>
              <span className="project-badge"><i className="fa-solid fa-film"></i> Entertainment</span>
            </div>
            <h3 className="project-title">CineVerse – Movie Discovery & Reviews</h3>
            <div className="project-meta">
              <div className="project-duration"><i className="fa-regular fa-calendar"></i> March 2024 – April 2024</div>
              <div className="project-company"><i className="fa-solid fa-laptop-code"></i> Mobile Portfolio</div>
            </div>
            <p className="project-desc">
              Dynamic movie and TV show exploration app built with TMDB API. Includes trailer playback, cast details, watchlists, genre filters, and rating trends with micro-interactions.
            </p>
            <div className="project-tech-stack">
              <span className="tech-tag">React Native</span>
              <span className="tech-tag">TMDB API</span>
              <span className="tech-tag">React Navigation 6</span>
              <span className="tech-tag">Context API</span>
            </div>
          </div>

          {/* Project 6 */}
          <div className="project-card">
            <div className="project-card-top">
              <span className="project-num">06</span>
              <span className="project-badge"><i className="fa-solid fa-cart-shopping"></i> E-Commerce</span>
            </div>
            <h3 className="project-title">ShopWave – Modern Mobile Store</h3>
            <div className="project-meta">
              <div className="project-duration"><i className="fa-regular fa-calendar"></i> November 2023 – December 2023</div>
              <div className="project-company"><i className="fa-solid fa-store"></i> Full Stack App</div>
            </div>
            <p className="project-desc">
              End-to-end mobile retail platform featuring animated cart interactions, instant search with auto-complete, secure Stripe checkout, and automated order tracking.
            </p>
            <div className="project-tech-stack">
              <span className="tech-tag">React Native</span>
              <span className="tech-tag">Stripe SDK</span>
              <span className="tech-tag">Firebase Auth</span>
              <span className="tech-tag">Cloud Firestore</span>
            </div>
          </div>

          {/* Project 7: More Apps Coming Soon Card */}
          <div className="project-card more-apps-card">
            <div className="project-card-top">
              <span className="project-num">07+</span>
              <span className="project-badge coming-soon-badge"><i className="fa-solid fa-sparkles"></i> In Active Development</span>
            </div>
            <div className="more-apps-visual-icon">
              <i className="fa-solid fa-rocket-launch"></i>
            </div>
            <h3 className="project-title">More Apps Coming Soon!</h3>
            <div className="project-meta">
              <div className="project-duration"><i className="fa-solid fa-code-commit"></i> Currently in Engineering & Testing</div>
              <div className="project-company"><i className="fa-solid fa-layer-group"></i> Multiple Active Pipelines</div>
            </div>
            <p className="project-desc">
              There are several more exciting production mobile applications and tools we are actively working on! As soon as they complete rigorous quality assurance and security testing, we will add them here. Stay tuned!
            </p>
            <div className="project-tech-stack">
              <span className="tech-tag">React Native</span>
              <span className="tech-tag">Flutter</span>
              <span className="tech-tag">AI Integration</span>
              <span className="tech-tag">Cloud Backends</span>
              <span className="tech-tag">Edge Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
