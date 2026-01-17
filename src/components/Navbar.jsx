import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'; // Ikonkalar
import { useLanguage } from '../context/LanguageContext'; // Tilni boshqarish
import { useTheme } from '../context/ThemeContext'; // Mavzuni (qora/oq) boshqarish
import './Navbar.css';

// Bayroq rasmlarini chaqirib olamiz
import flagUz from '../assets/flag-uz.png';
import flagRu from '../assets/flag-ru.png';
import flagEn from '../assets/flag-en.png';

// Soat komponenti (Tepadagi vaqtni ko'rsatish uchun)
const WorldClock = ({ language }) => {
  const [time, setTime] = useState(new Date());

  // Har bir soniyada vaqtni yangilab turish
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Tanlangan tilga qarab vaqt zonasini aniqlash
  const getTimeZone = (lang) => {
    if (lang === 'uz') return 'Asia/Tashkent';
    if (lang === 'ru') return 'Europe/Moscow';
    return 'Europe/London';
  };

  // Vaqtni chiroyli ko'rinishga keltirish (00:00:00)
  const formattedTime = new Intl.DateTimeFormat('en-GB', {
    timeZone: getTimeZone(language),
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(time);

  return (
    <div className="world-clock">
      <span className="clock-time">{formattedTime}</span>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobil menyu ochiq/yopiqligi
  const [langOpen, setLangOpen] = useState(false); // Til menyusi ochiq/yopiqligi

  const { t, language, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  // Menyu ochish/yopish funksiyasi
  const toggleMenu = () => setIsOpen(!isOpen);

  // Tilning qisqa nomini olish (UZ, RU, EN)
  const getLangShort = (lang) => lang.toUpperCase();

  // Til menyusidan tashqariga bossa, menyuni yopish
  const langMenuRef = React.useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Sayt Logotipi */}
        <Link to="/" className="logo-container" onClick={() => setIsOpen(false)}>
          <img
            src={theme === 'dark' ? "/datasite-darkmode.png" : "/datasite-logo.png"}
            alt="Logo"
            className="logo-img"
          />
        </Link>

        {/* Soat qismi */}
        <div className="clock-wrapper">
          <WorldClock language={language} />
        </div>

        {/* O'ng tarafdagi boshqaruv tugmalari */}
        <div className="nav-controls-wrapper">
          <div className="mobile-visible-extras">

            {/* Til tanlash menyusi */}
            <div className="lang-menu-container" ref={langMenuRef}>
              <button className="lang-main-btn" onClick={() => setLangOpen(!langOpen)}>
                <img src={language === 'uz' ? flagUz : language === 'ru' ? flagRu : flagEn} alt="" className="lang-flag-mini" />
                <span>{getLangShort(language)}</span>
                <span className={`arrow-icon ${langOpen ? 'up' : 'down'}`}>▾</span>
              </button>

              <div className={`lang-options-3row ${langOpen ? 'open' : ''}`}>
                <div className={`lang-row-item ${language === 'uz' ? 'active' : ''}`} onClick={() => { changeLanguage('uz'); setLangOpen(false); }}>
                  <img src={flagUz} alt="" /> Uzbek
                </div>
                <div className={`lang-row-item ${language === 'ru' ? 'active' : ''}`} onClick={() => { changeLanguage('ru'); setLangOpen(false); }}>
                  <img src={flagRu} alt="" /> Русский
                </div>
                <div className={`lang-row-item ${language === 'en' ? 'active' : ''}`} onClick={() => { changeLanguage('en'); setLangOpen(false); }}>
                  <img src={flagEn} alt="" /> English
                </div>
              </div>
            </div>

            {/* Qora/Oq rejim tugmasi */}
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          </div>

          {/* Mobil rejim uchun "Burger" menyu */}
          <div className="mobile-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Asosiy Menyu linklari */}
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>{t.nav.home}</Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className="nav-link" onClick={toggleMenu}>{t.nav.courses}</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={toggleMenu}>{t.nav.about}</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>{t.nav.contact}</Link>
          </li>
          <li className="nav-item">
            <Link to="/news" className="nav-link" onClick={toggleMenu}>{t.nav.news}</Link>
          </li>
          {/* Ro'yxatdan o'tish tugmasi */}
          <li className="nav-item">
            <Link to="/enrollment" className="btn btn-primary nav-btn" onClick={toggleMenu}>
              {t.nav.enroll}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
