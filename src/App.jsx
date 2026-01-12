import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import RussianLanguage from './pages/RussianLanguage';
import Snowfall from './components/Snowfall';
import InstructorDetails from './pages/InstructorDetails';
import { LanguageProvider } from './context/LanguageContext';

import ScrollToTop from './components/ScrollToTop';
import PlexusBackground from './components/PlexusBackground';

const Layout = ({ children }) => {
  return (
    <div className="app">
      <PlexusBackground />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

import Preloader from './components/Preloader';

function App() {
  return (
    <LanguageProvider>
      <Preloader />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/enrollment" element={<Enrollment />} />
            <Route path="/news" element={<News />} />
            <Route path="/russian-language" element={<RussianLanguage />} />
            <Route path="/monitoring" element={<MonitoringLogin />} />
            <Route path="/monitoring/dashboard" element={<MonitoringDashboard />} />
            <Route path="/instructor/:slug" element={<InstructorDetails />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;
