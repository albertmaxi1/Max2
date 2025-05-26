import React, { useState } from 'react';
import { callGeminiTextAPI, callImagenAPI } from '../utils/api';

const AboutPage = () => {
  const [aboutText, setAboutText] = useState("Max Ventures empowers businesses through strategic financial leadership and operational excellence. With a proven track record in real estate development, M&A, and operational transformation, we drive value and sustainable growth for our clients.");
  const [aboutImage, setAboutImage] = useState("https://placehold.co/600x400/0A1931/FFD700?text=Conceptual+Partnership");
  const [loadingText, setLoadingText] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);

  const generateAboutText = async () => {
    setLoadingText(true);
    const text = await callGeminiTextAPI("Write an extremely brief 'About Us' section for a consulting business named Max Ventures, emphasizing strategic financial leadership, operational excellence, and real estate expertise.");
    setAboutText(text);
    setLoadingText(false);
  };

  const generateAboutImage = async () => {
    setLoadingImage(true);
    const imageUrl = await callImagenAPI("Abstract concept of strategic partnership and collaboration, clean lines, subtle gold accents, deep blue and white tones, professional, minimalist, high resolution");
    setAboutImage(imageUrl);
    setLoadingImage(false);
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-blue-900 mb-6 leading-tight">
            About Max Ventures
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {aboutText}
          </p>
          <div className="flex space-x-4">
            <button
              onClick={generateAboutText}
              className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-blue-800 transition duration-300 transform hover:scale-105 flex items-center justify-center"
              disabled={loadingText}
            >
              {loadingText ? (
                <svg className="animate-spin h-5 w-5 text-white mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Generate About Text'
              )}
            </button>
            <button
              onClick={generateAboutImage}
              className="bg-gray-200 text-blue-900 px-6 py-3 rounded-md font-semibold shadow-md hover:bg-gray-300 transition duration-300 transform hover:scale-105 flex items-center justify-center"
              disabled={loadingImage}
            >
              {loadingImage ? (
                <svg className="animate-spin h-5 w-5 text-blue-900 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Generate About Image'
              )}
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={aboutImage}
            alt="About Us"
            className="rounded-lg shadow-xl w-full max-w-md object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/0A1931/FFD700?text=Conceptual+Partnership"; }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;