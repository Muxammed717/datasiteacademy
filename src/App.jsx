import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Komponentlarni va Sahifalarni chaqirib olamiz (Import)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import MonitoringLogin from './pages/MonitoringLogin';
import MonitoringDashboard from './pages/MonitoringDashboard';
import Enrollment from './pages/Enrollment';
import News from './pages/News';
import InstructorDetails from './pages/InstructorDetails';

// Kontekstlar (Til va Mavzu uchun)
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

// Yordamchi komponentlar
import ScrollToTop from './components/ScrollToTop';
import PlexusBackground from './components/PlexusBackground';
import Preloader from './components/Preloader';
import MaintenanceGuard from './components/MaintenanceGuard';
import Maintenance from './pages/Maintenance';
import SocialSidebar from './components/SocialSidebar';

function App() {
  return (
    // ThemeProvider - saytni qora/oq rejimini boshqaradi
    <ThemeProvider>
      {/* LanguageProvider - sayt tilini boshqaradi */}
      <LanguageProvider>
        {/* Preloader - sayt ochilayotganda chiqadigan animatsiya */}
        <Preloader />

        {/* Router - sahifalar o'rtasidagi yo'llarni boshqaradi */}
        <Router>
          <div className="app">
            {/* PlexusBackground - orqa fondagi animatsiya */}
            <PlexusBackground />

            {/* Navbar - tepa qismdagi menyu */}
            <Navbar />

            {/* SocialSidebar - vertical ijtimoiy tarmoqlar */}
            <SocialSidebar />

            {/* ScrollToTop - har safar sahifa o'zgarganda tepaga chiqaradi */}
            <ScrollToTop />

            {/* Asosiy sahifalar joylashadigan qism */}
            <main>
              <Routes>
                {/* 
                  MaintenanceGuard - agar sayt ta'mirlashda bo'lsa, 
                  faqat admin kiritishini ta'minlaydi.
                */}
                <Route path="/" element={<MaintenanceGuard><Home /></MaintenanceGuard>} />
                <Route path="/courses" element={<MaintenanceGuard><Courses /></MaintenanceGuard>} />
                <Route path="/about" element={<MaintenanceGuard><About /></MaintenanceGuard>} />
                <Route path="/contact" element={<MaintenanceGuard><Contact /></MaintenanceGuard>} />
                <Route path="/enrollment" element={<MaintenanceGuard><Enrollment /></MaintenanceGuard>} />
                <Route path="/news" element={<MaintenanceGuard><News /></MaintenanceGuard>} />
                <Route path="/instructor/:slug" element={<MaintenanceGuard><InstructorDetails /></MaintenanceGuard>} />

                {/* Alohida (himoyasiz) yo'llar */}
                <Route path="/maintenance" element={<Maintenance />} />
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/monitoring" element={<MonitoringLogin />} />
                <Route path="/monitoring/dashboard" element={<MonitoringDashboard />} />
              </Routes>
            </main>

            {/* Footer - pastki qism */}
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
