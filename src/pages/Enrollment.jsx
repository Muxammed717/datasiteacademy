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

        const formData = {
            name: e.target[0].value,
            phone: e.target[1].value,
            course: e.target[2].value,
            message: e.target[3].value
        };

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

                <div className="enrollment-form-container">
                    <form className="enrollment-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label><FaUser /> {t.enrollment.form.name}</label>
                            <input type="text" placeholder={t.enrollment.form.name} name="name" required />
                        </div>

                        <div className="input-group">
                            <label><FaPhone /> {t.enrollment.form.phone}</label>
                            <input type="tel" name="phone" placeholder="+998 90 123 45 67" required />
                        </div>

                        <div className="input-group">
                            <label><FaBookOpen /> {t.enrollment.form.course}</label>
                            <select name="course" required>
                                <option value="">{t.enrollment.form.course}</option>
                                {Array.from(new Set([
                                    ...coursesData.map(course => language === 'uz' ? course.title : (course.titleEn || course.title)),
                                    t.enrollment.courses.russian // Force add Russian Language option
                                ])).map(courseTitle => (
                                    <option key={courseTitle} value={courseTitle}>
                                        {courseTitle}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="input-group">
                            <label><FaCommentDots /> {t.enrollment.form.message}</label>
                            <textarea placeholder={t.enrollment.form.message} rows="4"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                            {loading ? 'Yuborilmoqda...' : t.enrollment.form.submit} <FaPaperPlane />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Enrollment;
