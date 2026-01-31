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
        titleRu: '╨Ъ╨╛╨╝╨┐╤М╤О╤В╨╡╤А╨╜╨░╤П ╨│╤А╨░╨╝╨╛╤В╨╜╨╛╤Б╤В╤М',
        instructor: 'Zokirjon Ahmadqulov',
        instructorSlug: 'datasite-ustozi',
        instructorBio: {
            uz: 'Kompyuter texnologiyalari va ofis dasturlari bo\'yicha ko\'p yillik tajribaga ega mutaxassis. Yuqori natijalarga erishgan 500 dan ortiq shogirdlar tayyorlagan.',
            en: 'Specialist with years of experience in computer technology and office programs. Taught over 500 highly successful students.',
            ru: '╨б╨┐╨╡╤Ж╨╕╨░╨╗╨╕╤Б╤В ╤Б ╨╝╨╜╨╛╨│╨╛╨╗╨╡╤В╨╜╨╕╨╝ ╨╛╨┐╤Л╤В╨╛╨╝ ╤А╨░╨▒╨╛╤В╤Л ╨▓ ╨╛╨▒╨╗╨░╤Б╤В╨╕ ╨║╨╛╨╝╨┐╤М╤О╤В╨╡╤А╨╜╤Л╤Е ╤В╨╡╤Е╨╜╨╛╨╗╨╛╨│╨╕╨╣ ╨╕ ╨╛╤Д╨╕╤Б╨╜╤Л╤Е ╨┐╤А╨╛╨│╤А╨░╨╝╨╝. ╨Я╨╛╨┤╨│╨╛╤В╨╛╨▓╨╕╨╗ ╨▒╨╛╨╗╨╡╨╡ 500 ╤Г╤Б╨┐╨╡╤И╨╜╤Л╤Е ╤Г╤З╨╡╨╜╨╕╨║╨╛╨▓.'
        },
        instructorSkills: {
            uz: ['Microsoft Office', 'Windows OS', 'Apparat diagnostikasi', 'Tarmoq asoslari'],
            en: ['Microsoft Office', 'Windows OS', 'Hardware Diagnostics', 'Basic Networking'],
            ru: ['Microsoft Office', 'Windows OS', '╨Р╨┐╨┐╨░╤А╨░╤В╨╜╨░╤П ╨┤╨╕╨░╨│╨╜╨╛╤Б╤В╨╕╨║╨░', '╨Ю╤Б╨╜╨╛╨▓╤Л ╤Б╨╡╤В╨╡╨╣']
        },
        instructorEdu: {
            uz: 'TATU - Axborot texnologiyalari fakulteti',
            en: 'TUIT - Information Technology Faculty',
            ru: '╨в╨г╨Ш╨в - ╨д╨░╨║╤Г╨╗╤М╤В╨╡╤В ╨╕╨╜╤Д╨╛╤А╨╝╨░╤Ж╨╕╨╛╨╜╨╜╤Л╤Е ╤В╨╡╤Е╨╜╨╛╨╗╨╛╨│╨╕╨╣'
        },
        instructorAchieve: {
            uz: 'Yilning eng yaxshi o\'qituvchisi (2022)',
            en: 'Instructor of the Year (2022)',
            ru: '╨г╤З╨╕╤В╨╡╨╗╤М ╨│╨╛╨┤╨░ (2022)'
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
        titleRu: 'Frontend ╨а╨░╨╖╤А╨░╨▒╨╛╤В╨║╨░',
        instructor: 'Sardorbek Daminov ',
        instructorSlug: 'frontend-eksperti',
        instructorBio: {
            uz: 'Zamonaviy veb-texnologiyalar (React, Vue, Next.js) bo\'yicha chuqur bilimga ega. Ko\'plab xalqaro loyihalarda ishtirok etgan Senior dasturchi.',
            en: 'In-depth knowledge of modern web technologies (React, Vue, Next.js). Senior developer who has worked on many international projects.',
            ru: '╨У╨╗╤Г╨▒╨╛╨║╨╕╨╡ ╨╖╨╜╨░╨╜╨╕╤П ╤Б╨╛╨▓╤А╨╡╨╝╨╡╨╜╨╜╤Л╤Е ╨▓╨╡╨▒-╤В╨╡╤Е╨╜╨╛╨╗╨╛╨│╨╕╨╣ (React, Vue, Next.js). Senior ╤А╨░╨╖╤А╨░╨▒╨╛╤В╤З╨╕╨║, ╤Г╤З╨░╤Б╤В╨▓╨╛╨▓╨░╨▓╤И╨╕╨╣ ╨▓╨╛ ╨╝╨╜╨╛╨│╨╕╤Е ╨╝╨╡╨╢╨┤╤Г╨╜╨░╤А╨╛╨┤╨╜╤Л╤Е ╨┐╤А╨╛╨╡╨║╤В╨░╤Е.'
        },
        instructorSkills: {
            uz: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'Tailwind CSS'],
            en: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'Tailwind CSS'],
            ru: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'Tailwind CSS']
        },
        instructorEdu: {
            uz: 'Inha Universiteti - Kompyuter injiniringi',
            en: 'Inha University - Computer Science',
            ru: '╨г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В ╨Ш╨╜╤Е╨░ - ╨Ъ╨╛╨╝╨┐╤М╤О╤В╨╡╤А╨╜╤Л╨╣ ╨╕╨╜╨╢╨╕╨╜╨╕╤А╨╕╨╜╨│'
        },
        instructorAchieve: {
            uz: 'Jamoa Bilan Ishlash Uzoq Yillik Tajriba. Samarali va Tez ishlash',
            en: 'Many Years of Experience in Teamwork. Efficient and Fast Work',
            ru: '╨Ь╨╜╨╛╨│╨╛╨╗╨╡╤В╨╜╨╕╨╣ ╨╛╨┐╤Л╤В ╤А╨░╨▒╨╛╤В╤Л ╨▓ ╨║╨╛╨╝╨░╨╜╨┤╨╡. ╨н╤Д╤Д╨╡╨║╤В╨╕╨▓╨╜╨░╤П ╨╕ ╨▒╤Л╤Б╤В╤А╨░╤П ╤А╨░╨▒╨╛╤В╨░'
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
        titleRu: 'Backend ╨а╨░╨╖╤А╨░╨▒╨╛╤В╨║╨░',
        instructor: 'Aliyev Samir',
        instructorSlug: 'backend-senyori',
        instructorBio: {
            uz: 'Node.js va Python (Django) bo\'yicha yuqori malakali mutaxassis. IELTS 8+ Natija. ',
            en: 'Highly qualified specialist in Node.js and Python (Django). Extensive experience in building scalable systems and micro-services.',
            ru: '╨Т╤Л╤Б╨╛╨║╨╛╨║╨▓╨░╨╗╨╕╤Д╨╕╤Ж╨╕╤А╨╛╨▓╨░╨╜╨╜╤Л╨╣ ╤Б╨┐╨╡╤Ж╨╕╨░╨╗╨╕╤Б╤В ╨┐╨╛ Node.js ╨╕ Python (Django). ╨Ш╨╝╨╡╨╡╤В ╨▓╤Л╤Б╨╛╨║╨╕╨╣ ╤А╨╡╨╖╤Г╨╗╤М╤В╨░╤В IELTS 8+. ╨С╨╛╨╗╤М╤И╨╛╨╣ ╨╛╨┐╤Л╤В ╨▓ ╨┐╨╛╤Б╤В╤А╨╛╨╡╨╜╨╕╨╕ ╨╝╨░╤Б╤И╤В╨░╨▒╨╕╤А╤Г╨╡╨╝╤Л╤Е ╤Б╨╕╤Б╤В╨╡╨╝ ╨╕ ╨╝╨╕╨║╤А╨╛╤Б╨╡╤А╨▓╨╕╤Б╨╛╨▓.'
        },
        instructorSkills: {
            uz: ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS'],
            en: ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS'],
            ru: ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS']
        },
        instructorEdu: {
            uz: '1-maktab o\'quvchisi ',
            en: '1st grade student',
            ru: '╨г╤З╨╡╨╜╨╕╨║ 1-╨╣ ╤И╨║╨╛╨╗╤Л'
        },
        instructorAchieve: {
            uz: 'NamanganMash loyihasi bosh backend me\'mori',
            en: 'Lead backend architect of the NamanganMash project',
            ru: '╨Т╨╡╨┤╤Г╤Й╨╕╨╣ Backend-╨░╤А╤Е╨╕╤В╨╡╨║╤В╨╛╤А ╨┐╤А╨╛╨╡╨║╤В╨░ NamanganMash'
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
        titleRu: 'Fullstack ╨а╨░╨╖╤А╨░╨▒╨╛╤В╨║╨░',
        instructor: 'Ilyosbek Habibullayev',
        instructorSlug: 'senior-mentor',
        instructorBio: {
            uz: 'Individual yondashuv orqali har bir o\'quvchini qisqa vaqtda natijaga olib chiqish bo\'yicha ekspert. IT sohasidagi turli yo\'nalishlarni uyg\'unlashtirgan.',
            en: 'Expert in leading students to results in a short time through an individual approach. Bridges various fields in IT.',
            ru: '╨н╨║╤Б╨┐╨╡╤А╤В ╨┐╨╛ ╨▒╤Л╤Б╤В╤А╨╛╨╝╤Г ╨┤╨╛╤Б╤В╨╕╨╢╨╡╨╜╨╕╤О ╤А╨╡╨╖╤Г╨╗╤М╤В╨░╤В╨╛╨▓ ╨┤╨╗╤П ╨║╨░╨╢╨┤╨╛╨│╨╛ ╤Г╤З╨╡╨╜╨╕╨║╨░ ╤З╨╡╤А╨╡╨╖ ╨╕╨╜╨┤╨╕╨▓╨╕╨┤╤Г╨░╨╗╤М╨╜╤Л╨╣ ╨┐╨╛╨┤╤Е╨╛╨┤. ╨Ю╨▒╤К╨╡╨┤╨╕╨╜╤П╨╡╤В ╤А╨░╨╖╨╗╨╕╤З╨╜╤Л╨╡ ╨╜╨░╨┐╤А╨░╨▓╨╗╨╡╨╜╨╕╤П ╨▓ IT.'
        },
        instructorSkills: {
            uz: ['Karyera bo\'yicha mentorlik', 'Full-stack umumiy ko\'rinishi', 'Loyihalarni boshqarish', 'Soft Skills'],
            en: ['Career Mentoring', 'Full-stack Overview', 'Project Management', 'Soft Skills'],
            ru: ['╨Ъ╨░╤А╤М╨╡╤А╨╜╨╛╨╡ ╨╝╨╡╨╜╤В╨╛╤А╤Б╤В╨▓╨╛', '╨Ю╨▒╨╖╨╛╤А Full-stack', '╨г╨┐╤А╨░╨▓╨╗╨╡╨╜╨╕╨╡ ╨┐╤А╨╛╨╡╨║╤В╨░╨╝╨╕', 'Soft Skills']
        },
        instructorEdu: {
            uz: 'Vestminster xalqaro universiteti',
            en: 'Westminster International University',
            ru: '╨Ь╨╡╨╢╨┤╤Г╨╜╨░╤А╨╛╨┤╨╜╤Л╨╣ ╨Т╨╡╤Б╤В╨╝╨╕╨╜╤Б╤В╨╡╤А╤Б╨║╨╕╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В'
        },
        instructorAchieve: {
            uz: 'O\'zbekistondagi eng kuchli 10 ta IT mentori ro\'yxatida',
            en: 'Top 10 IT Mentors list in Uzbekistan',
            ru: '╨Т ╤Б╨┐╨╕╤Б╨║╨╡ ╤В╨╛╨┐-10 IT-╨╝╨╡╨╜╤В╨╛╤А╨╛╨▓ ╨г╨╖╨▒╨╡╨║╨╕╤Б╤В╨░╨╜╨░'
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
        titleRu: '╨С╤Г╤Е╨│╨░╨╗╤В╨╡╤А╨╕╤П',
        instructor: 'Bosh Hisobchi',
        instructorSlug: 'bosh-hisobchi',
        instructorBio: {
            uz: '1C: Buxgalteriya va milliy soliq tizimi bo\'yicha kuchli bilimga ega. Ko\'plab yirik korxonalarda moliyaviy maslahatchi sifatida faoliyat yuritgan.',
            en: 'Strong knowledge of 1C: Accounting and national tax system. Financial advisor for many large enterprises.',
            ru: '╨У╨╗╤Г╨▒╨╛╨║╨╕╨╡ ╨╖╨╜╨░╨╜╨╕╤П 1C: ╨С╤Г╤Е╨│╨░╨╗╤В╨╡╤А╨╕╤П ╨╕ ╨╜╨░╤Ж╨╕╨╛╨╜╨░╨╗╤М╨╜╨╛╨╣ ╨╜╨░╨╗╨╛╨│╨╛╨▓╨╛╨╣ ╤Б╨╕╤Б╤В╨╡╨╝╤Л. ╨д╨╕╨╜╨░╨╜╤Б╨╛╨▓╤Л╨╣ ╨║╨╛╨╜╤Б╤Г╨╗╤М╤В╨░╨╜╤В ╨▓╨╛ ╨╝╨╜╨╛╨│╨╕╤Е ╨║╤А╤Г╨┐╨╜╤Л╤Е ╨┐╤А╨╡╨┤╨┐╤А╨╕╤П╤В╨╕╤П╤Е.'
        },
        instructorSkills: {
            uz: ['1C Korxona', 'Soliq hisobi', 'Audit', 'Moliyaviy rejalashtirish'],
            en: ['1C Enterprise', 'Tax Accounting', 'Audit', 'Financial Planning'],
            ru: ['1C ╨Я╤А╨╡╨┤╨┐╤А╨╕╤П╤В╨╕╨╡', '╨Э╨░╨╗╨╛╨│╨╛╨▓╤Л╨╣ ╤Г╤З╨╡╤В', '╨Р╤Г╨┤╨╕╤В', '╨д╨╕╨╜╨░╨╜╤Б╨╛╨▓╨╛╨╡ ╨┐╨╗╨░╨╜╨╕╤А╨╛╨▓╨░╨╜╨╕╨╡']
        },
        instructorEdu: {
            uz: 'Toshkent Davlat Iqtisodiyot Universiteti',
            en: 'Tashkent State University of Economics',
            ru: '╨в╨░╤И╨║╨╡╨╜╤В╤Б╨║╨╕╨╣ ╨У╨╛╤Б╤Г╨┤╨░╤А╤Б╤В╨▓╨╡╨╜╨╜╤Л╨╣ ╨н╨║╨╛╨╜╨╛╨╝╨╕╤З╨╡╤Б╨║╨╕╨╣ ╨г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В'
        },
        instructorAchieve: {
            uz: 'Professional Buxgalter sertifikati egasi',
            en: 'Holder of Professional Accountant Certificate',
            ru: '╨Ю╨▒╨╗╨░╨┤╨░╤В╨╡╨╗╤М ╤Б╨╡╤А╤В╨╕╤Д╨╕╨║╨░╤В╨░ ╨┐╤А╨╛╤Д╨╡╤Б╤Б╨╕╨╛╨╜╨░╨╗╤М╨╜╨╛╨│╨╛ ╨▒╤Г╤Е╨│╨░╨╗╤В╨╡╤А╨░'
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
        titleRu: '╨Р╨╜╨│╨╗╨╕╨╣╤Б╨║╨╕╨╣ ╤П╨╖╤Л╨║',
        instructor: 'Salohiddin Obidov',
        instructorSlug: 'ielts-instruktori',
        instructorBio: {
            uz: 'IELTS 8.5 sohibi. O\'quvchilariga intensiv metodika orqali til o\'rganish sirlarini o\'rgatadi. Ko\'plab o\'quvchilari IELTS 7.5+ ball olgan.',
            en: 'IELTS 8.5 holder. Teaches language secrets through intensive methodology. Many students scored 7.5+ in IELTS.',
            ru: '╨Ю╨▒╨╗╨░╨┤╨░╤В╨╡╨╗╤М IELTS 8.5. ╨Ю╨▒╤Г╤З╨░╨╡╤В ╤Б╨╡╨║╤А╨╡╤В╨░╨╝ ╤П╨╖╤Л╨║╨░ ╨┐╨╛ ╨╕╨╜╤В╨╡╨╜╤Б╨╕╨▓╨╜╨╛╨╣ ╨╝╨╡╤В╨╛╨┤╨╕╨║╨╡. ╨Ь╨╜╨╛╨│╨╕╨╡ ╤Г╤З╨╡╨╜╨╕╨║╨╕ ╨┐╨╛╨╗╤Г╤З╨╕╨╗╨╕ IELTS 7.5+.'
        },
        instructorSkills: {
            uz: ['IELTS tayyorgarlik', 'Akademik yozish', 'Notiqlik san\'ati', 'Grammatika'],
            en: ['IELTS Preparation', 'Academic Writing', 'Public Speaking', 'Grammar'],
            ru: ['╨Я╨╛╨┤╨│╨╛╤В╨╛╨▓╨║╨░ ╨║ IELTS', '╨Р╨║╨░╨┤╨╡╨╝╨╕╤З╨╡╤Б╨║╨╛╨╡ ╨┐╨╕╤Б╤М╨╝╨╛', '╨Ю╤А╨░╤В╨╛╤А╤Б╨║╨╛╨╡ ╨╕╤Б╨║╤Г╤Б╤Б╤В╨▓╨╛', '╨У╤А╨░╨╝╨╝╨░╤В╨╕╨║╨░']
        },
        instructorEdu: {
            uz: 'O\'zDJTU - Filologiya',
            en: 'UzSWLU - Philology',
            ru: '╨г╨╖╨У╨г╨Ь╨п - ╨д╨╕╨╗╨╛╨╗╨╛╨│╨╕╤П'
        },
        instructorAchieve: {
            uz: 'TESOL & CELTA sertifikati egasi',
            en: 'TESOL & CELTA Certified',
            ru: '╨б╨╡╤А╤В╨╕╤Д╨╕╤Ж╨╕╤А╨╛╨▓╨░╨╜ TESOL & CELTA'
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
        titleRu: '╨Ъ╨╛╤А╨╡╨╣╤Б╨║╨╕╨╣ ╤П╨╖╤Л╨║',
        instructor: 'Osimxon Rahimjanov',
        instructorSlug: 'koreys-mutaxassisi',
        instructorBio: {
            uz: 'TOPIK 6 sohibi. Koreya universitetlariga grantlar yutish va til o\'rganishda yordam beradi. Janubiy Koreyada 4 yil yashab tahsil olgan.',
            en: 'TOPIK 6 holder. Helps win grants for Korean universities and learn the language. Studied and lived in South Korea for 4 years.',
            ru: '╨Ю╨▒╨╗╨░╨┤╨░╤В╨╡╨╗╤М TOPIK 6. ╨Я╨╛╨╝╨╛╨│╨░╨╡╤В ╨▓╤Л╨╕╨│╤А╨░╤В╤М ╨│╤А╨░╨╜╤В╤Л ╨▓ ╨║╨╛╤А╨╡╨╣╤Б╨║╨╕╨╡ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В╤Л ╨╕ ╨╕╨╖╤Г╤З╨╕╤В╤М ╤П╨╖╤Л╨║. ╨Ц╨╕╨╗ ╨╕ ╤Г╤З╨╕╨╗╤Б╤П ╨▓ ╨о╨╢╨╜╨╛╨╣ ╨Ъ╨╛╤А╨╡╨╡ 4 ╨│╨╛╨┤╨░.'
        },
        instructorSkills: {
            uz: ['TOPIK tayyorgarlik', 'Koreys madaniyati', 'So\'zlashuv amaliyoti', 'Tarjima'],
            en: ['TOPIK Preparation', 'Korean Culture', 'Speaking Practice', 'Translation'],
            ru: ['╨Я╨╛╨┤╨│╨╛╤В╨╛╨▓╨║╨░ ╨║ TOPIK', '╨Ъ╨╛╤А╨╡╨╣╤Б╨║╨░╤П ╨║╤Г╨╗╤М╤В╤Г╤А╨░', '╨а╨░╨╖╨│╨╛╨▓╨╛╤А╨╜╨░╤П ╨┐╤А╨░╨║╤В╨╕╨║╨░', '╨Я╨╡╤А╨╡╨▓╨╛╨┤']
        },
        instructorEdu: {
            uz: 'Seul Milliy Universiteti (Talabalar almashinuvi)',
            en: 'Seoul National University (Exchange)',
            ru: '╨б╨╡╤Г╨╗╤М╤Б╨║╨╕╨╣ ╨╜╨░╤Ж╨╕╨╛╨╜╨░╨╗╤М╨╜╤Л╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В (╨Ю╨▒╨╝╨╡╨╜ ╤Б╤В╤Г╨┤╨╡╨╜╤В╨░╨╝╨╕)'
        },
        instructorAchieve: {
            uz: 'GKS stipendiyasi g\'olibi',
            en: 'GKS Scholarship Winner',
            ru: '╨Я╨╛╨▒╨╡╨┤╨╕╤В╨╡╨╗╤М ╤Б╤В╨╕╨┐╨╡╨╜╨┤╨╕╨╕ GKS'
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
        titleRu: '╨Э╨╡╨╝╨╡╤Ж╨║╨╕╨╣ ╤П╨╖╤Л╨║',
        instructor: 'Gulmira Asadova',
        instructorSlug: 'nemis-tili-oqituvchisi',
        instructorBio: {
            uz: 'Goethe-Zertifikat C1 sohibi. Nemis tili grammatikasini oson va mazmunli tushuntirib berishda juda mohir.',
            en: 'Goethe-Zertifikat C1 holder. Skilled in explaining German grammar clearly and meaningfully.',
            ru: '╨Ю╨▒╨╗╨░╨┤╨░╤В╨╡╨╗╤М Goethe-Zertifikat C1. ╨Ь╨░╤Б╤В╨╡╤А╤Б╨║╨╕ ╨╛╨▒╤К╤П╤Б╨╜╤П╨╡╤В ╨│╤А╨░╨╝╨╝╨░╤В╨╕╨║╤Г ╨╜╨╡╨╝╨╡╤Ж╨║╨╛╨│╨╛ ╤П╨╖╤Л╨║╨░ ╨┐╤А╨╛╤Б╤В╨╛ ╨╕ ╨┤╨╛╤Б╤В╤Г╨┐╨╜╨╛.'
        },
        instructorSkills: {
            uz: ['TestDaF tayyorgarlik', 'Nemis tili grammatikasi', 'Suhbatlashuv', 'Goethe imtihoniga tayyorlov'],
            en: ['TestDaF Preparation', 'German Grammar', 'Conversation', 'Goethe Exam Prep'],
            ru: ['╨Я╨╛╨┤╨│╨╛╤В╨╛╨▓╨║╨░ ╨║ TestDaF', '╨У╤А╨░╨╝╨╝╨░╤В╨╕╨║╨░ ╨╜╨╡╨╝╨╡╤Ж╨║╨╛╨│╨╛ ╤П╨╖╤Л╨║╨░', '╨а╨░╨╖╨│╨╛╨▓╨╛╤А╨╜╨░╤П ╨┐╤А╨░╨║╤В╨╕╨║╨░', '╨Я╨╛╨┤╨│╨╛╤В╨╛╨▓╨║╨░ ╨║ ╤Н╨║╨╖╨░╨╝╨╡╨╜╤Г Goethe']
        },
        instructorEdu: {
            uz: 'Toshkent Davlat Sharqshunoslik Universiteti',
            en: 'Tashkent State University of Oriental Studies',
            ru: '╨в╨░╤И╨║╨╡╨╜╤В╤Б╨║╨╕╨╣ ╨│╨╛╤Б╤Г╨┤╨░╤А╤Б╤В╨▓╨╡╨╜╨╜╤Л╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В ╨▓╨╛╤Б╤В╨╛╨║╨╛╨▓╨╡╨┤╨╡╨╜╨╕╤П'
        },
        instructorAchieve: {
            uz: 'DAAD Alumni a\'zosi',
            en: 'DAAD Alumni Member',
            ru: '╨з╨╗╨╡╨╜ DAAD Alumni'
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
        titleRu: 'Frontend ╨а╨░╨╖╤А╨░╨▒╨╛╤В╨║╨░',
        instructor: 'Yaxyobek Abduqahharov ',
        instructorSlug: 'frontend-yaxyobek',
        instructorBio: {
            uz: 'Veb-ilovalarning vizual va interaktiv qismlari bo\'yicha mutaxassis. UI/UX tamoyillari va zamonaviy frameworklar (React, Next.js) orqali yuqori sifatli mahsulotlar yaratishga ixtisoslashgan.',
            en: 'Specialist in visual and interactive parts of web applications. Focused on creating high-quality products using UI/UX principles and modern frameworks (React, Next.js).',
            ru: '╨б╨┐╨╡╤Ж╨╕╨░╨╗╨╕╤Б╤В ╨┐╨╛ ╨▓╨╕╨╖╤Г╨░╨╗╤М╨╜╤Л╨╝ ╨╕ ╨╕╨╜╤В╨╡╤А╨░╨║╤В╨╕╨▓╨╜╤Л╨╝ ╤З╨░╤Б╤В╤П╨╝ ╨▓╨╡╨▒-╨┐╤А╨╕╨╗╨╛╨╢╨╡╨╜╨╕╨╣. ╨б╨┐╨╡╤Ж╨╕╨░╨╗╨╕╨╖╨╕╤А╤Г╨╡╤В╤Б╤П ╨╜╨░ ╤Б╨╛╨╖╨┤╨░╨╜╨╕╨╕ ╨▓╤Л╤Б╨╛╨║╨╛╨║╨░╤З╨╡╤Б╤В╨▓╨╡╨╜╨╜╤Л╤Е ╨┐╤А╨╛╨┤╤Г╨║╤В╨╛╨▓ ╤Б ╨╕╤Б╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╨╜╨╕╨╡╨╝ ╨┐╤А╨╕╨╜╤Ж╨╕╨┐╨╛╨▓ UI/UX ╨╕ ╤Б╨╛╨▓╤А╨╡╨╝╨╡╨╜╨╜╤Л╤Е ╤Д╤А╨╡╨╣╨╝╨▓╨╛╤А╨║╨╛╨▓ (React, Next.js).'
        },
        instructorSkills: {
            uz: ['HTML/CSS Specialist', 'JavaScript Expert', 'React/Next.js Architecture', 'UI/UX Design Basics'],
            en: ['HTML/CSS Specialist', 'JavaScript Expert', 'React/Next.js Architecture', 'UI/UX Design Basics'],
            ru: ['HTML/CSS Specialist', 'JavaScript Expert', 'React/Next.js Architecture', 'UI/UX Design Basics']
        },
        instructorEdu: {
            uz: 'Inha Universiteti - Computer Science and Engineering',
            en: 'Inha University - Computer Science and Engineering',
            ru: '╨г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В ╨Ш╨╜╤Е╨░ - ╨Ъ╨╛╨╝╨┐╤М╤О╤В╨╡╤А╨╜╤Л╨╡ ╨╜╨░╤Г╨║╨╕ ╨╕ ╨╕╨╜╨╢╨╡╨╜╨╡╤А╨╕╤П'
        },
        instructorAchieve: {
            uz: 'Xalqaro hackathonlarda 1-o\'rin sohibi',
            en: '1st place winner in international hackathons',
            ru: '╨Я╨╛╨▒╨╡╨┤╨╕╤В╨╡╨╗╤М ╨╝╨╡╨╢╨┤╤Г╨╜╨░╤А╨╛╨┤╨╜╤Л╤Е ╤Е╨░╨║╨░╤В╨╛╨╜╨╛╨▓'
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
        titleRu: 'Frontend ╨а╨░╨╖╤А╨░╨▒╨╛╤В╨║╨░',
        instructor: 'Muhammadbobur Abdumutallimov',
        instructorSlug: 'frontend-muhammadbobur',
        instructorBio: {
            uz: 'Yosh bo\'lishiga qaramay, Frontend yo\'nalishida katta natijalarga erishgan dasturchi.',
            en: 'Despite being young, he has achieved excellent results in Frontend development.',
            ru: '╨Э╨╡╤Б╨╝╨╛╤В╤А╤П ╨╜╨░ ╨╝╨╛╨╗╨╛╨┤╨╛╤Б╤В╤М, ╨╛╨╜ ╨┤╨╛╨▒╨╕╨╗╤Б╤П ╨╛╤В╨╗╨╕╤З╨╜╤Л╤Е ╤А╨╡╨╖╤Г╨╗╤М╤В╨░╤В╨╛╨▓ ╨▓ Frontend-╤А╨░╨╖╤А╨░╨▒╨╛╤В╨║╨╡.'
        },
        instructorSkills: {
            uz: ['HTML5 / CSS3', 'Responsive Design', 'JavaScript (ES6+)', 'React Components', 'State Management', 'Git / GitHub'],
            en: ['Responsive Design', 'JavaScript (ES6+)', 'React Components', 'State Management', 'Git / GitHub'],
            ru: ['╨Р╨┤╨░╨┐╤В╨╕╨▓╨╜╤Л╨╣ ╨┤╨╕╨╖╨░╨╣╨╜', 'JavaScript (ES6+)', 'React ╨║╨╛╨╝╨┐╨╛╨╜╨╡╨╜╤В╤Л', '╨г╨┐╤А╨░╨▓╨╗╨╡╨╜╨╕╨╡ ╤Б╨╛╤Б╤В╨╛╤П╨╜╨╕╨╡╨╝', 'Git / GitHub']
        },
        instructorEdu: {
            uz: 'Datasite Academy - Advanced Frontend Program',
            en: 'Datasite Academy - Advanced Frontend Program',
            ru: 'Datasite Academy - ╨Я╤А╨╛╨┤╨▓╨╕╨╜╤Г╤В╨░╤П ╨┐╤А╨╛╨│╤А╨░╨╝╨╝╨░ Frontend'
        },
        instructorAchieve: {
            uz: 'Eng yaxshi yosh mentor mukofoti (2024)',
            en: 'Best Young Mentor Award (2024)',
            ru: '╨Э╨░╨│╤А╨░╨┤╨░ "╨Ы╤Г╤З╤И╨╕╨╣ ╨╝╨╛╨╗╨╛╨┤╨╛╨╣ ╨╝╨╡╨╜╤В╨╛╤А" (2024)'
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
        titleRu: 'Frontend ╨а╨░╨╖╤А╨░╨▒╨╛╤В╨║╨░',
        instructor: 'Ibrohim Sadriddinov ',
        instructorSlug: 'frontend-ibrohim',
        instructorBio: {
            uz: 'Frontend arxitekturasi va unumdorlikni oshirish bo\'yicha ekspert. Katta masshtabdagi veb-tizimlarni loyihalashda boy tajribaga ega Senior mentor.',
            en: 'Expert in Frontend architecture and performance optimization. Senior mentor with rich experience in designing large-scale web systems.',
            ru: '╨н╨║╤Б╨┐╨╡╤А╤В ╨▓ ╨╛╨▒╨╗╨░╤Б╤В╨╕ Frontend-╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╤Л ╨╕ ╨╛╨┐╤В╨╕╨╝╨╕╨╖╨░╤Ж╨╕╨╕ ╨┐╤А╨╛╨╕╨╖╨▓╨╛╨┤╨╕╤В╨╡╨╗╤М╨╜╨╛╤Б╤В╨╕. Senior-╨╝╨╡╨╜╤В╨╛╤А ╤Б ╨▒╨╛╨│╨░╤В╤Л╨╝ ╨╛╨┐╤Л╤В╨╛╨╝ ╨┐╤А╨╛╨╡╨║╤В╨╕╤А╨╛╨▓╨░╨╜╨╕╤П ╨╝╨░╤Б╤И╤В╨░╨▒╨╜╤Л╤Е ╨▓╨╡╨▒-╤Б╨╕╤Б╤В╨╡╨╝.'
        },
        instructorSkills: {
            uz: ['Advanced React', 'Performance Optimization', 'Web Security', 'Technical Leadership'],
            en: ['Advanced React', 'Performance Optimization', 'Web Security', 'Technical Leadership'],
            ru: ['Advanced React', '╨Ю╨┐╤В╨╕╨╝╨╕╨╖╨░╤Ж╨╕╤П ╨┐╤А╨╛╨╕╨╖╨▓╨╛╨┤╨╕╤В╨╡╨╗╤М╨╜╨╛╤Б╤В╨╕', '╨Т╨╡╨▒-╨▒╨╡╨╖╨╛╨┐╨░╤Б╨╜╨╛╤Б╤В╤М', '╨в╨╡╤Е╨╜╨╕╤З╨╡╤Б╨║╨╛╨╡ ╨╗╨╕╨┤╨╡╤А╤Б╤В╨▓╨╛']
        },
        instructorEdu: {
            uz: 'Toshkent Axborot Texnologiyalari Universiteti',
            en: 'Tashkent University of Information Technologies',
            ru: '╨в╨░╤И╨║╨╡╨╜╤В╤Б╨║╨╕╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В ╨╕╨╜╤Д╨╛╤А╨╝╨░╤Ж╨╕╨╛╨╜╨╜╤Л╤Е ╤В╨╡╤Е╨╜╨╛╨╗╨╛╨│╨╕╨╣'
        },
        instructorAchieve: {
            uz: '50+ muvaffaqiyatli bitirgan Senior dasturchilar ustozi',
            en: 'Mentor of 50+ successful Senior developers',
            ru: '╨Э╨░╤Б╤В╨░╨▓╨╜╨╕╨║ ╨▒╨╛╨╗╨╡╨╡ 50 ╤Г╤Б╨┐╨╡╤И╨╜╤Л╤Е Senior-╤А╨░╨╖╤А╨░╨▒╨╛╤В╤З╨╕╨║╨╛╨▓'
        },
        rating: 5.0,
        students: 100,
        duration: '9 Oy',
        price: '399 000 UZS',
        oldPrice: '700 000 UZS',
        category: ['Dasturlash'],
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        instructorImg: imgibo
    },
    {
        id: 14,
        title: 'Ingliz tili',
        titleEn: 'English Language',
        titleRu: '╨Р╨╜╨│╨╗╨╕╨╣╤Б╨║╨╕╨╣ ╤П╨╖╤Л╨║',
        instructor: 'Nurilloh Khayitboev',
        instructorSlug: 'ielts-nurillo',
        instructorBio: {
            uz: 'Ingliz tilini o\'rganishda kreativ yondashuv tarafdori. Grammatikani qiziqarli o\'yinlar va amaliyot orqali tushuntirish bo\'yicha mutaxassis.',
            en: 'Advocate for a creative approach to learning English. Specialist in explaining grammar through interesting games and practice.',
            ru: '╨б╤В╨╛╤А╨╛╨╜╨╜╨╕╨║ ╨║╤А╨╡╨░╤В╨╕╨▓╨╜╨╛╨│╨╛ ╨┐╨╛╨┤╤Е╨╛╨┤╨░ ╨║ ╨╕╨╖╤Г╤З╨╡╨╜╨╕╤О ╨░╨╜╨│╨╗╨╕╨╣╤Б╨║╨╛╨│╨╛ ╤П╨╖╤Л╨║╨░. ╨б╨┐╨╡╤Ж╨╕╨░╨╗╨╕╤Б╤В ╨┐╨╛ ╨╛╨▒╤К╤П╤Б╨╜╨╡╨╜╨╕╤О ╨│╤А╨░╨╝╨╝╨░╤В╨╕╨║╨╕ ╤З╨╡╤А╨╡╨╖ ╨╕╨╜╤В╨╡╤А╨╡╤Б╨╜╤Л╨╡ ╨╕╨│╤А╤Л ╨╕ ╨┐╤А╨░╨║╤В╨╕╨║╤Г.'
        },
        instructorSkills: {
            uz: ['Interactive Teaching', 'Grammar Simplified', 'Vocabulary Building', 'Student Motivation'],
            en: ['Interactive Teaching', 'Grammar Simplified', 'Vocabulary Building', 'Student Motivation'],
            ru: ['╨Ш╨╜╤В╨╡╤А╨░╨║╤В╨╕╨▓╨╜╨╛╨╡ ╨╛╨▒╤Г╤З╨╡╨╜╨╕╨╡', '╨г╨┐╤А╨╛╤Й╨╡╨╜╨╜╨░╤П ╨│╤А╨░╨╝╨╝╨░╤В╨╕╨║╨░', '╨а╨░╤Б╤И╨╕╤А╨╡╨╜╨╕╨╡ ╤Б╨╗╨╛╨▓╨░╤А╨╜╨╛╨│╨╛ ╨╖╨░╨┐╨░╤Б╨░', '╨Ь╨╛╤В╨╕╨▓╨░╤Ж╨╕╤П ╤Б╤В╤Г╨┤╨╡╨╜╤В╨╛╨▓']
        },
        instructorEdu: {
            uz: 'O\'zbekiston Davlat Jahon Tillari Universiteti - Ingliz filologiyasi',
            en: 'Uzbekistan State World Languages University - English Philology',
            ru: '╨г╨╖╨▒╨╡╨║╤Б╨║╨╕╨╣ ╨│╨╛╤Б╤Г╨┤╨░╤А╤Б╤В╨▓╨╡╨╜╨╜╤Л╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В ╨╝╨╕╤А╨╛╨▓╤Л╤Е ╤П╨╖╤Л╨║╨╛╨▓ - ╨Р╨╜╨│╨╗╨╕╨╣╤Б╨║╨░╤П ╤Д╨╕╨╗╨╛╨╗╨╛╨│╨╕╤П'
        },
        instructorAchieve: {
            uz: 'IELTS Band 8.0 sohibi',
            en: 'IELTS Band 8.0 holder',
            ru: '╨Ю╨▒╨╗╨░╨┤╨░╤В╨╡╨╗╤М IELTS Band 8.0'
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
        titleRu: '╨Р╨╜╨│╨╗╨╕╨╣╤Б╨║╨╕╨╣ ╤П╨╖╤Л╨║',
        instructor: 'Javohir Qosimov',
        instructorSlug: 'ielts-javohir',
        instructorBio: {
            uz: 'Til o\'rganuvchilarning gapirish qobiliyatini (Speaking) rivojlantirishga e\'tibor qaratadi. IELTS imtihonining barcha bosqichlari bo\'yicha chuqur bilimga ega.',
            en: 'Focuses on developing the speaking skills of language learners. Has in-depth knowledge of all stages of the IELTS exam.',
            ru: '╨д╨╛╨║╤Г╤Б╨╕╤А╤Г╨╡╤В╤Б╤П ╨╜╨░ ╤А╨░╨╖╨▓╨╕╤В╨╕╨╕ ╨╜╨░╨▓╤Л╨║╨╛╨▓ ╨│╨╛╨▓╨╛╤А╨╡╨╜╨╕╤П (Speaking) ╤Г ╨╕╨╖╤Г╤З╨░╤О╤Й╨╕╤Е ╤П╨╖╤Л╨║. ╨Ю╨▒╨╗╨░╨┤╨░╨╡╤В ╨│╨╗╤Г╨▒╨╛╨║╨╕╨╝╨╕ ╨╖╨╜╨░╨╜╨╕╤П╨╝╨╕ ╨▓╤Б╨╡╤Е ╤Н╤В╨░╨┐╨╛╨▓ ╤Н╨║╨╖╨░╨╝╨╡╨╜╨░ IELTS.'
        },
        instructorSkills: {
            uz: ['Speaking Fluency', 'Exam Strategy', 'Critical Thinking', 'Essay Writing'],
            en: ['Speaking Fluency', 'Exam Strategy', 'Critical Thinking', 'Essay Writing'],
            ru: ['╨С╨╡╨│╨╗╨╛╤Б╤В╤М ╤А╨╡╤З╨╕', '╨б╤В╤А╨░╤В╨╡╨│╨╕╤П ╤Н╨║╨╖╨░╨╝╨╡╨╜╨░', '╨Ъ╤А╨╕╤В╨╕╤З╨╡╤Б╨║╨╛╨╡ ╨╝╤Л╤И╨╗╨╡╨╜╨╕╨╡', '╨Э╨░╨┐╨╕╤Б╨░╨╜╨╕╨╡ ╤Н╤Б╤Б╨╡']
        },
        instructorEdu: {
            uz: 'O\'zbekiston Davlat Jahon Tillari Universiteti',
            en: 'Uzbekistan State World Languages University',
            ru: '╨г╨╖╨▒╨╡╨║╤Б╨║╨╕╨╣ ╨│╨╛╤Б╤Г╨┤╨░╤А╤Б╤В╨▓╨╡╨╜╨╜╤Л╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В ╨╝╨╕╤А╨╛╨▓╤Л╤Е ╤П╨╖╤Л╨║╨╛╨▓'
        },
        instructorAchieve: {
            uz: 'Cambridge CELTA sertifikati',
            en: 'Cambridge CELTA Certificate',
            ru: '╨б╨╡╤А╤В╨╕╤Д╨╕╨║╨░╤В Cambridge CELTA'
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
        titleRu: 'Frontend ╨а╨░╨╖╤А╨░╨▒╨╛╤В╨║╨░',
        instructor: 'Muhammadjon Abduqahharov ',
        instructorSlug: 'frontend-muhammadjon',
        instructorBio: {
            uz: 'Mukammal tajribaga ega full-stack dasturchi. Real loyihalar orqali o\'quvchilarga kod yozish madaniyati va arxitektura sirlarini o\'rgatadi.',
            en: 'Full-stack developer with perfect experience. Teaches students the code culture and architectural secrets through real projects.',
            ru: 'Full-stack ╤А╨░╨╖╤А╨░╨▒╨╛╤В╤З╨╕╨║ ╤Б ╨╛╤В╨╗╨╕╤З╨╜╤Л╨╝ ╨╛╨┐╤Л╤В╨╛╨╝. ╨Ю╨▒╤Г╤З╨░╨╡╤В ╤Б╤В╤Г╨┤╨╡╨╜╤В╨╛╨▓ ╨║╤Г╨╗╤М╤В╤Г╤А╨╡ ╨║╨╛╨┤╨░ ╨╕ ╤Б╨╡╨║╤А╨╡╤В╨░╨╝ ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╤Л ╤З╨╡╤А╨╡╨╖ ╤А╨╡╨░╨╗╤М╨╜╤Л╨╡ ╨┐╤А╨╛╨╡╨║╤В╤Л.'
        },
        instructorSkills: {
            uz: ['Full-stack Expertise', 'Clean Code', 'API Design', 'DevOps Basics'],
            en: ['Full-stack Expertise', 'Clean Code', 'API Design', 'DevOps Basics'],
            ru: ['Full-stack ╤Н╨║╤Б╨┐╨╡╤А╤В╨╕╨╖╨░', '╨з╨╕╤Б╤В╤Л╨╣ ╨║╨╛╨┤', '╨Я╤А╨╛╨╡╨║╤В╨╕╤А╨╛╨▓╨░╨╜╨╕╨╡ API', '╨Ю╤Б╨╜╨╛╨▓╤Л DevOps']
        },
        instructorEdu: {
            uz: 'Inha Universiteti Toshkent',
            en: 'Inha University Tashkent',
            ru: '╨г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В ╨Ш╨╜╤Е╨░ ╨▓ ╨в╨░╤И╨║╨╡╨╜╤В╨╡'
        },
        instructorAchieve: {
            uz: 'Top-tier loyihalar Team Lead-i',
            en: 'Team Lead of top-tier projects',
            ru: 'Team Lead ╨┐╤А╨╛╨╡╨║╤В╨╛╨▓ ╨▓╤Л╤Б╤И╨╡╨│╨╛ ╤Г╤А╨╛╨▓╨╜╤П'
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
