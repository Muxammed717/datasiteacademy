import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaPlay, FaPause } from 'react-icons/fa';
import './News.css';


const NewsCard = ({ item, language, isPlaying, onPlay }) => {
    const videoRef = useRef(null);


    React.useEffect(() => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.play().catch(e => { }); // Silently handle play interruption
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
                        muted
                        preload="metadata"
                        draggable="false"
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
                    <img
                        src={item.src}
                        alt={item.title[language]}
                        draggable="false"
                        onDragStart={(e) => e.preventDefault()}
                    />
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


    const items = [
        { id: '1', type: 'video', span: 'span-row-2', src: '/news/open_day.mp4', thumbnail: '', title: { uz: 'Katta Dasturchi bilan Open day', en: 'Open day with a big programmer', ru: 'Open day с большим программистом' } },
        { id: '2', type: 'image', span: 'span-row-1', src: '/news/chess.png', title: { uz: 'Xar kuni ochiq Shaxmat/Shashka uyinlari', en: 'Chess & Checkers', ru: 'Шахматы и шашки' } },
        { id: '3', type: 'image', span: 'span-row-1', src: '/news/footbal.png', title: { uz: 'Xar Juma futbol uyinlari', en: 'Friday Football', ru: 'Футбол по пятницам' } },
        { id: '4', type: 'video', span: 'span-row-2', src: '/news/mock_imtihon.MP4', thumbnail: '', title: { uz: 'Xar Xafta Mock Imtihoni', en: 'Weekly Mock Exam', ru: 'Еженедельный Mock' } },
        { id: '5', type: 'image', span: 'span-row-1', src: '/news/kahoot.png', title: { uz: 'Ochiq Kahoot uyinlari', en: 'Kahoot Games', ru: 'Игры Kahoot' } },
        { id: '6', type: 'image', span: 'span-row-1', src: '/news/mafia.png', title: { uz: 'Mafia uyinlari', en: 'Mafia night', ru: 'Ночь Мафии' } },
        { id: '7', type: 'video', span: 'span-row-2', src: '/news/tez_kunda.mp4', thumbnail: '', title: { uz: 'Dam olish sayohatlari', en: 'Trips with team', ru: 'Поездки с командой' } },
        { id: '8', type: 'image', span: 'span-row-1', src: '/news/session.png', title: { uz: 'Raqobatli Monkeytype musobaqalari ', en: 'Competition Monkeytype games', ru: 'Соревнования Monkeytype' } },
        { id: '9', type: 'image', span: 'span-row-1', src: '/news/x-box.png', title: { uz: 'X-box uyinlari', en: 'X-box games', ru: 'Игры X-box' } },
        { id: '10', type: 'video', span: 'span-row-2', src: '/news/team_trip.mp4', thumbnail: '', title: { uz: 'Biz Jamoamiz bilan dam olishga chiqdik', en: 'Our Team Trip', ru: 'Поездка с командой' } },
        { id: '11', type: 'image', span: 'span-row-1', src: '/news/dasturchilar.jpg', title: { uz: 'Yosh Dasturchilar guruhi', en: 'Young Developers', ru: 'Молодые программисты' } },
        { id: '12', type: 'image', span: 'span-row-1', src: '/news/team.jpg', title: { uz: 'Bizning Jamoa', en: 'Our Team', ru: 'Наша команда' } },
        { id: '13', type: 'video', span: 'span-row-2', src: '/news/teacher.MP4', thumbnail: '', title: { uz: 'Muvaffaqiyat hikoyalari', en: 'Success Stories', ru: 'Истории успеха' } },
    ];


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
        sliderRef.current.classList.remove('active');
    };

    const handleMouseUp = () => {
        setIsDown(false);
        sliderRef.current.classList.remove('active');
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
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
