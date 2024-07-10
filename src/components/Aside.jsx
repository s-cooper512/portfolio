// src/components/Aside.jsx

import React from 'react';

function Aside() {
  return (
    <aside>
      <div className='project-grid'>
      <div>
      <h3>Programming Experience</h3>
      <ul>
        <li>React</li>
        <li>Java</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Springboot</li>
        <li>JavaScript</li>
        <li>PostgreSQL</li>
      </ul>
      </div>
      <div>
        <img src="GACert.png" alt="General Assembly Programming Certificate" height="300px" width="100%"/>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
