import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AllProjectsPage from './pages/AllProjectsPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import ContactPage from './pages/ContactPage';
import AboutUsPage from './pages/AboutUsPage';
import RedevelopmentPage from './pages/RedevelopmentPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
// Import other pages here as you create them
// import AboutPage from './pages/AboutPage'; 

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Redirect /projects to /projects/all */}
        <Route path="/projects" element={<Navigate to="/projects/all" replace />} />
        <Route path="/projects/all" element={<AllProjectsPage />} />
        <Route path="/projects/ongoing" element={<Navigate to="/projects/all?filter=ongoing" replace />} />
        <Route path="/projects/completed" element={<Navigate to="/projects/all?filter=completed" replace />} />
        <Route path="/projects/upcoming" element={<Navigate to="/projects/all?filter=upcoming" replace />} />
        <Route path="/property/:propertyId" element={<PropertyDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/redevelopment" element={<RedevelopmentPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsAndConditionsPage />} />
        {/* Define other routes here */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
