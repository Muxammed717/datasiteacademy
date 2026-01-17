import React, { useState } from 'react';
import { FaClock, FaUsers, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { coursesData } from '../data/courses';
import { useNavigate } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
    const { t, language } = useLanguage();
    const navigate = useNavigate();
    const [filter, setFilter] = useState('All');
    const [activeIndex, setActiveIndex] = useState(0);

    const filteredCourses = filter === 'All'
        ? coursesData
        : coursesData.filter(course => Array.isArray(course.category) ? course.category.includes(filter) : course.category === filter);

    const [isPaused, setIsPaused] = useState(false);

    // Auto-cycle for a fast, dynamic feel
    React.useEffect(() => {
        if (filteredCourses.length <= 1 || isPaused) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % filteredCourses.length);
        }, 2500);
        return () => clearInterval(timer);
    }, [filteredCourses.length, isPaused]);

    const handleFilterChange = (key) => {
        setFilter(key);
        setActiveIndex(0);
    };

    // Dynamically get unique categories from data
    const dynamicCategories = [
        'All',
        ...new Set(coursesData.flatMap(course => course.category || []))
    ];

    const getCategoryLabel = (cat) => {
        const categoryMap = {
            'All': t.courses.filter.all,
            'Kompyuter savodxonligi': t.courses.filter.computerLiteracy,
            'Dasturlash': t.courses.filter.dev,
            'Backend': t.courses.filter.backend,
            'Individual': t.courses.filter.individual,
            'Buxgalteriya': t.courses.filter.accounting,
            'Ingliz tili': t.courses.filter.english,
            'Koreys tili': t.courses.filter.korean,
            'Nemis tili': t.courses.filter.german,
            'Russ Tili': t.courses.filter.russian
        };

        return categoryMap[cat] || cat;
    };

    const getCourseTitle = (course) => {
        if (language === 'ru') return course.titleRu || course.titleEn || course.title;
        if (language === 'en') return course.titleEn || course.title;
        return course.title;
    };

    const getDurationText = (duration) => {
        if (language === 'en') return duration.replace('Oy', 'Months');
        if (language === 'ru') return duration.replace('Oy', 'Мес.');
        return duration;
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<FaStar key={i} className="star-icon full" />);
            } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
                stars.push(<FaStarHalfAlt key={i} className="star-icon half" />);
            } else {
                stars.push(<FaRegStar key={i} className="star-icon empty" />);
            }
        }
        return stars;
    };

    return (
        <div className="page courses-page">
            <div className="container">
                <div className="courses-header">
                    <h1 className="courses-title">{t.courses.title}</h1>
                    <p className="courses-subtitle">{t.courses.subtitle}</p>

                    <div className="courses-main-layout">
                        <div className="filter-sidebar left-sidebar">
                            {dynamicCategories.slice(0, Math.ceil(dynamicCategories.length / 2)).map(catKey => (
                                <button
                                    key={catKey}
                                    className={`filter-btn ${filter === catKey ? 'active' : 'inactive'}`}
                                    onClick={() => handleFilterChange(catKey)}
                                >
                                    {getCategoryLabel(catKey)}
                                </button>
                            ))}
                        </div>

                        <div
                            className="courses-spotlight-scene"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <div className="spotlight-slider">
                                {filteredCourses.map((course, index) => {
                                    const isActive = index === activeIndex;
                                    const isPrev = filteredCourses.length > 1 && (index === (activeIndex - 1 + filteredCourses.length) % filteredCourses.length);
                                    const isNext = filteredCourses.length > 1 && (index === (activeIndex + 1) % filteredCourses.length);

                                    let positionClass = 'is-hidden';
                                    if (isActive) {
                                        positionClass = 'is-active';
                                    } else if (isPrev) {
                                        positionClass = 'is-prev';
                                    } else if (isNext) {
                                        positionClass = 'is-next';
                                    }

                                    return (
                                        <div
                                            key={course.id}
                                            className={`spotlight-card-wrap ${positionClass}`}
                                            onClick={(e) => {
                                                if (isActive) {
                                                    navigate(`/instructor/${course.instructorSlug}`);
                                                } else {
                                                    e.preventDefault();
                                                    setActiveIndex(index);
                                                }
                                            }}
                                        >
                                            <div className="rectangular-card-3d">
                                                <div className="instructor-hero">
                                                    <img src={course.instructorImg} alt={course.instructor} className="main-instructor-img" />
                                                    <div className="card-category-tags">
                                                        {(Array.isArray(course.category) ? course.category : [course.category]).map(cat => (
                                                            <span key={cat} className="card-category-tag">{getCategoryLabel(cat)}</span>
                                                        ))}
                                                    </div>
                                                    <div className="card-rating">
                                                        {renderStars(course.rating || 5.0)}
                                                    </div>
                                                </div>
                                                <div className="card-details">
                                                    <h3 className="course-name-3d">{getCourseTitle(course)}</h3>
                                                    <p className="instructor-name-3d">{course.instructor}</p>
                                                    <div className="card-stats-row">
                                                        <span><FaClock /> {getDurationText(course.duration)}</span>
                                                        <span><FaUsers /> {course.students}</span>
                                                    </div>
                                                    <div className="price-tag-3d">
                                                        <div className="price-info">
                                                            {course.oldPrice && <span className="old-price">{course.oldPrice}</span>}
                                                            <span className="current-price">{course.price}</span>
                                                        </div>
                                                        <span className="view-detail-btn">{t.courses.viewDetails || 'Batafsil'}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="filter-sidebar right-sidebar">
                            {dynamicCategories.slice(Math.ceil(dynamicCategories.length / 2)).map(catKey => (
                                <button
                                    key={catKey}
                                    className={`filter-btn ${filter === catKey ? 'active' : 'inactive'}`}
                                    onClick={() => handleFilterChange(catKey)}
                                >
                                    {getCategoryLabel(catKey)}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Courses;
