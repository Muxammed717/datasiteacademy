import React, { useState } from 'react';
import { FaClock, FaUsers } from 'react-icons/fa';
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
        : coursesData.filter(course => course.category === filter);

    // Auto-cycle for a fast, dynamic feel
    React.useEffect(() => {
        if (filteredCourses.length <= 1) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % filteredCourses.length);
        }, 2500);
        return () => clearInterval(timer);
    }, [filteredCourses.length]);

    const handleFilterChange = (key) => {
        setFilter(key);
        setActiveIndex(0);
    };

    const categories = [
        { key: 'All', label: t.courses.filter.all },
        { key: 'Boshlang\'ich', label: t.courses.filter.beginner },
        { key: 'Dasturlash', label: t.courses.filter.dev },
        { key: 'Individual', label: t.courses.filter.individual },
        { key: 'Boshqa', label: t.courses.filter.other },
        { key: 'Til', label: t.courses.filter.language }
    ];

    const getCategoryLabel = (category) => {
        const categoryMap = {
            'Boshlang\'ich': 'beginner',
            'Dasturlash': 'dev',
            'Individual': 'individual',
            'Boshqa': 'other',
            'Til': 'language'
        };
        return t.courses.filter[categoryMap[category]] || category;
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

    return (
        <div className="page courses-page">
            <div className="container">
                <div className="courses-header">
                    <h1 className="courses-title">{t.courses.title}</h1>
                    <p className="courses-subtitle">{t.courses.subtitle}</p>

                    <div className="filter-container">
                        {categories.map(cat => (
                            <button
                                key={cat.key}
                                className={`filter-btn ${filter === cat.key ? 'active' : 'inactive'}`}
                                onClick={() => handleFilterChange(cat.key)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="courses-spotlight-scene">
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
                                    onClick={() => navigate(`/instructor/${course.instructorSlug}`)}
                                >
                                    <div className="rectangular-card-3d">
                                        <div className="instructor-hero">
                                            <img src={course.instructorImg} alt={course.instructor} className="main-instructor-img" />
                                            <span className="card-category-tag">{getCategoryLabel(course.category)}</span>
                                        </div>
                                        <div className="card-details">
                                            <h3 className="course-name-3d">{getCourseTitle(course)}</h3>
                                            <p className="instructor-name-3d">{course.instructor}</p>
                                            <div className="card-stats-row">
                                                <span><FaClock /> {getDurationText(course.duration)}</span>
                                                <span><FaUsers /> {course.students}</span>
                                            </div>
                                            <div className="price-tag-3d">
                                                {course.oldPrice && <span className="old-price">{course.oldPrice}</span>}
                                                <span>{course.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Courses;
