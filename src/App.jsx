import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import OngoingProjectsPage from './pages/OngoingProjectsPage';
import CompletedProjectsPage from './pages/CompletedProjectsPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import ContactPage from './pages/ContactPage';
// Import other pages here as you create them
// import AboutPage from './pages/AboutPage'; 

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/ongoing" element={<OngoingProjectsPage />} />
        <Route path="/projects/completed" element={<CompletedProjectsPage />} />
        <Route path="/property/:propertyId" element={<PropertyDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Define other routes here */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
