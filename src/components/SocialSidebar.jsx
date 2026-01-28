import React from 'react';
import { FaTelegram, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './SocialSidebar.css';

const SocialSidebar = () => {
    const { t } = useLanguage();
    const socialLinks = t.footer.socialLinks;

    return (
        <div className="social-sidebar">
            <div className="social-sidebar-inner">
                <a
                    href={socialLinks.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-sidebar-item telegram"
                >
                    <FaTelegram />
                    <span className="social-label">Telegram</span>
                </a>
                <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-sidebar-item instagram"
                >
                    <FaInstagram />
                    <span className="social-label">Instagram</span>
                </a>
                <a
                    href={socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-sidebar-item youtube"
                >
                    <FaYoutube />
                    <span className="social-label">YouTube</span>
                </a>
            </div>
        </div>
    );
};

export default SocialSidebar;
