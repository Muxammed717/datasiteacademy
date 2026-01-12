import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { coursesData } from '../data/courses';
import { useNavigate } from 'react-router-dom';
import { FaClock, FaUsers, FaStar } from 'react-icons/fa';
import './Courses.css';

const RussianLanguage = () => {
    const { t, language } = useLanguage();
    const navigate = useNavigate();

    const russianCourses = coursesData.filter(course =>
        Array.isArray(course.category) ? course.category.includes('Russ Tili') : course.category === 'Russ Tili'
    );

    const getCourseTitle = (course) => {
        if (language === 'ru') return course.titleRu || course.titleEn || course.title;
        if (language === 'en') return course.titleEn || course.title;
        return course.title;
    };

    const getCategoryLabel = (cat) => {
        const categoryMap = {
            'All': t.courses.filter.all,
            'Kompyuter savodxonligi': t.courses.filter.computerLiteracy,
            'Dasturlash': t.courses.filter.dev,
            'Individual': t.courses.filter.individual,
            'Boshqa': t.courses.filter.other,
            'Ingliz tili': t.courses.filter.english,
            'Koreys tili': t.courses.filter.korean,
            'Nemis tili': t.courses.filter.german,
            'Russ Tili': t.courses.filter.russian
        };
        return categoryMap[cat] || cat;
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
                    <h1 className="courses-title">{t.enrollment.courses.russian}</h1>
                    <p className="courses-subtitle">{t.courses.subtitle}</p>
                </div>

                <div className="courses-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '2.5rem',
                    marginTop: '3rem'
                }}>
                    {russianCourses.map(course => (
                        <div
                            key={course.id}
                            className="spotlight-card-wrap is-active"
                            style={{ position: 'relative', cursor: 'pointer' }}
                            onClick={() => navigate(`/instructor/${course.instructorSlug}`)}
                        >
                            <div className="rectangular-card-3d" style={{ transform: 'none' }}>
                                <div className="instructor-hero">
                                    <img src={course.instructorImg} alt={course.instructor} className="main-instructor-img" />
                                    <div className="card-category-tags">
                                        {(Array.isArray(course.category) ? course.category : [course.category]).map(cat => (
                                            <span key={cat} className="card-category-tag">{getCategoryLabel(cat)}</span>
                                        ))}
                                    </div>
                                    <div className="card-rating">
                                        <FaStar className="star-icon full" /> 5.0
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
                                        {course.oldPrice && <span className="old-price">{course.oldPrice}</span>}
                                        <span>{course.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RussianLanguage;
