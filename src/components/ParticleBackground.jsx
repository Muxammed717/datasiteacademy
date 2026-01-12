import React from 'react';
import './ParticleBackground.css';

const ParticleBackground = () => {
    return (
        <div className="particle-container">
            {[...Array(20)].map((_, i) => (
                <div key={i} className={`particle p-${i + 1}`}></div>
            ))}
            <div className="wave-decor"></div>
        </div>
    );
};

export default ParticleBackground;
