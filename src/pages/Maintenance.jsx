import React from 'react';
import { FaTools } from 'react-icons/fa';

const Maintenance = () => {
    return (
        <div style={containerStyle}>
            <div style={contentStyle}>
                <div style={iconWrapper}>
                    <FaTools style={iconStyle} />
                </div>
                <h1 style={titleStyle}>Texnik ishlar olib borilmoqda</h1>
                <p style={textStyle}>
                    Saytda hozirda texnik profilaktika ishlari ketmoqda.
                    <br />
                    Tez orada qaytamiz!
                </p>
                <div style={badgeStyle}>MAINTENANCE MODE ACTIVE</div>
            </div>
        </div>
    );
};

const containerStyle = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a0a0a',
    color: '#f8fafc',
    fontFamily: "'Inter', sans-serif"
};

const contentStyle = {
    textAlign: 'center',
    padding: '2rem',
    maxWidth: '500px'
};

const iconWrapper = {
    width: '80px',
    height: '80px',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 2rem auto',
    border: '1px solid rgba(239, 68, 68, 0.2)'
};

const iconStyle = {
    fontSize: '2.5rem',
    color: '#ef4444'
};

const titleStyle = {
    fontSize: '2rem',
    fontWeight: 800,
    marginBottom: '1rem',
    background: 'linear-gradient(to right, #f8fafc, #94a3b8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
};

const textStyle = {
    color: '#64748b',
    lineHeight: '1.6',
    marginBottom: '2rem'
};

const badgeStyle = {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: '#1e293b',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: 700,
    color: '#ef4444',
    letterSpacing: '1px',
    border: '1px solid #334155'
};

export default Maintenance;
