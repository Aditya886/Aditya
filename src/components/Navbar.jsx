import React, { useState } from 'react';

export default function Navbar({ theme, toggleTheme, activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { id: 'page1', label: 'Home' },
    { id: 'page2', label: 'About Me' },
    { id: 'page3', label: 'Services' },
    { id: 'page4', label: 'Projects' },
    { id: 'page5', label: 'Blogs' },
    { id: 'page6', label: 'Testimonials' },
  ];

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDark = theme === 'dark';

  return (
    <header className={`Main ${isDark ? 'on-dark-screen' : 'on-light-screen'}`}>
      <div className="a" onClick={(e) => handleLinkClick(e, 'page1')} style={{ cursor: 'pointer' }}>
        Portfo<span className="lio">lio</span>
      </div>

      <nav className={`pill-navbar ${isDark ? 'nav-on-dark' : 'nav-on-light'}`} id="pillNavbar">
        <div className="pill-nav-inner">
          {/* Desktop Navigation Links */}
          <ul className="pill-links" id="pillNavLinks">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`pill-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="pill-actions">
            <button
              className="theme-btn"
              id="themeToggle"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              {isDark ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
            <a
              href="#page6"
              className="talk-btn"
              onClick={(e) => handleLinkClick(e, 'page6')}
            >
              Let's Talk
            </a>
            {/* Mobile Hamburger */}
            <button
              className={`pill-mob-toggle ${mobileOpen ? 'open' : ''}`}
              id="pillMobToggle"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`pill-mob-dropdown ${mobileOpen ? 'open' : ''}`} id="pillMobDropdown">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`pill-mob-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

