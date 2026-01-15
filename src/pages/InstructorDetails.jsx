import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaAward, FaGraduationCap, FaCheckCircle, FaUserTie } from 'react-icons/fa';
import { coursesData } from '../data/courses';
import { useLanguage } from '../context/LanguageContext';

const InstructorDetails = () => {
    const { slug } = useParams();
    const { t, language } = useLanguage();
    const navigate = useNavigate();

    const instructorData = coursesData.find(c => c.instructorSlug === slug);

    if (!instructorData) {
        return (
            <div style={{ padding: '10rem 0', textAlign: 'center' }}>
                <h2>{t.courses.instructor.notFound}</h2>
                <Link to="/courses" className="btn btn-primary">{t.courses.instructor.backToCourses}</Link>
            </div>
        );
    }

    const getCourseTitle = (course) => {
        if (language === 'ru' && course.titleRu) return course.titleRu;
        if (language === 'en' && course.titleEn) return course.titleEn;
        return course.title;
    };

    const courseTitle = getCourseTitle(instructorData);

    return (
        <div style={{ backgroundColor: 'var(--bg-secondary)', minHeight: '100vh', paddingBottom: '5rem' }}>
            <div style={{ backgroundColor: 'var(--bg-main)', borderBottom: '1px solid var(--border)', padding: '1rem 0', position: 'sticky', top: '80px', zIndex: 100 }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button
                        onClick={() => navigate(-1)}
                        style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontWeight: 600, cursor: 'pointer' }}
                    >
                        <FaArrowLeft /> {t.courses.instructor.back}
                    </button>
                </div>
            </div>

            <div className="container" style={{ marginTop: '3rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 992 ? 'minmax(300px, 400px) 1fr' : '1fr', gap: '3rem' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{
                            backgroundColor: 'var(--bg-main)',
                            borderRadius: '2rem',
                            padding: '2.5rem',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            textAlign: 'center',
                            border: '1px solid var(--border)'
                        }}>
                            <div style={{
                                width: '180px',
                                height: '180px',
                                borderRadius: '50%',
                                margin: '0 auto 1.5rem',
                                overflow: 'hidden',
                                border: '4px solid var(--primary)',
                                boxShadow: '0 8px 16px rgba(21, 50, 44, 0.15)'
                            }}>
                                <img
                                    src={instructorData.instructorImg || `https://ui-avatars.com/api/?name=${encodeURIComponent(instructorData.instructor)}&background=15322c&color=fff&bold=true&size=200`}
                                    alt={instructorData.instructor}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <h1 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                                {instructorData.instructor}
                            </h1>                        </div>

                        <div style={{
                            backgroundColor: 'var(--bg-main)',
                            borderRadius: '1.5rem',
                            padding: '2rem',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            border: '1px solid var(--border)'
                        }}>
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                                <FaGraduationCap style={{ color: 'var(--primary)' }} /> {t.courses.instructor.education}
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                {instructorData.instructorEdu[language]}
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <section style={{
                            backgroundColor: 'var(--bg-main)',
                            borderRadius: '2rem',
                            padding: '3rem',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            border: '1px solid var(--border)'
                        }}>
                            <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '1.5rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <FaUserTie style={{ color: 'var(--primary)' }} /> {t.courses.instructor.about}
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>
                                {instructorData.instructorBio[language]}
                            </p>
                        </section>

                        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 640 ? '1fr 1fr' : '1fr', gap: '2rem' }}>
                            <section style={{
                                backgroundColor: 'var(--bg-main)',
                                borderRadius: '1.5rem',
                                padding: '2.5rem',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                border: '1px solid var(--border)'
                            }}>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <FaCheckCircle style={{ color: '#10b981' }} /> {t.courses.instructor.skills}
                                </h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    {instructorData.instructorSkills[language].map((skill, idx) => (
                                        <span key={idx} style={{
                                            backgroundColor: 'var(--bg-secondary)',
                                            color: 'var(--text-secondary)',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '2rem',
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            border: '1px solid var(--border)'
                                        }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </section>                            <section style={{
                                backgroundColor: 'var(--bg-main)',
                                borderRadius: '1.5rem',
                                padding: '2.5rem',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                border: '1px solid var(--border)'
                            }}>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <FaAward style={{ color: '#f59e0b' }} /> {t.courses.instructor.achievements}
                                </h3>
                                <div style={{
                                    padding: '1rem',
                                    borderLeft: '4px solid #f59e0b',
                                    backgroundColor: 'var(--bg-secondary)',
                                    borderRadius: '0 1rem 1rem 0'
                                }}>
                                    <p style={{ margin: 0, fontWeight: 700, color: '#f59e0b' }}>{instructorData.instructorAchieve[language]}</p>
                                </div>
                            </section>
                        </div>

                        <section style={{
                            backgroundColor: 'var(--bg-main)',
                            borderRadius: '2rem',
                            padding: '2.5rem',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            border: '1px solid var(--border)'
                        }}>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.5rem' }}>{t.courses.instructor.courses}</h3>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                padding: '1.5rem',
                                borderRadius: '1.5rem',
                                border: '1px solid var(--border)',
                                textDecoration: 'none',
                                color: 'inherit'
                            }}>
                                <img src={instructorData.image} style={{ width: '120px', height: '80px', borderRadius: '1rem', objectFit: 'cover' }} alt={courseTitle} />
                                <div>
                                    <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{courseTitle}</h4>
                                    <p style={{ margin: 0, color: 'var(--primary)', fontWeight: 700 }}>{instructorData.price}</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorDetails;
