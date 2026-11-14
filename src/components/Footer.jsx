import React from 'react';

export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-top-row">
        <div className="footer-brand-title">PORTFOLIO <span>•</span> ADITYA MAHIWAL</div>
        <div className="footer-links-row">
          <a href="#page1" onClick={(e) => scrollTo(e, 'page1')}>Home</a>
          <a href="#page2" onClick={(e) => scrollTo(e, 'page2')}>About Me</a>
          <a href="#page3" onClick={(e) => scrollTo(e, 'page3')}>Services</a>
          <a href="#page4" onClick={(e) => scrollTo(e, 'page4')}>Projects</a>
          <a href="#page5" onClick={(e) => scrollTo(e, 'page5')}>Blogs</a>
          <a href="#page6" onClick={(e) => scrollTo(e, 'page6')}>Contact</a>
        </div>
      </div>
      <div className="footer-bottom-row">
        <span>© 2026 Aditya Mahiwal. Crafted with clean architecture & modern web technologies.</span>
        <a href="#page1" className="footer-back-to-top" onClick={(e) => scrollTo(e, 'page1')}>
          <span>Back to Top</span>
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    </footer>
  );
}

