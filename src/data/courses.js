import img3230 from '../assets/IMG_3230.JPG';
import img3213 from '../assets/IMG_3213.JPG';
import img3206 from '../assets/IMG_3206.JPG';
import img3216 from '../assets/IMG_3216.JPG';
import img3281 from '../assets/IMG_3281.JPG';
import imgSardorbek from '../assets/serdorbek.jpg';
import imgNemis from '../assets/nemis.png';
import koreanImg from '../assets/korean.png';
import imgFrontEnd from '../assets/yaxyobek.JPG';
import imgmx from '../assets/mx.png';
import samir from '../assets/xamir.png';
import imgibo from '../assets/ibrohim.png';
import imgnurillox from '../assets/nurillo.JPG';
import imgjavohir from '../assets/javohir.png';
import imgMuhammad from '../assets/muxammad.png';

// Kurslar va Mentorlar ma'lumotlari
export const coursesData = [
    {
        id: 1,
        title: 'Kompyuter savodxonligi',
        titleEn: 'Computer Literacy',
        titleRu: 'Компьютерная грамотность',
        instructor: 'Zokirjon Ahmadqulov',
        instructorSlug: 'datasite-ustozi',
        instructorBio: {
            uz: 'Kompyuter texnologiyalari va ofis dasturlari bo\'yicha ko\'p yillik tajribaga ega mutaxassis. Yuqori natijalarga erishgan 500 dan ortiq shogirdlar tayyorlagan.',
            en: 'Specialist with years of experience in computer technology and office programs. Taught over 500 highly successful students.',
            ru: 'Специалист с многолетним опытом работы в области компьютерных технологий и офисных программ. Подготовил более 500 успешных учеников.'
        },
        instructorSkills: {
            uz: ['Microsoft Office', 'Windows OS', 'Apparat diagnostikasi', 'Tarmoq asoslari'],
            en: ['Microsoft Office', 'Windows OS', 'Hardware Diagnostics', 'Basic Networking'],
            ru: ['Microsoft Office', 'Windows OS', 'Аппаратная диагностика', 'Основы сетей']
        },
        instructorEdu: {
            uz: 'TATU - Axborot texnologiyalari fakulteti',
            en: 'TUIT - Information Technology Faculty',
            ru: 'ТУИТ - Факультет информационных технологий'
        },
        instructorAchieve: {
            uz: 'Yilning eng yaxshi o\'qituvchisi (2022)',
            en: 'Instructor of the Year (2022)',
            ru: 'Учитель года (2022)'
        },
        rating: 5.0,
        students: 200,
        duration: '3 Oy',
        price: '299 000 UZS',
        oldPrice: '500 000 UZS',
        category: ['Kompyuter savodxonligi'],
        image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        instructorImg: img3230,
    },
    {
        id: 2,
        title: 'Front-end Dasturlash',
        titleEn: 'Front-end Development',
        titleRu: 'Frontend Разработка',
        instructor: 'Sardorbek Daminov ',
        instructorSlug: 'frontend-eksperti',
        instructorBio: {
            uz: 'Zamonaviy veb-texnologiyalar (React, Vue, Next.js) bo\'yicha chuqur bilimga ega. Ko\'plab xalqaro loyihalarda ishtirok etgan Senior dasturchi.',
            en: 'In-depth knowledge of modern web technologies (React, Vue, Next.js). Senior developer who has worked on many international projects.',
            ru: 'Глубокие знания современных веб-технологий (React, Vue, Next.js). Senior разработчик, участвовавший во многих международных проектах.'
        },
        instructorSkills: {
            uz: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'Tailwind CSS'],
            en: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'Tailwind CSS'],
            ru: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'Tailwind CSS']
        },
        instructorEdu: {
            uz: 'Inha Universiteti - Kompyuter injiniringi',
            en: 'Inha University - Computer Science',
            ru: 'Университет Инха - Компьютерный инжиниринг'
        },
        instructorAchieve: {
            uz: 'Jamoa Bilan Ishlash Uzoq Yillik Tajriba. Samarali va Tez ishlash',
            en: 'Many Years of Experience in Teamwork. Efficient and Fast Work',
            ru: 'Многолетний опыт работы в команде. Эффективная и быстрая работа'
        },
        rating: 5.0,
        students: 150,
        duration: '9 Oy',
        price: '399 000 UZS',
        oldPrice: '700 000 UZS',
        category: ['Dasturlash'],
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        instructorImg: imgSardorbek
    },
    {
        id: 3,
        title: 'Backend Dasturlash',
        titleEn: 'Backend Development',
        titleRu: 'Backend Разработка',
        instructor: 'Aliyev Samir',
        instructorSlug: 'backend-senyori',
        instructorBio: {
            uz: 'Node.js va Python (Django) bo\'yicha yuqori malakali mutaxassis. IELTS 8+ Natija. ',
            en: 'Highly qualified specialist in Node.js and Python (Django). Extensive experience in building scalable systems and micro-services.',
            ru: 'Высококвалифицированный специалист по Node.js и Python (Django). Имеет высокий результат IELTS 8+. Большой опыт в построении масштабируемых систем и микросервисов.'
        },
        instructorSkills: {
            uz: ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS'],
            en: ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS'],
            ru: ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS']
        },
        instructorEdu: {
            uz: '1-maktab o\'quvchisi ',
            en: '1st grade student',
            ru: 'Ученик 1-й школы'
        },
        instructorAchieve: {
            uz: 'NamanganMash loyihasi bosh backend me\'mori',
            en: 'Lead backend architect of the NamanganMash project',
            ru: 'Ведущий Backend-архитектор проекта NamanganMash'
        },
        rating: 5.0,
        students: 120,
        duration: '9 Oy',
        price: '499 000 UZS',
        oldPrice: '800 000 UZS',
        category: ['Dasturlash'],
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        instructorImg: samir
    },
    {
        id: 4,
        title: 'Full Stack Dasturlash',
        titleEn: 'Full Stack Development',
        titleRu: 'Fullstack Разработка',
        instructor: 'Ilyosbek Habibullayev',
        instructorSlug: 'senior-mentor',
        instructorBio: {
            uz: 'Individual yondashuv orqali har bir o\'quvchini qisqa vaqtda natijaga olib chiqish bo\'yicha ekspert. IT sohasidagi turli yo\'nalishlarni uyg\'unlashtirgan.',
            en: 'Expert in leading students to results in a short time through an individual approach. Bridges various fields in IT.',
            ru: 'Эксперт по быстрому достижению результатов для каждого ученика через индивидуальный подход. Объединяет различные направления в IT.'
        },
        instructorSkills: {
            uz: ['Karyera bo\'yicha mentorlik', 'Full-stack umumiy ko\'rinishi', 'Loyihalarni boshqarish', 'Soft Skills'],
            en: ['Career Mentoring', 'Full-stack Overview', 'Project Management', 'Soft Skills'],
            ru: ['Карьерное менторство', 'Обзор Full-stack', 'Управление проектами', 'Soft Skills']
        },
        instructorEdu: {
            uz: 'Vestminster xalqaro universiteti',
            en: 'Westminster International University',
            ru: 'Международный Вестминстерский университет'
        },
        instructorAchieve: {
            uz: 'O\'zbekistondagi eng kuchli 10 ta IT mentori ro\'yxatida',
            en: 'Top 10 IT Mentors list in Uzbekistan',
            ru: 'В списке топ-10 IT-менторов Узбекистана'
        },
        rating: 5.0,
        students: 50,
        duration: '5 Oy',
        price: '1 500 000 UZS',
        oldPrice: '2 500 000 UZS',
        category: ['Individual'],
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        instructorImg: img3213
    },
    {
        id: 6,
        title: 'Buxgalteriya',
        titleEn: 'Accounting',
        titleRu: 'Бухгалтерия',
        instructor: 'Bosh Hisobchi',
        instructorSlug: 'bosh-hisobchi',
        instructorBio: {
            uz: '1C: Buxgalteriya va milliy soliq tizimi bo\'yicha kuchli bilimga ega. Ko\'plab yirik korxonalarda moliyaviy maslahatchi sifatida faoliyat yuritgan.',
            en: 'Strong knowledge of 1C: Accounting and national tax system. Financial advisor for many large enterprises.',
            ru: 'Глубокие знания 1C: Бухгалтерия и национальной налоговой системы. Финансовый консультант во многих крупных предприятиях.'
        },
        instructorSkills: {
            uz: ['1C Korxona', 'Soliq hisobi', 'Audit', 'Moliyaviy rejalashtirish'],
            en: ['1C Enterprise', 'Tax Accounting', 'Audit', 'Financial Planning'],
            ru: ['1C Предприятие', 'Налоговый учет', 'Аудит', 'Финансовое планирование']
        },
        instructorEdu: {
            uz: 'Toshkent Davlat Iqtisodiyot Universiteti',
            en: 'Tashkent State University of Economics',
            ru: 'Ташкентский Государственный Экономический Университет'
        },
        instructorAchieve: {
            uz: 'Professional Buxgalter sertifikati egasi',
            en: 'Holder of Professional Accountant Certificate',
            ru: 'Обладатель сертификата профессионального бухгалтера'
        },
        rating: 5.0,
        students: 300,
        duration: '3 Oy',
        price: '700 000 UZS',
        category: ['Boshqa'],
        image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        instructorImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 8,
        title: 'Ingliz tili',
        titleEn: 'English Language',
        titleRu: 'Английский язык',
        instructor: 'Salohiddin Obidov',
        instructorSlug: 'ielts-instruktori',
        instructorBio: {
            uz: 'IELTS 8.5 sohibi. O\'quvchilariga intensiv metodika orqali til o\'rganish sirlarini o\'rgatadi. Ko\'plab o\'quvchilari IELTS 7.5+ ball olgan.',
            en: 'IELTS 8.5 holder. Teaches language secrets through intensive methodology. Many students scored 7.5+ in IELTS.',
            ru: 'Обладатель IELTS 8.5. Обучает секретам языка по интенсивной методике. Многие ученики получили IELTS 7.5+.'
        },
        instructorSkills: {
            uz: ['IELTS tayyorgarlik', 'Akademik yozish', 'Notiqlik san\'ati', 'Grammatika'],
            en: ['IELTS Preparation', 'Academic Writing', 'Public Speaking', 'Grammar'],
            ru: ['Подготовка к IELTS', 'Академическое письмо', 'Ораторское искусство', 'Грамматика']
        },
        instructorEdu: {
            uz: 'O\'zDJTU - Filologiya',
            en: 'UzSWLU - Philology',
            ru: 'УзГУМЯ - Филология'
        },
        instructorAchieve: {
            uz: 'TESOL & CELTA sertifikati egasi',
            en: 'TESOL & CELTA Certified',
            ru: 'Сертифицирован TESOL & CELTA'
        },
        rating: 5.0,
        students: 500,
        duration: '10 Oy',
        price: '199 000 UZS',
        oldPrice: '350 000 UZS',
        category: ['Ingliz tili'],
        badge: 'MOCK Tekin',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        instructorImg: img3206
    },
    {
        id: 9,
        title: 'Koreys tili',
        titleEn: 'Korean Language',
        titleRu: 'Корейский язык',
        instructor: 'Osimxon Rahimjanov',
        instructorSlug: 'koreys-mutaxassisi',
        instructorBio: {
            uz: 'TOPIK 6 sohibi. Koreya universitetlariga grantlar yutish va til o\'rganishda yordam beradi. Janubiy Koreyada 4 yil yashab tahsil olgan.',
            en: 'TOPIK 6 holder. Helps win grants for Korean universities and learn the language. Studied and lived in South Korea for 4 years.',
            ru: 'Обладатель TOPIK 6. Помогает выиграть гранты в корейские университеты и изучить язык. Жил и учился в Южной Корее 4 года.'
        },
        instructorSkills: {
            uz: ['TOPIK tayyorgarlik', 'Koreys madaniyati', 'So\'zlashuv amaliyoti', 'Tarjima'],
            en: ['TOPIK Preparation', 'Korean Culture', 'Speaking Practice', 'Translation'],
            ru: ['Подготовка к TOPIK', 'Корейская культура', 'Разговорная практика', 'Перевод']
        },
        instructorEdu: {
            uz: 'Seul Milliy Universiteti (Talabalar almashinuvi)',
            en: 'Seoul National University (Exchange)',
            ru: 'Сеульский национальный университет (Обмен студентами)'
        },
        instructorAchieve: {
            uz: 'GKS stipendiyasi g\'olibi',
            en: 'GKS Scholarship Winner',
            ru: 'Победитель стипендии GKS'
        },
        rating: 5.0,
        students: 250,
        duration: '6 Oy',
        price: '299 000 UZS',
        oldPrice: '350 000 UZS',
        category: ['Koreys tili'],
        image: koreanImg,
        instructorImg: img3216
    },
    {
        id: 10,
        title: 'Nemis tili',
        titleEn: 'German Language',
        titleRu: 'Немецкий язык',
        instructor: 'Gulmira Asadova',
        instructorSlug: 'nemis-tili-oqituvchisi',
        instructorBio: {
            uz: 'Goethe-Zertifikat C1 sohibi. Nemis tili grammatikasini oson va mazmunli tushuntirib berishda juda mohir.',
            en: 'Goethe-Zertifikat C1 holder. Skilled in explaining German grammar clearly and meaningfully.',
            ru: 'Обладатель Goethe-Zertifikat C1. Мастерски объясняет грамматику немецкого языка просто и доступно.'
        },
        instructorSkills: {
            uz: ['TestDaF tayyorgarlik', 'Nemis tili grammatikasi', 'Suhbatlashuv', 'Goethe imtihoniga tayyorlov'],
            en: ['TestDaF Preparation', 'German Grammar', 'Conversation', 'Goethe Exam Prep'],
            ru: ['Подготовка к TestDaF', 'Грамматика немецкого языка', 'Разговорная практика', 'Подготовка к экзамену Goethe']
        },
        instructorEdu: {
            uz: 'Toshkent Davlat Sharqshunoslik Universiteti',
            en: 'Tashkent State University of Oriental Studies',
            ru: 'Ташкентский государственный университет востоковедения'
        },
        instructorAchieve: {
            uz: 'DAAD Alumni a\'zosi',
            en: 'DAAD Alumni Member',
            ru: 'Член DAAD Alumni'
        },
        rating: 5.0,
        students: 150,
        duration: '6 Oy',
        price: '350 000 UZS',
        category: ['Nemis tili'],
        image: imgNemis,
        instructorImg: img3281
    },
    {
        id: 11,
        title: 'Front-end Dasturlash',
        titleEn: 'Front-end Development',
        titleRu: 'Frontend Разработка',
        instructor: 'Yaxyobek Abduqahharov ',
        instructorSlug: 'frontend-yaxyobek',
        instructorBio: {
            uz: 'Veb-ilovalarning vizual va interaktiv qismlari bo\'yicha mutaxassis. UI/UX tamoyillari va zamonaviy frameworklar (React, Next.js) orqali yuqori sifatli mahsulotlar yaratishga ixtisoslashgan.',
            en: 'Specialist in visual and interactive parts of web applications. Focused on creating high-quality products using UI/UX principles and modern frameworks (React, Next.js).',
            ru: 'Специалист по визуальным и интерактивным частям веб-приложений. Специализируется на создании высококачественных продуктов с использованием принципов UI/UX и современных фреймворков (React, Next.js).'
        },
        instructorSkills: {
            uz: ['HTML/CSS Specialist', 'JavaScript Expert', 'React/Next.js Architecture', 'UI/UX Design Basics'],
            en: ['HTML/CSS Specialist', 'JavaScript Expert', 'React/Next.js Architecture', 'UI/UX Design Basics'],
            ru: ['HTML/CSS Specialist', 'JavaScript Expert', 'React/Next.js Architecture', 'UI/UX Design Basics']
        },
        instructorEdu: {
            uz: 'Inha Universiteti - Computer Science and Engineering',
            en: 'Inha University - Computer Science and Engineering',
            ru: 'Университет Инха - Компьютерные науки и инженерия'
        },
        instructorAchieve: {
            uz: 'Xalqaro hackathonlarda 1-o\'rin sohibi',
            en: '1st place winner in international hackathons',
            ru: 'Победитель международных хакатонов'
        },
        rating: 5.0,
        students: 150,
        duration: '9 Oy',
        price: '399 000 UZS',
        oldPrice: '700 000 UZS',
        category: ['Dasturlash'],
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        instructorImg: imgFrontEnd
    },
    {
        id: 12,
        title: 'Front-end Dasturlash',
        titleEn: 'Front-end Development',
        titleRu: 'Frontend Разработка',
        instructor: 'Muhammadbobur Abdumutallimov',
        instructorSlug: 'frontend-muhammadbobur',
        instructorBio: {
            uz: 'Yosh bo\'lishiga qaramay, Frontend yo\'nalishida katta natijalarga erishgan dasturchi.',
            en: 'Despite being young, he has achieved excellent results in Frontend development.',
            ru: 'Несмотря на молодость, он добился отличных результатов в Frontend-разработке.'
        },
        instructorSkills: {
            uz: ['HTML5 / CSS3', 'Responsive Design', 'JavaScript (ES6+)', 'React Components', 'State Management', 'Git / GitHub'],
            en: ['Responsive Design', 'JavaScript (ES6+)', 'React Components', 'State Management', 'Git / GitHub'],
            ru: ['Адаптивный дизайн', 'JavaScript (ES6+)', 'React компоненты', 'Управление состоянием', 'Git / GitHub']
        },
        instructorEdu: {
            uz: 'Datasite Academy - Advanced Frontend Program',
            en: 'Datasite Academy - Advanced Frontend Program',
            ru: 'Datasite Academy - Продвинутая программа Frontend'
        },
        instructorAchieve: {
            uz: 'Eng yaxshi yosh mentor mukofoti (2024)',
            en: 'Best Young Mentor Award (2024)',
            ru: 'Награда "Лучший молодой ментор" (2024)'
        },
        rating: 5.0,
        students: 250,
        duration: '9 Oy',
        price: '399 000 UZS',
        oldPrice: '700 000 UZS',
        category: ['Dasturlash', 'Russ Tili'],
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        instructorImg: imgmx
    },
    {
        id: 13,
        title: 'Front-end Dasturlash',
        titleEn: 'Front-end Development',
        titleRu: 'Frontend Разработка',
        instructor: 'Ibrohim Sadriddinov ',
        instructorSlug: 'frontend-ibrohim',
        instructorBio: {
            uz: 'Frontend arxitekturasi va unumdorlikni oshirish bo\'yicha ekspert. Katta masshtabdagi veb-tizimlarni loyihalashda boy tajribaga ega Senior mentor.',
            en: 'Expert in Frontend architecture and performance optimization. Senior mentor with rich experience in designing large-scale web systems.',
            ru: 'Эксперт в области Frontend-архитектуры и оптимизации производительности. Senior-ментор с богатым опытом проектирования масштабных веб-систем.'
        },
        instructorSkills: {
            uz: ['Advanced React', 'Performance Optimization', 'Web Security', 'Technical Leadership'],
            en: ['Advanced React', 'Performance Optimization', 'Web Security', 'Technical Leadership'],
            ru: ['Advanced React', 'Оптимизация производительности', 'Веб-безопасность', 'Техническое лидерство']
        },
        instructorEdu: {
            uz: 'Toshkent Axborot Texnologiyalari Universiteti',
            en: 'Tashkent University of Information Technologies',
            ru: 'Ташкентский университет информационных технологий'
        },
        instructorAchieve: {
            uz: '50+ muvaffaqiyatli bitirgan Senior dasturchilar ustozi',
            en: 'Mentor of 50+ successful Senior developers',
            ru: 'Наставник более 50 успешных Senior-разработчиков'
        },
        rating: 5.0,
        students: 100,
        duration: '9 Oy',
        price: '399 000 UZS',
        oldPrice: '700 000 UZS',
        category: ['Russ Tili'],
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        instructorImg: imgibo
    },
    {
        id: 14,
        title: 'Ingliz tili',
        titleEn: 'English Language',
        titleRu: 'Английский язык',
        instructor: 'Nurilloh Khayitboev',
        instructorSlug: 'ielts-nurillo',
        instructorBio: {
            uz: 'Ingliz tilini o\'rganishda kreativ yondashuv tarafdori. Grammatikani qiziqarli o\'yinlar va amaliyot orqali tushuntirish bo\'yicha mutaxassis.',
            en: 'Advocate for a creative approach to learning English. Specialist in explaining grammar through interesting games and practice.',
            ru: 'Сторонник креативного подхода к изучению английского языка. Специалист по объяснению грамматики через интересные игры и практику.'
        },
        instructorSkills: {
            uz: ['Interactive Teaching', 'Grammar Simplified', 'Vocabulary Building', 'Student Motivation'],
            en: ['Interactive Teaching', 'Grammar Simplified', 'Vocabulary Building', 'Student Motivation'],
            ru: ['Интерактивное обучение', 'Упрощенная грамматика', 'Расширение словарного запаса', 'Мотивация студентов']
        },
        instructorEdu: {
            uz: 'O\'zbekiston Davlat Jahon Tillari Universiteti - Ingliz filologiyasi',
            en: 'Uzbekistan State World Languages University - English Philology',
            ru: 'Узбекский государственный университет мировых языков - Английская филология'
        },
        instructorAchieve: {
            uz: 'IELTS Band 8.0 sohibi',
            en: 'IELTS Band 8.0 holder',
            ru: 'Обладатель IELTS Band 8.0'
        },
        rating: 5.0,
        students: 500,
        duration: '10 Oy',
        price: '199 000 UZS',
        oldPrice: '350 000 UZS',
        category: ['Ingliz tili'],
        badge: 'MOCK Tekin',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        instructorImg: imgnurillox
    },
    {
        id: 15,
        title: 'Ingliz tili',
        titleEn: 'English Language',
        titleRu: 'Английский язык',
        instructor: 'Javohir Qosimov',
        instructorSlug: 'ielts-javohir',
        instructorBio: {
            uz: 'Til o\'rganuvchilarning gapirish qobiliyatini (Speaking) rivojlantirishga e\'tibor qaratadi. IELTS imtihonining barcha bosqichlari bo\'yicha chuqur bilimga ega.',
            en: 'Focuses on developing the speaking skills of language learners. Has in-depth knowledge of all stages of the IELTS exam.',
            ru: 'Фокусируется на развитии навыков говорения (Speaking) у изучающих язык. Обладает глубокими знаниями всех этапов экзамена IELTS.'
        },
        instructorSkills: {
            uz: ['Speaking Fluency', 'Exam Strategy', 'Critical Thinking', 'Essay Writing'],
            en: ['Speaking Fluency', 'Exam Strategy', 'Critical Thinking', 'Essay Writing'],
            ru: ['Беглость речи', 'Стратегия экзамена', 'Критическое мышление', 'Написание эссе']
        },
        instructorEdu: {
            uz: 'O\'zbekiston Davlat Jahon Tillari Universiteti',
            en: 'Uzbekistan State World Languages University',
            ru: 'Узбекский государственный университет мировых языков'
        },
        instructorAchieve: {
            uz: 'Cambridge CELTA sertifikati',
            en: 'Cambridge CELTA Certificate',
            ru: 'Сертификат Cambridge CELTA'
        },
        rating: 5.0,
        students: 500,
        duration: '10 Oy',
        price: '199 000 UZS',
        oldPrice: '350 000 UZS',
        category: ['Kompyuter savodxonligi', 'Russ Tili', 'Ingliz tili'],
        badge: 'MOCK Tekin',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        instructorImg: imgjavohir
    },
    {
        id: 16,
        title: 'Front-end Dasturlash',
        titleEn: 'Front-end Development',
        titleRu: 'Frontend Разработка',
        instructor: 'Muhammadjon Abduqahharov ',
        instructorSlug: 'frontend-muhammadjon',
        instructorBio: {
            uz: 'Mukammal tajribaga ega full-stack dasturchi. Real loyihalar orqali o\'quvchilarga kod yozish madaniyati va arxitektura sirlarini o\'rgatadi.',
            en: 'Full-stack developer with perfect experience. Teaches students the code culture and architectural secrets through real projects.',
            ru: 'Full-stack разработчик с отличным опытом. Обучает студентов культуре кода и секретам архитектуры через реальные проекты.'
        },
        instructorSkills: {
            uz: ['Full-stack Expertise', 'Clean Code', 'API Design', 'DevOps Basics'],
            en: ['Full-stack Expertise', 'Clean Code', 'API Design', 'DevOps Basics'],
            ru: ['Full-stack экспертиза', 'Чистый код', 'Проектирование API', 'Основы DevOps']
        },
        instructorEdu: {
            uz: 'Inha Universiteti Toshkent',
            en: 'Inha University Tashkent',
            ru: 'Университет Инха в Ташкенте'
        },
        instructorAchieve: {
            uz: 'Top-tier loyihalar Team Lead-i',
            en: 'Team Lead of top-tier projects',
            ru: 'Team Lead проектов высшего уровня'
        },
        rating: 5.0,
        students: 150,
        duration: '9 Oy',
        price: '399 000 UZS',
        oldPrice: '700 000 UZS',
        category: ['Dasturlash'],
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        instructorImg: imgMuhammad
    },

];
