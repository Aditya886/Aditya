import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('aditya_portfolio_theme') || 'light';
  });
  const [activeSection, setActiveSection] = useState('page1');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    localStorage.setItem('aditya_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const sectionIds = ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'];
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY + 240;
          let current = sectionIds[0];

          for (let i = 0; i < sectionIds.length; i++) {
            const el = document.getElementById(sectionIds[i]);
            if (el && scrollPos >= el.offsetTop) {
              current = sectionIds[i];
            }
          }

          if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
            current = sectionIds[sectionIds.length - 1];
          }

          setActiveSection((prev) => (prev !== current ? current : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Blogs />
        <Contact />
      </main>
      <Footer />
      <ScrollIndicator />
    </div>
  );
}
