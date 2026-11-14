import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:adiaditya144@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section className="section-container" id="page6">
      {/* Title in red color container with black title text (outside the card) */}
      <div className="section-header-wrap">
        <div className="contact-title-container">
          <h2>GET IN TOUCH</h2>
        </div>
      </div>

      {/* Contact Container Stacks Grid (No Outer Enclosing Card) */}
      <div className="contact-grid">
        {/* STACK CARD 1: DIRECT CHANNELS & AVAILABILITY */}
        <div className="contact-stack-card">
          <div>
            <div className="contact-header">
              <span className="contact-status-pill">
                <span className="live-pulse-dot"></span> AVAILABLE FOR OPPORTUNITIES
              </span>
              <h3 className="contact-card-title">LET'S BUILD SOMETHING EXCEPTIONAL</h3>
              <p className="contact-card-desc">
                Looking for a dedicated React Native specialist to craft your next mobile app, optimize
                architecture, or explore engineering collaborations? Reach out directly through any channel!
              </p>
            </div>

            <div className="channels-list">
              {/* Email */}
              <a href="mailto:adiaditya144@gmail.com" className="channel-tile" title="Send email to Aditya">
                <div className="channel-info-group">
                  <div className="channel-icon email-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Email Address</span>
                    <span className="channel-value">adiaditya144@gmail.com</span>
                  </div>
                </div>
                <span className="channel-arrow"><i className="fa-solid fa-arrow-right"></i></span>
              </a>

              {/* Phone / WhatsApp */}
              <a href="tel:+919812531441" className="channel-tile" title="Call or WhatsApp Aditya">
                <div className="channel-info-group">
                  <div className="channel-icon phone-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Phone / WhatsApp</span>
                    <span className="channel-value">+91 98125-31441</span>
                  </div>
                </div>
                <span className="channel-arrow"><i className="fa-solid fa-arrow-right"></i></span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aditya-mahiwal-4b6907292/"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-tile"
                title="Connect on LinkedIn"
              >
                <div className="channel-info-group">
                  <div className="channel-icon linkedin-icon">
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">LinkedIn Profile</span>
                    <span className="channel-value">Aditya Mahiwal</span>
                  </div>
                </div>
                <span className="channel-arrow"><i className="fa-solid fa-arrow-right"></i></span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Aditya886"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-tile"
                title="View GitHub Repositories"
              >
                <div className="channel-info-group">
                  <div className="channel-icon github-icon">
                    <i className="fa-brands fa-github"></i>
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">GitHub Repository</span>
                    <span className="channel-value">Aditya886</span>
                  </div>
                </div>
                <span className="channel-arrow"><i className="fa-solid fa-arrow-right"></i></span>
              </a>
            </div>
          </div>

          <div className="contact-location-bar">
            <i className="fa-solid fa-location-dot"></i>
            <span>Hisar / Chandigarh, India • IST (UTC+5:30)</span>
          </div>
        </div>

        {/* STACK CARD 2: INTERACTIVE MESSAGE FORM */}
        <div className="contact-stack-card">
          <div>
            <div className="form-header">
              <span className="stack-badge red-pill">
                <i className="fa-regular fa-paper-plane"></i> Quick Message
              </span>
              <h3 className="contact-card-title" style={{ marginTop: '10px' }}>SEND ME A MESSAGE</h3>
              <p className="contact-card-desc">
                Have an idea, project, or role to discuss? Fill out the form and I'll get back to you
                promptly.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field-group">
                <label htmlFor="contactName">Your Name</label>
                <input
                  type="text"
                  id="contactName"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  required
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="contactEmail">Email Address</label>
                <input
                  type="email"
                  id="contactEmail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  required
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="contactSubject">Subject / Topic</label>
                <input
                  type="text"
                  id="contactSubject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Mobile App Project / Job Opportunity"
                  required
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="contactMessage">Message</label>
                <textarea
                  id="contactMessage"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell me about your project, idea, or questions..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                <span className="btn-text">Send Message</span>
                <span className="btn-icon-circle">
                  <i className="fa-solid fa-paper-plane"></i>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

