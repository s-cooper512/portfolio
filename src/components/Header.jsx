// src/components/Header.jsx

import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#">Stephen Cooper - Technical Apprentice Engineer</a>
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact & More</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
