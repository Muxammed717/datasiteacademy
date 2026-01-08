import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaPlay, FaPause } from 'react-icons/fa';

import './News.css';

const NewsCard = ({ item, language, isPlaying, onPlay }) => {
    const videoRef = React.useRef(null);

    React.useEffect(() => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.play().catch(e => console.log("Autoplay prevented", e));
        } else {
            videoRef.current.pause();
        }
    }, [isPlaying]);

    const togglePlay = (e) => {
        if (!videoRef.current) return;
        e.stopPropagation();

        if (isPlaying) {
            onPlay(null);
        } else {
            onPlay(item.id);
        }
    };

    return (
        <div className={`news-card-marquee ${item.width || ''} ${item.span || ''}`} onClick={item.type === 'video' ? togglePlay : undefined}>
            {item.type === 'video' ? (
                <div className={`media-wrapper video-wrapper ${isPlaying ? 'playing' : ''}`}>
                    <video
                        ref={videoRef}
                        src={item.src}
                        poster={item.thumbnail}
                        playsInline
                        loop
                    />
                    <div className="play-btn-marquee">
                        {isPlaying ? <FaPause /> : <FaPlay style={{ marginLeft: '4px' }} />}
                    </div>
                    <div className="card-overlay-marquee">
                        <div className="card-content">
                            {item.title[language] && <h3>{item.title[language]}</h3>}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="media-wrapper image-wrapper">
                    <img src={item.src} alt={item.title[language]} />
                    <div className="card-overlay-marquee">
                        <div className="card-content">
                            {item.title[language] && <h3>{item.title[language]}</h3>}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const News = () => {
    const { t, language } = useLanguage();
    const [playingVideoId, setPlayingVideoId] = useState(null);

    // List of all items (Explicitly defined for easy editing)
    const items = [
        // 1. Katta Video (Chap taraf)
        {
            id: '1',
            type: 'video',
            span: 'span-row-2',
            src: '/news/Katta Dasturchi bilan Open day.mp4',
            thumbnail: '',
            title: { uz: 'Katta Dasturchi bilan Open day', en: 'Open day with a big programmer', ru: 'Open day с большим программистом' },
            subtitle: { uz: 'Bugungi Open Day mehmoni — o‘z sohasida katta tajribaga ega, ko‘plab yosh dasturchilarga ilhom bo‘lib kelayotgan taniqli dasturchi.', en: 'Today’s Open Day guest is a well-known programmer with extensive experience who inspires many young developers.', ru: 'Сегодняшний гость нашего Open Day — известный программист с большим опытом, который вдохновляет многих молодых разработчиков.' }
        },

        // 2. Rasm (Grant)
        {
            id: '2',
            type: 'image',
            span: 'span-row-1',
            src: '/news/chess.png',
            title: { uz: 'Xar kuni ochiq Shamat/Shashka uyinlari', en: 'OPEN CHESS', ru: 'OPEN CHESS' },
            subtitle: { uz: 'Chet elga', en: 'Abroad', ru: 'За рубеж' }
        },

        // 3. Rasm (Quiz)
        {
            id: '3',
            type: 'image',
            span: 'span-row-1',
            src: '/news/footbol.png',
            title: { uz: 'xar Juma futbol uyinlari', en: 'OPEN FOOTBALL', ru: 'OPEN FOOTBALL' },
            subtitle: { uz: 'Zakovat', en: 'Intellectual', ru: 'Интеллектуальная' }
        },

        // 4. Video (O'rta)
        {
            id: '4',
            type: 'video',
            span: 'span-row-2',
            src: '/news/mock imtihon.MP4',
            thumbnail: '',
            title: { uz: 'Xar Xafta Mock Imtihoni', en: 'Weekly Mock Exam', ru: 'Еженедельный Mock-тест' },
            subtitle: { uz: 'MOCK', en: 'MOCK', ru: 'MOCK' }
        },

        // 5. Rasm (Talabalar)
        {
            id: '5',
            type: 'image',
            span: 'span-row-1',
            src: '/news/kahoot.png',
            title: { uz: 'xar Kuni ochiq Kahoot uyinlari', en: 'OPEN KAHoot', ru: 'OPEN KAHoot' },
            subtitle: { uz: 'Bizning faxrimiz', en: 'Our pride', ru: 'Наша гордость' }
        },

        // 6. Rasm (Grant)
        {
            id: '6',
            type: 'image',
            span: 'span-row-1',
            src: '/news/mafia.png',
            title: { uz: 'Xar Chorshanba Mafia uyinlari', en: 'OPEN MAFIA', ru: 'OPEN MAFIA' },
            subtitle: { uz: 'Imkoniyatlar', en: 'Opportunities', ru: 'Возможности' }
        },

        // 7. Video
        {
            id: '7',
            type: 'video',
            span: 'span-row-2',
            src: 'news/IMG_8504.MOV',
            thumbnail: '',
            title: { uz: 'Uqituvchi va uquvchilar bilan dam olish ', en: 'Interview', ru: 'Интервью' },
            subtitle: { uz: 'DAM OLISH ', en: 'INTERVIEW', ru: 'ОТДЫХ' }
        },

        // 8. Rasm (Quiz)
        {
            id: '8',
            type: 'image',
            span: 'span-row-1',
            src: '/news/session.png',
            title: { uz: 'Raqobat uyinlari', en: 'OPEN SESSION', ru: 'OPEN SESSION' },
            subtitle: { uz: 'Haftalik', en: 'Weekly', ru: 'Еженедельно' }
        },

        // 9. Rasm (Talabalar)
        {
            id: '9',
            type: 'image',
            span: 'span-row-1',
            src: '/news/x-box.png',
            title: { uz: 'X-box uyinlari', en: 'OPEN X-BOX', ru: 'OPEN X-BOX' },
            subtitle: { uz: 'Muvaffaqiyatlar', en: 'Successes', ru: 'Успехи' }
        },

        // 10. Video
        {
            id: '10',
            type: 'video',
            span: 'span-row-2',
            src: '/news/IMG_1424.MOV',
            thumbnail: '',
            title: { uz: 'Bitiruvchilar', en: 'Graduates', ru: 'Выпускники' },
            subtitle: { uz: 'Bitiruvchilar', en: 'Graduates', ru: 'Выпускники' }
        },

        // 11. Rasm (Grant)
        {
            id: '11',
            type: 'image',
            span: 'span-row-1',
            src: '/news/dasturchilar.jpg',
            title: { uz: 'Yosh Dasturchilar', en: 'Youth Programmers', ru: 'Молодые программисты' },
            subtitle: { uz: 'Mavsumiy', en: 'Seasonal', ru: 'Сезонные' }
        },

        // 12. Rasm (Quiz)
        {
            id: '12',
            type: 'image',
            span: 'span-row-1',
            src: '/news/team.jpg',
            title: { uz: 'Bizning Jamoa', en: 'Our Team', ru: 'Наша команда' },
            subtitle: { uz: 'Yutuqli o\'yinlar', en: 'Prize games', ru: 'Игры с призами' }
        },

        // 13. Video (Oxirgi Katta)
        {
            id: '13',
            type: 'video',
            span: 'span-row-2',
            src: '/news/video_2026-01-08_15-28-45.mp4',
            thumbnail: '',
            title: { uz: 'Yosh uquvchimiz katta Natijalarga erishdi', en: 'Youth programmer', ru: 'Молодой программист' },
            subtitle: { uz: 'Yosh Dasturchi', en: 'Youth Programmer', ru: 'Молодой программист' }
        },

    ];

    // Drag to Scroll Logic
    const sliderRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDown(true);
        sliderRef.current.classList.add('active');
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
        if (sliderRef.current) {
            sliderRef.current.classList.remove('active');
        }
    };

    const handleMouseUp = () => {
        setIsDown(false);
        if (sliderRef.current) {
            sliderRef.current.classList.remove('active');
        }
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="news-page">
            <div className="news-container">
                <div className="news-header">
                    <h1 className="news-title">{t.nav.news}</h1>
                    <p className="news-desc">
                        {language === 'uz' ? 'Akademiyamiz hayotidagi eng so\'nggi voqealar' :
                            language === 'ru' ? 'Последние события из жизни нашей академии' :
                                'Latest events in the life of our academy'}
                    </p>
                </div>

                <div
                    className="news-marquee"
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    <div className="news-track">
                        {items.map((item) => (
                            <NewsCard
                                key={item.id}
                                item={item}
                                language={language}
                                isPlaying={item.id === playingVideoId}
                                onPlay={(id) => setPlayingVideoId(id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
