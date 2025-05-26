import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-800 bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <footer className="bg-blue-900 text-white py-8 mt-12 rounded-t-lg">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <p>&copy; {new Date().getFullYear()} Max Ventures. All rights reserved.</p>
            <p className="text-sm text-gray-400 mt-2">Strategic Partner: Albert Martinez-Arizala</p>
            <p className="text-sm text-gray-400 mt-1">Built with AI-powered content generation.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;