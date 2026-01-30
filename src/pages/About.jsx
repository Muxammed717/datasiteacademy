import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaChevronRight, FaChartLine, FaGlobe, FaMobileAlt, FaDesktop, FaFileAlt, FaUsers, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
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
    const lastPartnersInteraction = useRef(0);

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
    const displayPartners = [...partners, ...partners, ...partners, ...partners, ...partners];

    const partnerTitle = t.aboutPage.partnerTitle;

    // 2. Products Section State & Constants
    const [scrollOffset, setScrollOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [lastX, setLastX] = useState(0);
    const scrollPos = useRef(0);
    const productsTrackRef = useRef();
    const lastProductsInteraction = useRef(0);

    const productsTitle = t.aboutPage.productsTitle;

    const products = [
        {
            id: 1,
            name: 'Shipox',
            className: 'shipox',
            description: t.aboutPage.products.shipox,
            link: 'https://shipox.com/',
            Image: shipox
        },
        {
            id: 2,
            name: 'HELPA',
            className: 'helpa',
            description: t.aboutPage.products.helpa,
            link: 'https://helpa.uz/',
            Image: helpa
        },
        {
            id: 3,
            name: 'KPI.COM',
            className: 'kpi-com',
            description: t.aboutPage.products.kpi,
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
    const servicesTrackRef = useRef();
    const lastServicesInteraction = useRef(0);

    const servicesTitle = language === 'ru' ? (
        <>Наши <span className="highlight-text">услуги</span></>
    ) : language === 'en' ? (
        <>Our <span className="highlight-text">services</span></>
    ) : (
        <>Bizning <span className="highlight-text">xizmatlarimiz</span></>
    );

    const services = [
        {
            id: 1,
            icon: FaChartLine,
            name: t.aboutPage.services.seo,
            className: 'seo',
            color: '#F94721',
            subtitle: t.aboutPage.services.learnMore
        },
        {
            id: 2,
            icon: FaUsers,
            name: t.aboutPage.services.smm,
            className: 'smm',
            color: '#134F47',
            subtitle: t.aboutPage.services.learnMore
        },
        {
            id: 6,
            icon: FaMobileAlt,
            name: t.aboutPage.services.mobile,
            className: 'mobile',
            color: '#134F47',
            subtitle: t.aboutPage.services.learnMore
        },
        {
            id: 7,
            icon: FaDesktop,
            name: t.aboutPage.services.crm,
            className: 'crm',
            color: '#2F3D34',
            subtitle: t.aboutPage.services.learnMore
        },
        {
            id: 5,
            icon: FaGlobe,
            name: t.aboutPage.services.websites,
            className: 'websites',
            color: '#E5DED4',
            subtitle: t.aboutPage.services.learnMore
        },
        {
            id: 8,
            icon: FaFileAlt,
            name: t.aboutPage.services.technical,
            className: 'technical',
            color: '#F94721',
            subtitle: t.aboutPage.services.learnMore
        }
    ];

    const servicesCardWidth = 240; // Circular cards size
    const servicesGap = 40;
    const servicesTotalItemWidth = servicesCardWidth + servicesGap;
    const servicesTotalWidth = services.length * servicesTotalItemWidth;
    // 15 sets for absolute seamlessness
    const displayServices = [...Array(15)].flatMap(() => services);


    const handleDragStart = (e) => {
        lastProductsInteraction.current = Date.now();
        setIsDragging(true);
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
        lastProductsInteraction.current = Date.now();
        const x = e.pageX || e.touches?.[0].pageX;
        const walk = (x - startX);
        let newPos = lastX + walk;

        // Real-time wrap while dragging to prevent gaps
        if (newPos > -totalSetWidth * 2) {
            newPos -= totalSetWidth * 5;
            setStartX(x);
            setLastX(newPos);
        } else if (newPos < -totalSetWidth * 12) {
            newPos += totalSetWidth * 5;
            setStartX(x);
            setLastX(newPos);
        }

        scrollPos.current = newPos;
        setScrollOffset(newPos);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };


    const nextProduct = () => {
        lastProductsInteraction.current = Date.now();
        setIsDragging(false);
        const nextPos = scrollPos.current - cardWidth;

        // If we go past set 10, snap back to middle (set 5-6)
        if (nextPos < -totalSetWidth * 10) {
            const track = productsTrackRef.current;
            if (track) track.style.transition = 'none';
            const snappedPos = nextPos + totalSetWidth * 5;
            scrollPos.current = snappedPos;
            setScrollOffset(snappedPos);
            // Re-enable transition on next frame
            requestAnimationFrame(() => {
                if (track) track.style.transition = 'transform 0.8s cubic-bezier(0.2, 0, 0, 1)';
            });
        } else {
            scrollPos.current = nextPos;
            setScrollOffset(nextPos);
        }
    };

    const prevProduct = () => {
        lastProductsInteraction.current = Date.now();
        setIsDragging(false);
        const nextPos = scrollPos.current + cardWidth;

        if (nextPos > -totalSetWidth * 3) {
            const track = productsTrackRef.current;
            if (track) track.style.transition = 'none';
            const snappedPos = nextPos - totalSetWidth * 5;
            scrollPos.current = snappedPos;
            setScrollOffset(snappedPos);
            requestAnimationFrame(() => {
                if (track) track.style.transition = 'transform 0.8s cubic-bezier(0.2, 0, 0, 1)';
            });
        } else {
            scrollPos.current = nextPos;
            setScrollOffset(nextPos);
        }
    };

    // Services slider handlers
    const handleServicesDragStart = (e) => {
        lastServicesInteraction.current = Date.now();
        setServicesIsDragging(true);
        const x = e.pageX || e.touches?.[0].pageX;

        // RE-CENTER before starting drag if drifted far from center
        const current = servicesScrollPos.current;
        if (current < -servicesTotalWidth * 10 || current > -servicesTotalWidth * 4) {
            const track = servicesTrackRef.current;
            if (track) track.style.transition = 'none';
            const normalized = ((current % servicesTotalWidth) - servicesTotalWidth);
            servicesScrollPos.current = normalized - servicesTotalWidth * 6;
            setServicesScrollOffset(servicesScrollPos.current);
            // No need to re-enable here as dragging sets transition to none anyway
        }

        setServicesStartX(x);
        setServicesLastX(servicesScrollPos.current);
    };

    const handleServicesDragMove = (e) => {
        if (!servicesIsDragging) return;
        lastServicesInteraction.current = Date.now();
        const x = e.pageX || e.touches?.[0].pageX;
        const walk = (x - servicesStartX);
        let newPos = servicesLastX + walk;

        // Real-time wrap while dragging for infinite feel
        if (newPos > -servicesTotalWidth * 2) {
            newPos -= servicesTotalWidth * 5;
            setServicesStartX(x);
            setServicesLastX(newPos);
        } else if (newPos < -servicesTotalWidth * 12) {
            newPos += servicesTotalWidth * 5;
            setServicesStartX(x);
            setServicesLastX(newPos);
        }

        servicesScrollPos.current = newPos;
        setServicesScrollOffset(newPos);
    };

    const handleServicesDragEnd = () => {
        setServicesIsDragging(false);
    };

    const nextService = () => {
        lastServicesInteraction.current = Date.now();
        setServicesIsDragging(false);
        const nextPos = servicesScrollPos.current - servicesTotalItemWidth;

        if (nextPos < -servicesTotalWidth * 10) {
            const track = servicesTrackRef.current;
            if (track) track.style.transition = 'none';
            const snappedPos = nextPos + servicesTotalWidth * 5;
            servicesScrollPos.current = snappedPos;
            setServicesScrollOffset(snappedPos);
            requestAnimationFrame(() => {
                if (track) track.style.transition = 'transform 0.8s cubic-bezier(0.2, 0, 0, 1)';
            });
        } else {
            servicesScrollPos.current = nextPos;
            setServicesScrollOffset(nextPos);
        }
    };

    const prevService = () => {
        lastServicesInteraction.current = Date.now();
        setServicesIsDragging(false);
        const nextPos = servicesScrollPos.current + servicesTotalItemWidth;

        if (nextPos > -servicesTotalWidth * 3) {
            const track = servicesTrackRef.current;
            if (track) track.style.transition = 'none';
            const snappedPos = nextPos - servicesTotalWidth * 5;
            servicesScrollPos.current = snappedPos;
            setServicesScrollOffset(snappedPos);
            requestAnimationFrame(() => {
                if (track) track.style.transition = 'transform 0.8s cubic-bezier(0.2, 0, 0, 1)';
            });
        } else {
            servicesScrollPos.current = nextPos;
            setServicesScrollOffset(nextPos);
        }
    };


    const nextSlide = () => {
        lastPartnersInteraction.current = Date.now();
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        lastPartnersInteraction.current = Date.now();
        setCurrentIndex((prev) => prev - 1);
    };

    // Seamless loop reset logic for Partners
    useEffect(() => {
        const track = document.querySelector('.partners-track.pagination-controlled');

        // Snap happens after the animation finishes (0.4s)
        if (currentIndex >= partners.length * 4) {
            const timer = setTimeout(() => {
                if (track) track.style.transition = 'none';
                setCurrentIndex(partners.length * 2);
                // Trigger reflow
                track?.offsetHeight;
                setTimeout(() => {
                    if (track) track.style.transition = 'transform 0.4s cubic-bezier(0.2, 0, 0, 1)';
                }, 20);
            }, 400);
            return () => clearTimeout(timer);
        }

        if (currentIndex < partners.length) {
            const timer = setTimeout(() => {
                if (track) track.style.transition = 'none';
                setCurrentIndex(partners.length * 3 - 1);
                track?.offsetHeight;
                setTimeout(() => {
                    if (track) track.style.transition = 'transform 0.4s cubic-bezier(0.2, 0, 0, 1)';
                }, 20);
            }, 400);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, partners.length]);

    // Initial position
    useEffect(() => {
        // Start Partners in the middle set (Set 3)
        setCurrentIndex(partners.length * 2);

        // Initial position for products - start at set 7 (middle)
        scrollPos.current = -totalSetWidth * 7;
        setScrollOffset(scrollPos.current);

        // Initial position for services - start at set 7 (middle)
        servicesScrollPos.current = -servicesTotalWidth * 7;
        setServicesScrollOffset(servicesScrollPos.current);
    }, [partners.length, servicesTotalWidth, totalSetWidth]);

    // 4. Auto-rotation for all sliders
    useEffect(() => {
        // Partners auto-rotation
        const partnersInterval = setInterval(() => {
            if (Date.now() - lastPartnersInteraction.current > 3000) {
                setCurrentIndex((prev) => prev + 1); // Use direct update to avoid triggering ref interaction again if possible
            }
        }, 3000);

        // Products auto-rotation
        const productsInterval = setInterval(() => {
            if (!isDragging && (Date.now() - lastProductsInteraction.current > 3000)) {
                // We call nextProduct but that will update the interaction time. 
                // To keep it simple, we can just use a modified version or just let it reset the wait.
                // Resetting the wait is actually good behavior.
                nextProduct();
            }
        }, 3000);

        // Services auto-rotation
        const servicesInterval = setInterval(() => {
            if (!servicesIsDragging && (Date.now() - lastServicesInteraction.current > 3000)) {
                nextService();
            }
        }, 3000);

        return () => {
            clearInterval(partnersInterval);
            clearInterval(productsInterval);
            clearInterval(servicesInterval);
        };
    }, [isDragging, servicesIsDragging]);
    // Re-subscribe when dragging state changes to ensure fresh closures

    const goToSiteText = t.aboutPage.goToSite;

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
                                ref={productsTrackRef}
                                style={{
                                    transform: `translateX(${scrollOffset}px)`,
                                    transition: isDragging ? 'none' : 'transform 0.8s cubic-bezier(0.2, 0, 0, 1)'
                                }}>
                                {displayProducts.map((product, idx) => (
                                    <div className={`product-card-item ${product.className}`} key={`${product.id}-${idx}`}>
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
                                ref={servicesTrackRef}
                                style={{
                                    transform: `translateX(${servicesScrollOffset}px)`,
                                    transition: servicesIsDragging ? 'none' : 'transform 0.8s cubic-bezier(0.2, 0, 0, 1)'
                                }}>
                                {displayServices.map((service, idx) => {
                                    const Icon = service.icon;
                                    const isImageIcon = typeof Icon === 'string';

                                    return (
                                        <div className={`service-card-item ${service.className}`} key={`${service.id}-${idx}`}>
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

            {/* Biz haqimizda bo'limi (Xarita) */}
            <section className="about-us-section">
                <div className="container">
                    <div className="about-us-map-container">
                        <div className="about-us-map">
                            <iframe
                                src="https://yandex.com/map-widget/v1/?ll=71.672557%2C40.998889&z=17&mode=search&text=DataSite+Academy+Namangan"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="DataSite Academy - Namangan"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
