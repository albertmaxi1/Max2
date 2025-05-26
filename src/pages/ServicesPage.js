import React, { useState } from 'react';
import { callGeminiTextAPI } from '../utils/api';

const ServicesPage = () => {
  const [servicesText, setServicesText] = useState({
    strategy: "Strategic Financial Advisory: Guiding robust financial planning, forecasting, and performance optimization for superior outcomes.",
    operations: "Operational Transformation: Streamlining processes, enhancing efficiency, and implementing robust controls to maximize profitability.",
    manda: "M&A & Valuation Advisory: Navigating complex transactions, due diligence, and valuation to secure advantageous deals.",
    realestate: "Real Estate & Capital Management: Expertise in property acquisition, securing financing, and optimizing capital assets and tax strategies."
  });
  const [loadingText, setLoadingText] = useState(false);

  const generateAllServiceTexts = async () => {
    setLoadingText(true);
    const servicePrompts = {
      strategy: "Write an extremely brief and impactful description for a consulting business service focused on strategic financial advisory, planning, forecasting, and performance optimization.",
      operations: "Write an extremely brief and impactful description for a consulting business service focused on operational transformation, efficiency, and implementing robust controls.",
      manda: "Write an extremely brief and impactful description for a consulting business service focused on Mergers & Acquisitions (M&A) and valuation advisory, covering transactions, due diligence, and valuation.",
      realestate: "Write an extremely brief and impactful description for a consulting business service focused on real estate investment & capital management, including property acquisition, securing financing, and optimizing assets."
    };
    const newServices = {};
    for (const key in servicePrompts) {
      newServices[key] = await callGeminiTextAPI(servicePrompts[key]);
    }
    setServicesText(newServices);
    setLoadingText(false);
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Services</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Driving unparalleled success through focused expertise.
        </p>
        <button
          onClick={generateAllServiceTexts}
          className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-blue-800 transition duration-300 transform hover:scale-105 mb-12 flex items-center justify-center mx-auto"
          disabled={loadingText}
        >
          {loadingText ? (
            <svg className="animate-spin h-5 w-5 text-white mr-3" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            'Generate All Service Descriptions'
          )}
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Strategic Financial Advisory</h3>
            <p className="text-gray-700 leading-relaxed text-sm">{servicesText.strategy}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Operational Transformation</h3>
            <p className="text-gray-700 leading-relaxed text-sm">{servicesText.operations}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">M&A & Valuation Advisory</h3>
            <p className="text-gray-700 leading-relaxed text-sm">{servicesText.manda}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Real Estate & Capital Management</h3>
            <p className="text-gray-700 leading-relaxed text-sm">{servicesText.realestate}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;