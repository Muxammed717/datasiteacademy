import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { coursesData } from '../data/courses';
import { db } from '../firebase';
import { ref, get, set } from 'firebase/database';
import { FaCheckCircle, FaUser, FaPhone, FaBookOpen, FaCommentDots, FaPaperPlane } from 'react-icons/fa';
import './Enrollment.css';

const Enrollment = () => {
    const { t, language } = useLanguage();
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        course: '',
        message: ''
    });

    const formatPhoneNumber = (value) => {
        if (!value) return value;
        const phoneNumber = value.replace(/\D/g, '');
        let numbers = phoneNumber.startsWith('998') ? phoneNumber.slice(3) : phoneNumber;
        numbers = numbers.slice(0, 9);

        let formatted = '+998';
        if (numbers.length > 0) formatted += ' (' + numbers.slice(0, 2);
        if (numbers.length > 2) formatted += ') ' + numbers.slice(2, 5);
        if (numbers.length > 5) formatted += '-' + numbers.slice(5, 7);
        if (numbers.length > 7) formatted += '-' + numbers.slice(7, 9);
        return formatted;
    };

    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === 'phone') {
            value = (value.length < 4 && formData.phone.startsWith('+998')) ? '' : formatPhoneNumber(value);
        }
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const sendTelegramMessage = async (message) => {
        const botToken = '7416673711:AAHQEjteI2JFR8i0WwFQpZxj8czl7s5yaW8';
        const chatId = '8401035681';
        try {
            await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' })
            });
        } catch (err) { console.error('Telegram Error:', err); }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const telegramMessage = `
<b>YANGI ARIZA! (ENROLLMENT)</b>
<b>👨 O'quvchi:</b> ${formData.name}
<b>📞 Tel:</b> ${formData.phone}
<b>📚 Kurs:</b> ${formData.course}
<b>💬 Xabar:</b> ${formData.message || '—'}
        `;

        try {
            await sendTelegramMessage(telegramMessage);

            const studentsRef = ref(db, 'students');
            const snapshot = await get(studentsRef);
            const students = snapshot.val() || [];
            const studentsList = Array.isArray(students) ? students : Object.values(students);

            const newStudent = {
                id: `DS${Math.floor(1000 + Math.random() * 9000)}`,
                name: formData.name,
                course: formData.course,
                status: 'unpaid',
                totalPaid: 0,
                registrationDate: new Date().toISOString().split('T')[0]
            };

            const updatedStudents = [...studentsList, newStudent];
            await set(studentsRef, updatedStudents);

            setLoading(false);
            setSubmitted(true);
        } catch (err) {
            console.error(err);
            setLoading(false);
            alert('Xatolik yuz berdi. Iltimos qaytadan urinib ko\'ring.');
        }
    };

    if (submitted) {
        return (
            <div className="enrollment-success-page">
                <div className="container">
                    <div className="success-content">
                        <div className="success-icon">
                            <FaCheckCircle />
                        </div>
                        <h1>{t.enrollment.form.success}</h1>
                        <p>{t.enrollment.subtitle}</p>
                        <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                            Yana ariza topshirish
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="enrollment-page">
            <div className="background-decor">
                <div className="decor-blob blob-1"></div>
                <div className="decor-blob blob-2"></div>
            </div>
            <div className="container">
                <div className="enrollment-header">
                    <h1 className="title-text">{t.enrollment.title}</h1>
                    <div className="accent-bar"></div>
                    <p className="subtitle-text">{t.enrollment.subtitle}</p>
                </div>

                <div className="enrollment-grid">
                    <div className="enrollment-info-panel">
                        <div className="info-card">
                            <div className="info-icon"><FaBookOpen /></div>
                            <h3>Tanlangan yo'nalish bo'yicha eng kuchli mentorlardan dars oling.</h3>
                        </div>
                        <div className="info-card">
                            <div className="info-icon"><FaCheckCircle /></div>
                            <h3>Kursni bitirgandan so'ng xalqaro standartdagi sertifikatga ega bo'ling.</h3>
                        </div>
                        <div className="info-card">
                            <div className="info-icon"><FaPaperPlane /></div>
                            <h3>Eng yaxshi bitiruvchilarga ish topishda amaliy yordam beriladi.</h3>
                        </div>
                    </div>

                    <div className="enrollment-form-container">
                        <form className="enrollment-form" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label><FaUser /> {t.enrollment.form.name}</label>
                                <input type="text" placeholder={t.enrollment.form.name} name="name" value={formData.name} onChange={handleChange} required />
                            </div>

                            <div className="input-group">
                                <label><FaPhone /> {t.enrollment.form.phone}</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+998 (90) 123-45-67" required />
                            </div>

                            <div className="input-group">
                                <label><FaBookOpen /> {t.enrollment.form.course}</label>
                                <select name="course" value={formData.course} onChange={handleChange} required>
                                    <option value="">{t.enrollment.form.course}</option>
                                    {Array.from(new Set([
                                        ...coursesData.map(course => language === 'uz' ? course.title : (course.titleEn || course.title)),
                                        t.enrollment.courses.russian
                                    ])).map(courseTitle => (
                                        <option key={courseTitle} value={courseTitle}>
                                            {courseTitle}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="input-group">
                                <label><FaCommentDots /> {t.enrollment.form.message}</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} placeholder={t.enrollment.form.message} rows="4"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                                {loading ? 'Yuborilmoqda...' : t.enrollment.form.submit} <FaPaperPlane />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enrollment;
