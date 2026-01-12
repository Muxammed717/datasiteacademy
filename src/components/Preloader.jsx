import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setLoading(false), 800); // Wait for fade out animation
        }, 2200);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className={`preloader-wrapper ${fadeOut ? 'fade-out' : ''}`}>
            <div className="preloader-content">
                <div className="logo-pulse-container">
                    <img src="/datasite-logo.png" alt="DataSite Academy" className="preloader-logo" />
                    <div className="logo-glow"></div>
                </div>
                <div className="loading-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="preloader-bg-decor">
                <div className="p-blob blob-1"></div>
                <div className="p-blob blob-2"></div>
            </div>
        </div>
    );
};

export default Preloader;
