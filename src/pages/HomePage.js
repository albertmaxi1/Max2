import React, { useState } from 'react';
import { callImagenAPI } from '../utils/api';

const HomePage = () => {
  const [heroImage, setHeroImage] = useState("https://placehold.co/1200x600/0A1931/0A1931"); 
  const [loadingImage, setLoadingImage] = useState(false);

  // Uncomment below if you want the image-generation button on homepage.
  // const generateHeroImage = async () => {
  //   setLoadingImage(true);
  //   const imageUrl = await callImagenAPI("Abstract digital background with glowing blue and purple lines, subtle geometric patterns, professional, high-tech, dark tones, similar to McKinsey's website");
  //   setHeroImage(imageUrl);
  //   setLoadingImage(false);
  // };

  return (
    <section id="home" className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 md:py-32 overflow-hidden rounded-b-lg shadow-lg">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional Consulting Background"
          className="w-full h-full object-cover"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1200x600/0A1931/0A1931"; }}
        />
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg text-yellow-400">
          <span className="font-merriweather-bold text-white">Max</span>
          <span className="font-inter-light text-mckinsey-light-gray">&nbsp;Ventures</span>
        </h1>
      </div>
      {/* Testimonials section */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Client Success</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Voices of our impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
              <p className="text-xl italic text-gray-800 mb-6">"Max Ventures delivered exceptional results. A true partner."</p>
              <p className="text-lg font-semibold text-blue-800">- CEO, Global Innovations</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
              <p className="text-xl italic text-gray-800 mb-6">"Their strategic insights were pivotal to our success."</p>
              <p className="text-lg font-semibold text-blue-800">- Founder, Apex Solutions</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomePage;