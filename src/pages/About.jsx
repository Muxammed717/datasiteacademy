import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaChevronLeft, FaChevronRight, FaBox, FaHandsHelping, FaChartLine, FaGlobe, FaMobileAlt, FaSearch, FaBullhorn, FaPenNib } from 'react-icons/fa';
import './About.css';

import compass from '../assets/partners/compass.png';
import podium from '../assets/partners/podium.png';
import gross from '../assets/partners/gross.png';
import xalqbank from '../assets/partners/xalqbank.png';
import chortoq from '../assets/partners/chortoq.png';
import ipoteka from '../assets/partners/ipoteka.png';
import it from '../assets/partners/it.png';
import sitelabs from '../assets/partners/sitelabs.png';
import atlas from '../assets/partners/atlas.png';
import shipox from '../assets/partners/shipox.png';
import kpi from '../assets/partners/kpi.png';
import helpa from '../assets/partners/helpa.png';
// import your_icon from '../assets/icons/your_icon.png'; // Example of how to import your image icons

const StatCounter = ({ targetValue, duration = 2000, label = '' }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const elementRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (elementRef.current) observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime = null;
        const end = parseInt(targetValue, 10);

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            const easeOutQuad = 1 - (1 - progress) * (1 - progress);
            setDisplayValue(Math.floor(easeOutQuad * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setDisplayValue(end);
            }
        };

        requestAnimationFrame(animate);
    }, [hasStarted, targetValue, duration]);

    return (
        <div className="stat-unit" ref={elementRef}>
            <span className="stat-number">{displayValue}+</span>
            <p className="stat-label">{label}</p>
        </div>
    );
};

const About = () => {
    const { t, language } = useLanguage();

    // 1. Partners Section State & Constants
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemWidth = 360; // Adjusted for 4 logos: 320px width + 40px gap = 360px

    const partners = [
        { id: 1, img: compass, name: 'Compass Consulting' },
        { id: 2, img: podium, name: 'Podium Italia' },
        { id: 3, img: gross, name: 'Gross' },
        { id: 4, img: xalqbank, name: 'Xalq Banki' },
        { id: 5, img: chortoq, name: 'Chortoq' },
        { id: 6, img: ipoteka, name: 'Ipoteka Bank' },
        { id: 7, img: it, name: 'IT Park' },
        { id: 8, img: sitelabs, name: 'SiteLabs' },
        { id: 9, img: atlas, name: 'Atlas' },
    ];
    const displayPartners = [...partners, ...partners, ...partners];

    const partnerTitle = language === 'ru' ? 'Клиенты и партнёры' :
        language === 'en' ? 'Clients and Partners' :
            'Mijozlar va hamkorlar';

    // 2. Products Section State & Constants
    const [scrollOffset, setScrollOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isAutoAnimating, setIsAutoAnimating] = useState(false);
    const [startX, setStartX] = useState(0);
    const [lastX, setLastX] = useState(0);
    const requestRef = useRef();
    const scrollPos = useRef(0);

    const productsTitle = language === 'ru' ? 'Наши продукты' :
        language === 'en' ? 'Our Products' :
            'Bizning mahsulotlar';

    const products = [
        {
            id: 1,
            name: 'Shipox',
            description: language === 'ru' ? 'Мобильное и веб-приложение для доставки товаров для предприятий и обычных потребителей' :
                language === 'en' ? 'Mobile and web application for delivery of goods for enterprises and regular consumers' :
                    'Korxonalar va oddiy iste\'molchilar uchun tovarlarni yetkazib berish bo\'yicha mobil va veb-ilova',
            link: 'https://shipox.com/',
            Image: shipox
        },
        {
            id: 2,
            name: 'HELPA',
            description: language === 'ru' ? 'Профессиональные клининговые услуги от компании в Ташкенте' :
                language === 'en' ? 'Professional cleaning services from a company in Tashkent' :
                    'Toshkentdagi kompaniyadan professional tozalash xizmatlari',
            link: 'https://helpa.uz/',
            Image: helpa
        },
        {
            id: 3,
            name: 'KPI.COM',
            description: language === 'ru' ? 'Комплексное программное обеспечение, предназначенное для управления малым и средним бизнесом' :
                language === 'en' ? 'Comprehensive software designed for managing small and medium businesses' :
                    'Kichik va o\'rta biznesni boshqarish uchun mo\'ljallangan kompleks dasturiy ta\'minot',
            link: 'https://www.kpi.com/en/',
            Image: kpi
        }
    ];

    const cardWidth = 366.66 + 40; // width + gap
    const totalSetWidth = products.length * cardWidth;

    // 15 sets for an absolute "never-ending" feel
    const displayProducts = [...Array(15)].flatMap(() => products);

    // 3. Services Section State & Constants
    const [servicesScrollOffset, setServicesScrollOffset] = useState(0);
    const [servicesIsDragging, setServicesIsDragging] = useState(false);
    const [servicesStartX, setServicesStartX] = useState(0);
    const [servicesLastX, setServicesLastX] = useState(0);
    const servicesScrollPos = useRef(0);

    const servicesTitle = language === 'ru' ? (
        <>Bizning <span className="highlight-text">xizmatlarimiz</span></>
    ) : language === 'en' ? (
        <>Our <span className="highlight-text">services</span></>
    ) : (
        <>Bizning <span className="highlight-text">xizmatlarimiz</span></>
    );

    const services = [
        {
            id: 1,
            icon: FaSearch,
            name: 'SEO',
            subtitle: language === 'ru' ? 'Подробнее' : language === 'en' ? 'Learn more' : 'Ko\'proq o\'qish'
        },
        {
            id: 2,
            icon: FaBullhorn,
            name: 'SMM',
            subtitle: language === 'ru' ? 'Подробнее' : language === 'en' ? 'Learn more' : 'Ko\'proq o\'qish'
        },
        {
            id: 3,
            icon: FaPenNib,
            name: language === 'ru' ? 'Технические характеристики' : language === 'en' ? 'Technical features' : 'Texnik xususiyatlar',
            subtitle: language === 'ru' ? 'Подробнее' : language === 'en' ? 'Learn more' : 'Ko\'proq o\'qish'
        },
        {
            id: 4,
            icon: FaHandsHelping,
            name: language === 'ru' ? 'Брендинг' : language === 'en' ? 'Branding' : 'tomonidan',
            subtitle: language === 'ru' ? 'Подробнее' : language === 'en' ? 'Learn more' : 'Ko\'proq o\'qish'
        },
        {
            id: 5,
            icon: FaGlobe,
            name: language === 'ru' ? 'Веб-сайты' : language === 'en' ? 'Websites' : 'Veb-saytlar',
            subtitle: language === 'ru' ? 'Подробнее' : language === 'en' ? 'Learn more' : 'Ko\'proq o\'qish'
        }
    ];

    const servicesCardWidth = 240; // Circular cards size
    const servicesGap = 40;
    const servicesTotalItemWidth = servicesCardWidth + servicesGap;
    const servicesTotalWidth = services.length * servicesTotalItemWidth;
    // 15 sets for absolute seamlessness
    const displayServices = [...Array(15)].flatMap(() => services);

    const animate = () => {
        if (!isDragging && isAutoAnimating) {
            scrollPos.current -= 0.7; // Even smoother non-stop movement
            // Seamless wrap: if we've scrolled a full set, jump back one set
            if (scrollPos.current <= -totalSetWidth * 4) {
                scrollPos.current += totalSetWidth;
            }
            setScrollOffset(scrollPos.current);
        }
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        // Animation loop disabled - slider is now fully manual
        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, []);

    const handleDragStart = (e) => {
        setIsDragging(true);
        setIsAutoAnimating(false);
        const x = e.pageX || e.touches?.[0].pageX;

        // RE-CENTER before starting drag if drifted far from center (sets 7-8)
        const current = scrollPos.current;
        if (current < -totalSetWidth * 10 || current > -totalSetWidth * 4) {
            const normalized = ((current % totalSetWidth) - totalSetWidth);
            scrollPos.current = normalized - totalSetWidth * 6;
            setScrollOffset(scrollPos.current);
        }

        setStartX(x);
        setLastX(scrollPos.current);
    };

    const handleDragMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX || e.touches?.[0].pageX;
        const walk = (x - startX);
        let newPos = lastX + walk;

        // Real-time wrap while dragging to prevent gaps (15 sets buffer)
        if (newPos > -totalSetWidth * 2) newPos -= totalSetWidth * 3;
        if (newPos < -totalSetWidth * 12) newPos += totalSetWidth * 3;

        scrollPos.current = newPos;
        setScrollOffset(scrollPos.current);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    const nextProduct = () => {
        setIsDragging(false);
        scrollPos.current -= cardWidth;
        setScrollOffset(scrollPos.current);
    };

    const prevProduct = () => {
        setIsDragging(false);
        scrollPos.current += cardWidth;
        setScrollOffset(scrollPos.current);
    };

    // Services slider handlers
    const handleServicesDragStart = (e) => {
        setServicesIsDragging(true);
        const x = e.pageX || e.touches?.[0].pageX;

        // RE-CENTER before starting drag if drifted far from center (sets 7-8)
        const current = servicesScrollPos.current;
        if (current < -servicesTotalWidth * 10 || current > -servicesTotalWidth * 4) {
            const normalized = ((current % servicesTotalWidth) - servicesTotalWidth);
            servicesScrollPos.current = normalized - servicesTotalWidth * 6;
            setServicesScrollOffset(servicesScrollPos.current);
        }

        setServicesStartX(x);
        setServicesLastX(servicesScrollPos.current);
    };

    const handleServicesDragMove = (e) => {
        if (!servicesIsDragging) return;
        const x = e.pageX || e.touches?.[0].pageX;
        const walk = (x - servicesStartX);
        let newPos = servicesLastX + walk;

        // Real-time wrap while dragging for infinite feel (15 sets buffer)
        if (newPos > -servicesTotalWidth * 2) newPos -= servicesTotalWidth * 3;
        if (newPos < -servicesTotalWidth * 12) newPos += servicesTotalWidth * 3;

        servicesScrollPos.current = newPos;
        setServicesScrollOffset(servicesScrollPos.current);
    };

    const handleServicesDragEnd = () => {
        setServicesIsDragging(false);
    };

    const nextService = () => {
        setServicesIsDragging(false);
        servicesScrollPos.current -= servicesTotalItemWidth;
        setServicesScrollOffset(servicesScrollPos.current);
    };

    const prevService = () => {
        setServicesIsDragging(false);
        servicesScrollPos.current += servicesTotalItemWidth;
        setServicesScrollOffset(servicesScrollPos.current);
    };


    const nextSlide = () => {
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => prev - 1);
    };

    // Seamless loop reset logic
    useEffect(() => {
        const track = document.querySelector('.partners-track.pagination-controlled');

        // When reaching the end of the middle set (index 18 for 9 partners)
        if (currentIndex >= partners.length * 2) {
            const timer = setTimeout(() => {
                if (track) track.style.transition = 'none';
                setCurrentIndex(partners.length);
                // Force reflow/repaint before re-enabling transition
                track?.offsetHeight;
                setTimeout(() => {
                    if (track) track.style.transition = 'transform 0.4s cubic-bezier(0.2, 0, 0, 1)';
                }, 50);
            }, 400);
            return () => clearTimeout(timer);
        }

        // When reaching the start of the middle set (index partners.length - 1)
        if (currentIndex < partners.length) {
            const timer = setTimeout(() => {
                if (track) track.style.transition = 'none';
                setCurrentIndex(partners.length * 2 - 1);
                track?.offsetHeight;
                setTimeout(() => {
                    if (track) track.style.transition = 'transform 0.4s cubic-bezier(0.2, 0, 0, 1)';
                }, 50);
            }, 400);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, partners.length]);

    // Initial position
    useEffect(() => {
        setCurrentIndex(partners.length);

        // Initial position for products - start at set 7 (middle)
        scrollPos.current = -totalSetWidth * 7;
        setScrollOffset(scrollPos.current);

        // Initial position for services - start at set 7 (middle)
        servicesScrollPos.current = -servicesTotalWidth * 7;
        setServicesScrollOffset(servicesScrollPos.current);
    }, [partners.length, servicesTotalWidth, totalSetWidth]);

    const goToSiteText = language === 'ru' ? 'Перейти на сайт' :
        language === 'en' ? 'Go to site' :
            'Veb-saytga o\'ting';

    return (
        <div className="academy-about">
            {/* Mahsulotlar bo'limi */}
            <section className="products-section">
                <div className="container">
                    <h2 className="section-title centered-title">{productsTitle}</h2>

                    <div className="products-main-container">
                        <button className="nav-arrow side-prev" onClick={prevProduct} aria-label="Previous">
                            <span>←--</span>
                        </button>

                        <div className="products-viewport"
                            onMouseDown={handleDragStart}
                            onMouseMove={handleDragMove}
                            onMouseUp={handleDragEnd}
                            onMouseLeave={handleDragEnd}
                            onTouchStart={handleDragStart}
                            onTouchMove={handleDragMove}
                            onTouchEnd={handleDragEnd}>
                            <div className="products-track"
                                style={{
                                    transform: `translateX(${scrollOffset}px)`,
                                    transition: isDragging ? 'none' : 'transform 0.8s cubic-bezier(0.2, 0, 0, 1)'
                                }}>
                                {displayProducts.map((product, idx) => (
                                    <div className="product-card-item" key={`${product.id}-${idx}`}>
                                        <div className="product-card-content">
                                            <div className="product-logo-placeholder">
                                                <img src={product.Image} alt={product.name} className="product-card-img" draggable="false" />
                                            </div>
                                            <h3>{product.name}</h3>
                                            <p>{product.description}</p>
                                            <a href={product.link} target="_blank" rel="noopener noreferrer" className="product-link-btn">
                                                {goToSiteText} <FaChevronRight />
                                            </a>
                                            <div className="hover-line"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="nav-arrow side-next" onClick={nextProduct} aria-label="Next">
                            <span>--→</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Xizmatlar bo'limi */}
            <section className="services-section">
                <div className="container">
                    <h2 className="section-title centered-title">{servicesTitle}</h2>

                    <div className="services-main-container">
                        <button className="nav-arrow side-prev" onClick={prevService} aria-label="Previous">
                            <span>←</span>
                        </button>

                        <div className="services-viewport"
                            onMouseDown={handleServicesDragStart}
                            onMouseMove={handleServicesDragMove}
                            onMouseUp={handleServicesDragEnd}
                            onMouseLeave={handleServicesDragEnd}
                            onTouchStart={handleServicesDragStart}
                            onTouchMove={handleServicesDragMove}
                            onTouchEnd={handleServicesDragEnd}>
                            <div className="services-track"
                                style={{
                                    transform: `translateX(${servicesScrollOffset}px)`,
                                    transition: servicesIsDragging ? 'none' : 'transform 0.8s cubic-bezier(0.2, 0, 0, 1)'
                                }}>
                                {displayServices.map((service, idx) => {
                                    const Icon = service.icon;
                                    const isImageIcon = typeof Icon === 'string';

                                    return (
                                        <div className="service-card-item" key={`${service.id}-${idx}`}>
                                            <div className="service-card-content">
                                                <div className="service-icon-wrapper">
                                                    {isImageIcon ? (
                                                        <img src={Icon} alt={service.name} className="service-icon img-icon" />
                                                    ) : (
                                                        <Icon className="service-icon" />
                                                    )}
                                                </div>
                                            </div>
                                            <div className="service-info">
                                                <h3>{service.name}</h3>
                                                <p>{service.subtitle}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <button className="nav-arrow side-next" onClick={nextService} aria-label="Next">
                            <span>→</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Hamkorlar bo'limi */}
            <section className="partners-section">
                <div className="container">
                    <h2 className="section-title centered-title">{partnerTitle}</h2>

                    <div className="partners-main-container">
                        <button className="nav-arrow side-prev" onClick={prevSlide} aria-label="Previous">
                            <span>←--</span>
                        </button>

                        <div className="partners-wrapper extended">
                            <div className="partners-slider-viewport">
                                <div
                                    className="partners-track pagination-controlled"
                                    style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}
                                >
                                    {displayPartners.map((partner, index) => (
                                        <div className="partner-logo-item" key={`${partner.id}-${index}`}>
                                            <div className="logo-box naked">
                                                <img src={partner.img} alt={partner.name} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button className="nav-arrow side-next" onClick={nextSlide} aria-label="Next">
                            <span>--→</span>
                        </button>
                    </div>
                </div>
            </section>

            <section className="impact-stats">
                <div className="container">
                    <div className="stats-dashboard">
                        <StatCounter targetValue="350" label={t.aboutPage.stats.students} />
                        <StatCounter targetValue="15" label={t.aboutPage.stats.courses} />
                        <StatCounter targetValue="20" label={t.aboutPage.stats.mentors} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
