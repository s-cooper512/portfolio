// src/components/Footer.jsx

import React from 'react';

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: scooper@indeed.com</p>
        </div>
        <div className="footer-section">
          <h4>More Projects and Code</h4>
          <ul>
            <li><a href="#">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 My Portfolio. Some rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
