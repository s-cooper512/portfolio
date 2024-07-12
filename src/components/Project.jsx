import React from 'react';
import '../App.css';

function projectTile ({img, imgAlt, projectName, projectDescription, projectLink}) {
    return (
        <div className="project-card">
            <img src={img} alt={imgAlt} />
            <h3>{projectName}</h3>
            <p>{projectDescription}</p>
            <br />
            <hr />
            <br />
            <a href={projectLink} target='_blank'>Code Link</a>
        </div>
    );
}

export default projectTile;