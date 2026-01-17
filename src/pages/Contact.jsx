import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa';
import './Contact.css';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();

    // 1. Forma ma'lumotlarini saqlash uchun (Ism, Tel, Xabar)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    // 2. Yuborilayotgan holat va bildirishnomalar (Notification)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState({ show: false, type: 'success', message: '' });

    // Bildirishnomani 5 soniyadan keyin avtomatik yopish
    useEffect(() => {
        if (notification.show) {
            const timer = setTimeout(() => {
                setNotification(prev => ({ ...prev, show: false }));
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [notification.show]);

    // Telefon raqamini +998 (90) 123-45-67 formatiga keltirish
    const formatPhoneNumber = (value) => {
        if (!value) return value;
        const phoneNumber = value.replace(/\D/g, ''); // Faqat raqamlarni qoldirish
        let numbers = phoneNumber.startsWith('998') ? phoneNumber.slice(3) : phoneNumber;
        numbers = numbers.slice(0, 9); // Maksimal 9 ta raqam

        let formatted = '+998';
        if (numbers.length > 0) formatted += ' (' + numbers.slice(0, 2);
        if (numbers.length > 2) formatted += ') ' + numbers.slice(2, 5);
        if (numbers.length > 5) formatted += '-' + numbers.slice(5, 7);
        if (numbers.length > 7) formatted += '-' + numbers.slice(7, 9);
        return formatted;
    };

    // Input o'zgarganda ishlaydigan funksiya
    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === 'phone') {
            value = formatPhoneNumber(value);
        }
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Telegram Botga xabar yuborish funksiyasi
    const sendTelegramMessage = async (message) => {
        const botToken = '7416673711:AAHQEjteI2JFR8i0WwFQpZxj8czl7s5yaW8';
        const chatId = '8401035681';
        try {
            await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' })
            });
        } catch (err) {
            console.error('Xatolik:', err);
            throw err;
        }
    };

    // Forma "Yuborish" bosilganda
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Xabar matnini tayyorlaymiz
        const telegramMessage = `
<b>Yangi xabar (Aloqa sahifasidan)!</b>
<b>Ism:</b> ${formData.name}
<b>Tel:</b> ${formData.phone}
<b>Xabar:</b> ${formData.message}
        `;

        try {
            await sendTelegramMessage(telegramMessage);
            setNotification({
                show: true,
                type: 'success',
                message: t.contact.notifications.success
            });
            setFormData({ name: '', phone: '', message: '' }); // Formani tozalash
        } catch (error) {
            setNotification({
                show: true,
                type: 'error',
                message: t.contact.notifications.error
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page">
            {/* Bildirishnoma (Toast) */}
            {notification.show && (
                <div className="toast-notification" style={{ backgroundColor: notification.type === 'success' ? '#10b981' : '#ef4444' }}>
                    {notification.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                    <span>{notification.message}</span>
                    <button onClick={() => setNotification({ ...notification, show: false })} className="toast-close"><FaTimes /></button>
                </div>
            )}

            <h1 className="page-title">{t.contact.title}</h1>

            <div className="contact-grid">
                {/* Chap taraf: Ma'lumotlar paneli */}
                <div className="contact-info-panel">
                    <h2 className="contact-panel-title">{t.footer.contactInfo}</h2>
                    <div className="info-list">
                        <InfoItem icon={<FaPhone />} label={t.contact.labels.phone} value={t.footer.phone} />
                        <InfoItem icon={<FaEnvelope />} label={t.contact.labels.email} value={t.footer.email} />
                        <InfoItem icon={<FaMapMarkerAlt />} label={t.contact.labels.office} value={t.footer.address} />
                    </div>
                </div>

                {/* O'ng taraf: Xabar yuborish formasi */}
                <div className="contact-form-panel">
                    <h2 className="contact-panel-title">{t.contact.labels.send}</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <FormInput label={t.contact.labels.name} name="name" value={formData.name} onChange={handleChange} required />
                        <FormInput label={t.contact.labels.phone} name="phone" value={formData.phone} onChange={handleChange} required type="tel" placeholder="+998 (90) 123-45-67" />

                        <div className="input-group">
                            <label className="input-label">{t.contact.labels.message}</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="form-input" style={{ resize: 'vertical' }} />
                        </div>

                        <button type="submit" disabled={isSubmitting} className="submit-btn">
                            {isSubmitting ? '...' : <><FaPaperPlane /> {t.contact.labels.send}</>}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

// Kichik yordamchi komponentlar (InfoItem va FormInput)
const InfoItem = ({ icon, label, value }) => (
    <div className="info-item">
        <div className="icon-box">{icon}</div>
        <div className="info-content">
            <h3>{label}</h3>
            <p>{value}</p>
        </div>
    </div>
);

const FormInput = ({ label, ...props }) => (
    <div className="input-group">
        <label className="input-label">{label}</label>
        <input {...props} className="form-input" />
    </div>
);

export default Contact;