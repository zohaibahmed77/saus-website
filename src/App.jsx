import './App.css';
import { Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeatureLinks from './components/FeatureLinks';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import EventsSection from './components/EventsSection';
import Layout from './components/Layout';

// Pages
import DepartmentsPage from './pages/DepartmentsPage';
import ProgramsPage from './pages/ProgramsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import NewsPage from './pages/NewsPage';
import ApplyPage from './pages/ApplyPage';
import DashboardPage from './pages/DashboardPage'; // ✅ New DashboardPage import

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Homepage */}
        <Route
          index
          element={
            <>
              <HeroSection />
              <StatsSection />
              <FeatureLinks />
              <AboutSection />
              <WhyChooseUs />
              <EventsSection />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="departments" element={<DepartmentsPage />} />
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="admissions" element={<AdmissionsPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="apply" element={<ApplyPage />} />
        <Route path="dashboard" element={<DashboardPage />} /> {/* ✅ Added dashboard route */}
      </Route>
    </Routes>
  );
}

export default App;
