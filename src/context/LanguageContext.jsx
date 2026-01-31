import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const translations = {
    uz: {
        nav: {
            home: 'Bosh Sahifa',
            courses: 'Kurslar',
            about: 'Biz Haqimizda',
            status: 'Holat',
            russian: 'Rus tili',
            contact: 'Aloqa',
            enroll: 'Kursga yozilish',
            news: 'Yangiliklar',
            getStarted: 'Boshlash'
        },
        home: {
            hero: {
                titlePrefix: 'Kelajak',
                titleSuffix: 'Shu Yerda',
                keywords: ['Dasturlash', 'Dizayn', 'Fullstack'],
                subtitle: 'Biz shunchaki dars o\'tmaymiz, biz real loyihalar orqali karyera qurishga yordam beramiz.',
                cta: 'Kurslarni Ko\'rish',
                secondaryCta: 'Biz Haqimizda'
            },
            whyTitle: 'Nega Datasite Academy?',
            whySubtitle: 'Biz shunchaki dars o\'tmaymiz. Biz karyera quramiz.',
            features: {
                secondTeacher: 'Ikkinchi Ustoz Tizimi',
                secondTeacherDesc: 'Sizga har doim yordam beradigan yordamchi mentorlar.',
                mentors: 'Tajribali Mentorlar',
                mentorsDesc: 'Top texnologiya kompaniyalarida ishlagan mutaxassislardan o\'rganing.',
                events: 'IT Eventlar va Networking',
                eventsDesc: 'Sohadagi eng sara mutaxassislar bilan uchrashuvlar.',
                mock: 'Mock Intervyular',
                mockDesc: 'Xar xafta mock tekin',
                coworking: '24/7 Coworking',
                coworkingDesc: 'Xohlagan vaqtingizda dars qilishingiz uchun qulay maydon.'
            },
            stats: {
                students: 'O\'quvchilar',
                employment: 'Ishga Joylashish',
                partners: 'Hamkorlar',
                projects: 'Loyihalar'
            },
            path: {
                title: 'Muvaffaqiyat Yo\'li',
                step1: 'Qabul: Darajangizni aniqlaymiz',
                step1Desc: 'Sizning qiziqishingizga qarab yo\'nalish tanlaymiz.',
                step2: 'Amaliyot: Real proyektlar ustida ishlaysiz',
                step2Desc: 'Faqat kod yozmaysiz, balki tizimlar qurasiz.',
                step3: 'Portfolio: Kuchli loyihalar to\'plami',
                step3Desc: 'Ish beruvchilarni hayron qoldiradigan portfolioni tayyorlaymiz.',
                step4: 'Karyera: Ish taklifi va mentorlik',
                step4Desc: 'Biz sizni top kompaniyalarga tavsiya qilamiz.'
            }
        },
        status: {
            title: 'Talaba Holatini Tekshirish',
            subtitle: 'To\'lov holati va kurs ma\'lumotlarini ko\'rish uchun ID raqamingizni kiriting.',
            placeholder: 'ID raqamingiz (masalan: DS2025)',
            btn: 'Tekshirish',
            notFound: 'O\'quvchi Topilmadi',
            notFoundDesc: 'Iltimos, ID raqamni tekshirib qaytadan urinib ko\'ring.',
            course: 'Kurs',
            paymentStatus: 'To\'lov Holati',
            paid: 'To\'langan',
            unpaid: 'To\'lanmagan',
            lastPayment: 'Oxirgi To\'lov',
            nextPayment: 'Keyingi To\'lov',
            lastPayment: 'Oxirgi To\'lov',
            nextPayment: 'Keyingi To\'lov',
            payNow: 'Hozir To\'lash',
            partial: 'To\'liq emas'
        },
        admin: {
            loginTitle: 'Admin Kirish',
            username: 'Login',
            password: 'Parol',
            loginBtn: 'Kirish',
            error: 'Login yoki parol xato!',
            dashboardTitle: 'Boshqaruv Paneli',
            addStudent: 'O\'quvchi Qo\'shish',
            editStudent: 'Tahrirlash',
            deleteStudent: 'O\'chirish',
            saveBtn: 'Saqlash',
            cancelBtn: 'Bekor qilish',
            id: 'ID',
            name: 'Ism Familiya',
            course: 'Kurs',
            status: 'Holat',
            lastPayment: 'Oxirgi To\'lov',
            nextPayment: 'Keyingi To\'lov',
            markPaid: 'To\'lov qilish',
            markUnpaid: 'Qarzdorlik',
            actions: 'Amallar',
            receipt: 'To\'lov Cheki',
            history: 'Tarix',
            amount: 'Summa',
            date: 'Sana',
            confirmDelete: 'O\'chirib tashlansinmi?',
            deleteWarning: 'Ushbu o\'quvchi ma\'lumotlari butunlay o\'chib ketadi.',
            print: 'Chop etish',
            close: 'Yopish',
            paymentHistory: 'To\'lovlar Tarixi',
            studentHistory: 'O\'quvchi To\'lovlari',
            groups: 'Guruhlar',
            addGroup: 'Guruh Qo\'shish',
            teacher: 'O\'qituvchi',
            groupName: 'Guruh Nomi',
            groupRevenue: 'Guruhdan oylik tushum',
            groupStudents: 'Guruh O\'quvchilari',
            month: 'Oy',
            comment: 'Izoh',
            paymentFor: 'To\'lov oyi',
            months: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr']
        },
        monitoring: {
            title: 'Monitoring Tizimi',
            subtitle: 'Akademiya bo\'yicha umumiy statistika va tahlillar.',
            stats: {
                totalStudents: 'Jami O\'quvchilar',
                totalRevenue: 'Umumiy Tushum',
                monthlyRevenue: 'Oylik Tushum',
                activeCourses: 'Faol Kurslar',
                paidStudents: 'To\'lov Qilganlar',
                unpaidStudents: 'To\'lov Qilmaganlar'
            },
            charts: {
                studentDist: 'O\'quvchilar Taqsimoti',
                paymentStats: 'To\'lov Statistikasi'
            },
            live: {
                title: 'JONLI KUZATUV',
                visitors: 'Hozirgi foydalanuvchilar',
                uptime: 'Tizim barqarorligi',
                throughput: 'Ma\'lumotlar oqimi',
                status: 'Xavfsizlik holati',
                logs: 'Tizim qaydlari'
            },
            loginTitle: 'Monitoring Kirish',
            error: 'Login yoki parol xato!'
        },
        footer: {
            desc: 'Raqamli yaratuvchilar va dasturchilarning yangi avlodini tarbiyalaymiz.',
            quickLinks: 'Tezkor Havolalar',
            socials: 'Ijtimoiy Tarmoqlar',
            contactInfo: 'Kontaktlar',
            rights: 'Barcha huquqlar himoyalangan.',
            socialLinks: {
                telegram: 'https://t.me/datasite_academy',
                instagram: 'https://instagram.com/datasite_academy',
                youtube: 'https://youtube.com/@datasite_academy'
            },
            phone: '+998 95 061 64 66',
            email: 'datasite_academy@gmail.com',
            address: 'A.Xo\'jayev 38',
            landmark: 'Chorsu, Davlat Xizmatlari binosi, 4-qavat',
            newsletter: {
                title: 'Telegram Kanalimiz',
                desc: 'Kanalimizga obuna bo\'ling va eng so\'nggi yangiliklardan xabardor bo\'ling.',
                placeholder: 'Savolingiz bormi? (Ixtiyoriy)',
                btn: 'Obuna bo\'lish'
            },
            legal: {
                privacy: 'Maxfiylik Siyosati',
                terms: 'Foydalanish Shartlari'
            }
        },
        courses: {
            title: "Bizning kurslar",
            subtitle: "Kelajak kasblarini biz bilan o'rganing",
            filter: {
                all: "Barchasi",
                beginner: "Boshlang'ich",
                dev: "Dasturlash",
                backend: "Backend",
                data: "Ma'lumotlar",
                design: "Dizayn",
                marketing: "Marketing",
                other: "Boshqa",
                language: "Til",
                computerLiteracy: "Kompyuter savodxonligi",
                english: "Ingliz tili",
                korean: "Koreys tili",
                german: "Nemis tili",
                russian: "Rus tili"
            },
            card: {
                weeks: "Hafta",
                rating: "Reyting",
                feedbacks: "ta sharh",
                details: "Batafsil",
                tag: "Yangi"
            },
            instructor: {
                back: "Orqaga",
                students: "O'quvchilar",
                education: "Ma'lumoti",
                about: "Mentor haqida",
                skills: "Ko'nikmalar",
                achievements: "Yutuqlar",
                courses: "O'tadigan kurslari",
                notFound: "O'qituvchi topilmadi",
                backToCourses: "Kurslarga qaytish"
            }
        },
        about: {
            title: 'Datasite Academy Haqida',
            subtitle: 'Bizning vazifamiz - texnologik ta\'limni demokratlashtirish va sizga orzu qilgan karyerangizni qurishda yordam berish.',
            storyTitle: 'Bizning Hikoyamiz',
            storyText1: '2025-yilda asos solingan Datasite Academy oddiy bir g\'oya bilan boshlandi: yuqori sifatli texnologik ta\'lim hamma joyda, hamma uchun ochiq bo\'lishi kerak.',
            storyText2: 'Biz amaliy o\'rganishga ishonamiz. Shuning uchun barcha kurslarimiz loyihalarga asoslangan va tizimlarni masshtabli qurgan soha mutaxassislari tomonidan o\'tiladi.',
            stats: {
                students: 'O\'quvchilar',
                courses: 'Kurslar',
                mentors: 'Mentorlar'
            }
        },
        aboutPage: {
            heroTitle: 'Kelajakni Birga Quramiz',
            heroSubtitle: 'Biz shunchaki o\'rgatmaymiz, biz hayotlarni o\'zgartiramiz va yangi imkoniyatlar yaratamiz.',
            missionTitle: 'Bizning Missiyamiz',
            missionDesc: 'Sifatli IT ta\'limni hamma uchun ochiq qilish va har bir o\'quvchimizni professional darajaga ko\'tarish.',
            timeline: {
                year2022: '2022:Ilk qadam',
                desc2022: 'Datasite Academy loyihasi ustida ish boshlandi.',
                year2023: '2023:Akademiya ochilishi',
                desc2023: 'Ilk guruhlar shakllantirildi va darslar boshlandi.',
                year2024: '2024:Masshtab kengayishi',
                desc2024: 'Yangi kurslar va mentorlar jamoasi qo\'shildi.',
                year2025: '2025:IT markazga aylanish',
                desc2025: 'Respublika miqyosida yetakchi IT akademiyalardan biriga aylandik.'
            },
            stats: {
                students: 'Faol o\'quvchilar',
                courses: 'Kurslar soni',
                mentors: 'Tajribali mentorlar'
            },
            services: {
                title: 'Bizning xizmatlarimiz',
                seo: 'SEO',
                smm: 'SMM',
                mobile: 'Mobil ilovalar',
                crm: 'CRM',
                websites: 'Veb-saytlar',
                technical: 'Texnik topshiriq',
                learnMore: 'Ko\'proq o\'qish'
            },
            partnerTitle: 'Mijozlar va hamkorlar',
            productsTitle: 'Bizning mahsulotlar',
            goToSite: 'Veb-saytga o\'ting',
            products: {
                shipox: 'Korxonalar va oddiy iste\'molchilar uchun tovarlarni yetkazib berish bo\'yicha mobil va veb-ilova',
                helpa: 'Toshkentdagi kompaniyadan professional tozalash xizmatlari',
                kpi: 'Kichik va o\'rta biznesni boshqarish uchun mo\'ljallangan kompleks dasturiy ta\'minot'
            }
        },
        contact: {
            title: 'Aloqa',
            subtitle: 'Savollaringiz bormi? Sizdan eshitishni xohlaymiz.',
            labels: {
                phone: 'Telefon',
                email: 'Email',
                office: 'Manzil',
                name: 'Ism Familiya',
                emailAddr: 'Email Manzil',
                message: 'Xabar',
                send: 'Xabarni Yuborish'
            },
            notifications: {
                success: 'Xabaringiz muvaffaqiyatli yuborildi!',
                error: 'Xatolik yuz berdi.'
            }
        },
        enrollment: {
            title: 'Kursga Yozilish',
            subtitle: 'Orzungizdagi IT karyerani biz bilan boshlang. Formani to\'ldiring va biz siz bilan bog\'lanamiz.',
            form: {
                name: 'To\'liq ismingiz',
                phone: 'Telefon raqamingiz',
                course: 'Kursni tanlang',
                message: 'Qo\'shimcha savollar (ixtiyoriy)',
                submit: 'Yuborish',
                success: 'Arizangiz qabul qilindi! Tez orada operatorlarimiz bog\'lanishadi.',
                error: 'Xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko\'ring.'
            },
            courses: {
                frontend: 'Frontend Dasturlash',
                backend: 'Backend (Node.js/Python)',
                fullstack: 'Fullstack Dasturlash',
                design: 'Grafik va UI/UX Dizayn',
                marketing: 'SMM va Raqamli Marketing',
                foundation: 'IT Foundation',
                russian: 'Rus tili'
            }
        }
    },
    ru: {
        nav: {
            home: 'Главная',
            courses: 'Курсы',
            about: 'О Нас',
            status: 'Статус',
            russian: 'Русский язык',
            contact: 'Контакты',
            enroll: 'Записаться',
            news: 'Новости',
            getStarted: 'Начать'
        },
        home: {
            hero: {
                titlePrefix: 'Будущее',
                titleSuffix: 'Здесь',
                keywords: ['Дизайн', 'Fullstack'],
                subtitle: 'Мы не просто учим, мы помогаем построить карьеру через реальные проекты.',
                cta: 'Посмотреть Курсы',
                secondaryCta: 'О Нас'
            },
            whyTitle: 'Почему Datasite Academy?',
            whySubtitle: 'Мы даем больше, чем просто уроки. Мы строим карьеры.',
            features: {
                secondTeacher: 'Система Второго Учителя',
                secondTeacherDesc: 'Помощники менторы всегда готовы помочь вам с трудностями.',
                mentors: 'Опытные Менторы',
                mentorsDesc: 'Учитесь у экспертов, работавших в топовых технологических компаниях.',
                events: 'IT Мероприятия и Нетворкинг',
                eventsDesc: 'Встречи с лучшими специалистами отрасли.',
                mock: 'Mock Интервью',
                mockDesc: 'Бесплатные Mock-интервью каждую неделю.',
                coworking: '24/7 Коворкинг',
                coworkingDesc: 'Удобное место для учебы в любое время.'
            },
            stats: {
                students: 'Студенты',
                employment: 'Трудоустройство',
                partners: 'Партнеры',
                projects: 'Проекты'
            },
            path: {
                title: 'Путь к Успеху',
                step1: 'Прием: Определение уровня',
                step1Desc: 'Мы подбираем направление, исходя из ваших интересов.',
                step2: 'Практика: Работа над реальными проектами',
                step2Desc: 'Вы не просто пишете код, вы строите системы.',
                step3: 'Портфолио: Сильное портфолио',
                step3Desc: 'Мы готовим портфолио, которое удивит работодателей.',
                step4: 'Карьера: Оффер и Менторство',
                step4Desc: 'Мы рекомендуем вас в топовые компании.'
            }
        },
        status: {
            title: 'Проверка Статуса Студента',
            subtitle: 'Введите ваш ID для проверки оплаты и информации о курсе.',
            placeholder: 'Ваш ID (например: DS2025)',
            btn: 'Проверить',
            notFound: 'Студент не найден',
            notFoundDesc: 'Пожалуйста, проверьте ID и попробуйте снова.',
            course: 'Курс',
            paymentStatus: 'Статус Оплаты',
            paid: 'Оплачено',
            unpaid: 'Не оплачено',
            lastPayment: 'Последняя Оплата',
            nextPayment: 'Следующая Оплата',
            nextPayment: 'Следующая Оплата',
            payNow: 'Оплатить Сейчас',
            partial: 'Неполная оплата'
        },
        admin: {
            loginTitle: 'Вход для Админа',
            username: 'Логин',
            password: 'Пароль',
            loginBtn: 'Войти',
            error: 'Неверный логин или пароль!',
            dashboardTitle: 'Панель Управления',
            addStudent: 'Добавить Студента',
            editStudent: 'Редактировать',
            deleteStudent: 'Удалить',
            saveBtn: 'Сохранить',
            cancelBtn: 'Отмена',
            id: 'ID',
            name: 'ФИО',
            course: 'Курс',
            status: 'Статус',
            lastPayment: 'Последняя Оплата',
            nextPayment: 'Следующая Оплата',
            markPaid: 'Отметить оплату',
            markUnpaid: 'Отметить долг',
            actions: 'Действия',
            receipt: 'Чек Оплаты',
            history: 'История',
            amount: 'Сумма',
            date: 'Дата',
            confirmDelete: 'Вы уверены?',
            deleteWarning: 'Данные студента будут удалены безвозвратно.',
            print: 'Печать',
            close: 'Закрыть',
            paymentHistory: 'История Платежей',
            studentHistory: 'Платежи Студента',
            groups: 'Группы',
            addGroup: 'Добавить Группу',
            teacher: 'Учитель',
            groupName: 'Название Группы',
            groupRevenue: 'Выручка Группы',
            groupStudents: 'Студенты Группы',
            month: 'Месяц',
            comment: 'Комментарий',
            paymentFor: 'Месяц оплаты',
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
        },
        monitoring: {
            title: 'Система Мониторинга',
            subtitle: 'Общая статистика и аналитика академии.',
            stats: {
                totalStudents: 'Всего Студентов',
                totalRevenue: 'Общая Выручка',
                activeCourses: 'Активные Курсы',
                paidStudents: 'Оплатившие',
                unpaidStudents: 'Не оплатившие'
            },
            charts: {
                studentDist: 'Распределение Студентов',
                paymentStats: 'Статистика Оплат'
            },
            live: {
                title: 'LIVE ОТСЛЕЖИВАНИЕ',
                visitors: 'Посетители онлайн',
                uptime: 'Аптайм системы',
                throughput: 'Поток данных',
                status: 'Статус безопасности',
                logs: 'Логи системы'
            },
            loginTitle: 'Вход в Мониторинг',
            error: 'Неверный логин или пароль!'
        },
        footer: {
            desc: 'Мы воспитываем новое поколение цифровых создателей и разработчиков.',
            quickLinks: 'Быстрые Ссылки',
            socials: 'Соцсети',
            contactInfo: 'Контакты',
            rights: 'Все права защищены.',
            socialLinks: {
                telegram: 'https://t.me/datasite_academy',
                instagram: 'https://instagram.com/datasite_academy',
                youtube: 'https://youtube.com/@datasite_academy'
            },
            phone: '+998 95 061 64 66',
            email: 'datasite_academy@gmail.com',
            address: 'А.Ходжаев 38',
            landmark: 'Чорсу, Здание Госуслуг, 4-й этаж',
            newsletter: {
                title: 'Наш Telegram Канал',
                desc: 'Подписывайтесь на наш канал и будьте в курсе последних новостей.',
                placeholder: 'Есть вопросы? (Опционально)',
                btn: 'Подписаться'
            },
            legal: {
                privacy: 'Политика Конфиденциальности',
                terms: 'Условия Использования'
            }
        },
        courses: {
            title: "Наши курсы",
            subtitle: "Изучайте профессии будущего вместе с нами",
            filter: {
                all: "Все",
                beginner: "Начинающий",
                dev: "Разработка",
                backend: "Backend",
                data: "Data Science",
                design: "Дизайн",
                marketing: "Маркетинг",
                other: "Другое",
                language: "Язык",
                computerLiteracy: "Компьютерная грамотность",
                english: "Английский язык",
                korean: "Корейский язык",
                german: "Немецкий язык",
                russian: "Русский язык"
            },
            card: {
                weeks: "Недель",
                rating: "Рейтинг",
                feedbacks: "отзывов",
                details: "Подробнее",
                tag: "Новый"
            },
            instructor: {
                back: "Назад",
                students: "Студенты",
                education: "Образование",
                about: "О менторе",
                skills: "Навыки",
                achievements: "Достижения",
                courses: "Преподаваемые курсы",
                notFound: "Инструктор не найден",
                backToCourses: "Вернуться к курсам"
            }
        },
        about: {
            title: 'О Datasite Academy',
            subtitle: 'Наша миссия - демократизировать техническое образование и помочь вам построить карьеру мечты.',
            storyTitle: 'Наша История',
            storyText1: 'Datasite Academy была основана в 2025 году с простой идеей: качественное IT-образование должно быть доступно каждому.',
            storyText2: 'Мы верим в практическое обучение. Поэтому все наши курсы основаны на проектах и ведутся экспертами индустрии.',
            stats: {
                students: 'Студентов',
                courses: 'Курсов',
                mentors: 'Менторов'
            }
        },
        aboutPage: {
            heroTitle: 'Строим Будущее Вместе',
            heroSubtitle: 'Мы не просто учим, мы меняем жизни и создаем новые возможности.',
            missionTitle: 'Наша Миссия',
            missionDesc: 'Сделать качественное IT-образование доступным для всех и довести каждого студента до профессионального уровня.',
            timeline: {
                year2022: '2022:Первые шаги',
                desc2022: 'Началась работа над проектом Datasite Academy.',
                year2023: '2023:Открытие Академии',
                desc2023: 'Сформированы первые группы и начались занятия.',
                year2024: '2024:Масштабирование',
                desc2024: 'К команде присоединились новые курсы и менторы.',
                year2025: '2025:Лидирующий IT Центр',
                desc2025: 'Мы стали одной из ведущих IT-академий в стране.'
            },
            stats: {
                students: 'Активных студентов',
                courses: 'Количество курсов',
                mentors: 'Экспертных менторов'
            },
            services: {
                title: 'Наши услуги',
                seo: 'SEO',
                smm: 'SMM',
                mobile: 'Мобильные приложения',
                crm: 'CRM',
                websites: 'Веб-сайты',
                technical: 'Тех. задание',
                learnMore: 'Подробнее'
            },
            partnerTitle: 'Клиенты и партнёры',
            productsTitle: 'Наши продукты',
            goToSite: 'Перейти на сайт',
            products: {
                shipox: 'Мобильное и веб-приложение для доставки товаров для предприятий и обычных потребителей',
                helpa: 'Профессиональные клининговые услуги от компании в Ташкенте',
                kpi: 'Комплексное программное обеспечение, предназначенное для управления малым и средним бизнесом'
            }
        },
        contact: {
            title: 'Контакты',
            subtitle: 'Есть вопросы? Мы будем рады ответить.',
            labels: {
                phone: 'Телефон',
                email: 'Email',
                office: 'Адрес',
                name: 'ФИО',
                emailAddr: 'Email Адрес',
                message: 'Сообщение',
                send: 'Отправить'
            },
            notifications: {
                success: 'Ваше сообщение успешно отправлено!',
                error: 'Произошла ошибка.'
            }
        },
        enrollment: {
            title: 'Записаться на Курс',
            subtitle: 'Начните карьеру своей мечты с нами. Заполните форму, и мы свяжемся с вами.',
            form: {
                name: 'ФИО',
                phone: 'Номер телефона',
                course: 'Выберите курс',
                message: 'Дополнительные вопросы (опционально)',
                submit: 'Отправить заявку',
                success: 'Заявка принята! Наши операторы скоро свяжутся с вами.',
                error: 'Произошла ошибка. Пожалуйста, попробуйте позже.'
            },
            courses: {
                frontend: 'Frontend Разработка',
                backend: 'Backend (Node.js/Python)',
                fullstack: 'Fullstack Разработка',
                design: 'Графический и UI/UX Дизайн',
                marketing: 'SMM и Digital Маркетинг',
                foundation: 'IT Foundation',
                russian: 'Русский язык'
            }
        }
    },
    en: {
        nav: {
            home: 'Home',
            courses: 'Courses',
            about: 'About Us',
            status: 'Status',
            russian: 'Russian',
            contact: 'Contact',
            enroll: 'Enroll Now',
            news: 'News',
            getStarted: 'Get Started'
        },
        home: {
            hero: {
                titlePrefix: 'The Future of',
                titleSuffix: 'is Here',
                keywords: ['Coding', 'Design', 'Fullstack'],
                subtitle: 'We don\'t just teach. We help you build a career through real-world projects.',
                cta: 'Explore Courses',
                secondaryCta: 'About Us'
            },
            whyTitle: 'Why Datasite Academy?',
            whySubtitle: 'We provide more than just tutorials. We build careers.',
            features: {
                secondTeacher: 'Second Teacher System',
                secondTeacherDesc: 'Assistant mentors always available to help you with your challenges.',
                mentors: 'Expert Mentors',
                mentorsDesc: 'Learn from industry veterans who have worked in top tech companies.',
                events: 'IT Events & Networking',
                eventsDesc: 'Meet with top industry professionals during our exclusive events.',
                mock: 'Mock Interviews',
                mockDesc: 'Free mock interviews every week.',
                coworking: '24/7 Coworking Space',
                coworkingDesc: 'A comfortable space for you to study at any time.'
            },
            stats: {
                students: 'Total Students',
                employment: 'Employment Rate',
                partners: 'Partner Companies',
                projects: 'Real Projects'
            },
            path: {
                title: 'Success Path',
                step1: 'Admission: Define your level',
                step1Desc: 'We choose a direction based on your interests.',
                step2: 'Practice: Work on real projects',
                step2Desc: 'You don\'t just write code, you build systems.',
                step3: 'Portfolio: Build a strong collection',
                step3Desc: 'We prepare a portfolio that will wow employers.',
                step4: 'Career: Job offer & Mentorship',
                step4Desc: 'We recommend you to top tech companies.'
            }
        },
        status: {
            title: 'Check Student Status',
            subtitle: 'Enter your Student ID to check payment status and course details.',
            placeholder: 'Enter Student ID (e.g. DS2025)',
            btn: 'Check',
            notFound: 'Student Not Found',
            notFoundDesc: 'Please check your ID and try again.',
            course: 'Course',
            paymentStatus: 'Payment Status',
            paid: 'Paid',
            unpaid: 'Unpaid',
            lastPayment: 'Last Payment',
            nextPayment: 'Next Payment',
            lastPayment: 'Last Payment',
            nextPayment: 'Next Payment',
            payNow: 'Pay Now',
            partial: 'Partial'
        },
        admin: {
            loginTitle: 'Admin Login',
            username: 'Username',
            password: 'Password',
            loginBtn: 'Login',
            error: 'Invalid username or password!',
            dashboardTitle: 'Admin Dashboard',
            addStudent: 'Add Student',
            editStudent: 'Edit',
            deleteStudent: 'Delete',
            saveBtn: 'Save',
            cancelBtn: 'Cancel',
            id: 'ID',
            name: 'Full Name',
            course: 'Course',
            status: 'Status',
            lastPayment: 'Last Payment',
            nextPayment: 'Next Payment',
            markPaid: 'Make Payment',
            markUnpaid: 'Mark Unpaid',
            actions: 'Actions',
            receipt: 'Payment Receipt',
            history: 'History',
            amount: 'Amount',
            date: 'Date',
            confirmDelete: 'Are you sure?',
            deleteWarning: 'This student data will be permanently deleted.',
            print: 'Print',
            close: 'Close',
            paymentHistory: 'Payment History',
            studentHistory: 'Student Payments',
            groups: 'Groups',
            addGroup: 'Add Group',
            teacher: 'Teacher',
            groupName: 'Group Name',
            groupRevenue: 'Group Revenue',
            groupStudents: 'Group Students',
            month: 'Month',
            comment: 'Comment',
            paymentFor: 'Payment For',
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        },
        monitoring: {
            title: 'Monitoring System',
            subtitle: 'General statistics and analytics of the academy.',
            stats: {
                totalStudents: 'Total Students',
                totalRevenue: 'Total Revenue',
                activeCourses: 'Active Courses',
                paidStudents: 'Paid Students',
                unpaidStudents: 'Unpaid Students'
            },
            charts: {
                studentDist: 'Student Distribution',
                paymentStats: 'Payment Statistics'
            },
            live: {
                title: 'LIVE TRACKING',
                visitors: 'Concurrent Visitors',
                uptime: 'System Uptime',
                throughput: 'Data Throughput',
                status: 'Security Status',
                logs: 'System Logs'
            },
            loginTitle: 'Monitoring Login',
            error: 'Invalid username or password!'
        },
        footer: {
            desc: 'Empowering the next generation of digital creators and developers through world-class education.',
            quickLinks: 'Quick Links',
            socials: 'Socials',
            contactInfo: 'Contact Info',
            rights: 'All rights reserved.',
            socialLinks: {
                telegram: 'https://t.me/datasite_academy',
                instagram: 'https://instagram.com/datasite_academy',
                youtube: 'https://youtube.com/@datasite_academy'
            },
            phone: '+998 95 061 64 66',
            email: 'datasite_academy@gmail.com',
            address: 'A.Xo\'jayev 38',
            landmark: 'Chorsu, Public Services Building, 4th floor',
            newsletter: {
                title: 'Telegram Channel',
                desc: 'Subscribe to our channel and stay updated with the latest news.',
                placeholder: 'Have a question? (Optional)',
                btn: 'Subscribe Now'
            },
            legal: {
                privacy: 'Privacy Policy',
                terms: 'Terms of Service'
            }
        },
        courses: {
            title: "Our Courses",
            subtitle: "Learn the professions of the future with us",
            filter: {
                all: "All",
                beginner: "Beginner",
                dev: "Development",
                backend: "Backend",
                data: "Data Science",
                design: "Design",
                marketing: "Marketing",
                other: "Other",
                language: "Language",
                computerLiteracy: "Computer Literacy",
                english: "English",
                korean: "Korean",
                german: "German",
                russian: "Russian"
            },
            card: {
                weeks: "Weeks",
                rating: "Rating",
                feedbacks: "reviews",
                details: "Details",
                tag: "New"
            },
            instructor: {
                back: "Back",
                students: "Students",
                education: "Education",
                about: "About Mentor",
                skills: "Skills",
                achievements: "Achievements",
                courses: "Courses taught",
                notFound: "Instructor not found",
                backToCourses: "Back to courses"
            }
        },
        about: {
            title: 'About Datasite Academy',
            subtitle: "We're on a mission to democratize tech education and help you build the career of your dreams.",
            storyTitle: 'Our Story',
            storyText1: 'Founded in 2025, Datasite Academy started with a simple idea: that high-quality tech education should be accessible to everyone, everywhere.',
            storyText2: "We believe in learning by doing. That's why all our courses are project-based and taught by industry experts who have actually built systems at scale.",
            stats: {
                students: 'Students',
                courses: 'Courses',
                mentors: 'Mentors'
            }
        },
        aboutPage: {
            heroTitle: 'Building the Future Together',
            heroSubtitle: 'We don\'t just teach, we transform lives and create new opportunities.',
            missionTitle: 'Our Mission',
            missionDesc: 'Making quality IT education accessible to everyone and raising every student to a professional level.',
            timeline: {
                year2022: '2022:First Steps',
                desc2022: 'Work on the Datasite Academy project began.',
                year2023: '2023:Academy Opening',
                desc2023: 'First groups were formed and classes began.',
                year2024: '2024:Scaling Up',
                desc2024: 'New courses and mentors joined the team.',
                year2025: '2025:Leading IT Center',
                desc2025: 'Became one of the leading IT academies at the national level.'
            },
            stats: {
                students: 'Active Students',
                courses: 'Number of Courses',
                mentors: 'Expert Mentors'
            },
            services: {
                title: 'Our Services',
                seo: 'SEO',
                smm: 'SMM',
                mobile: 'Mobile apps',
                crm: 'CRM',
                websites: 'Websites',
                technical: 'Tech specs',
                learnMore: 'Learn more'
            },
            partnerTitle: 'Clients and Partners',
            productsTitle: 'Our Products',
            goToSite: 'Go to site',
            products: {
                shipox: 'Mobile and web application for delivery of goods for enterprises and regular consumers',
                helpa: 'Professional cleaning services from a company in Tashkent',
                kpi: 'Comprehensive software designed for managing small and medium businesses'
            }
        },
        contact: {
            title: 'Contact',
            subtitle: "Have questions? We'd love to hear from you.",
            labels: {
                phone: 'Phone',
                email: 'Email',
                office: 'Location',
                name: 'Full Name',
                emailAddr: 'Email Address',
                message: 'Message',
                send: 'Send Message'
            },
            notifications: {
                success: 'Your message has been sent successfully!',
                error: 'An error occurred.'
            }
        },
        enrollment: {
            title: 'Enroll in a Course',
            subtitle: 'Start your dream IT career with us. Fill out the form and we will contact you.',
            form: {
                name: 'Full Name',
                phone: 'Phone Number',
                course: 'Select a Course',
                message: 'Additional questions (optional)',
                submit: 'Submit Application',
                success: 'Application received! Our operators will contact you soon.',
                error: 'An error occurred. Please try again later.'
            },
            courses: {
                frontend: 'Frontend Development',
                backend: 'Backend (Node.js/Python)',
                fullstack: 'Fullstack Development',
                design: 'Graphic & UI/UX Design',
                marketing: 'SMM & Digital Marketing',
                foundation: 'IT Foundation',
                russian: 'Russian Language'
            }
        }
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('uz');

    const toggleLanguage = () => {
        setLanguage(prev => {
            if (prev === 'uz') return 'ru';
            if (prev === 'ru') return 'en';
            return 'uz';
        });
    };

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    const currentTrans = translations[language];
    const t = currentTrans || translations['uz'];

    const value = {
        language,
        toggleLanguage,
        changeLanguage,
        setLanguage,
        t,
        translations
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
