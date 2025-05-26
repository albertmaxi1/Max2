import React, { useState } from 'react';
import { callGeminiTextAPI } from '../utils/api';

const ContactPage = () => {
  const [contactInfo, setContactInfo] = useState({
    email: "info@maxventures.com",
    phone: "+1 (555) 123-4567",
    address: "100 Victory Blvd, Suite 101, New York, NY 10001"
  });
  const [loadingText, setLoadingText] = useState(false);

  const generateContactInfo = async () => {
    setLoadingText(true);
    const text = await callGeminiTextAPI("Generate extremely brief and professional contact information for a consulting business named Max Ventures, including email, phone, and a plausible American address.");
    const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    const newContact = {};
    lines.forEach(line => {
      if (line.toLowerCase().startsWith('email:')) newContact.email = line.substring(6).trim();
      if (line.toLowerCase().startsWith('phone:')) newContact.phone = line.substring(6).trim();
      if (line.toLowerCase().startsWith('address:')) newContact.address = line.substring(8).trim();
    });
    setContactInfo(prev => ({ ...prev, ...newContact }));
    setLoadingText(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-100 rounded-t-lg shadow-lg">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">Connect With Us</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Your journey to success starts here.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-2">
              <span className="font-medium text-blue-800">Email:</span> {contactInfo.email}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-medium text-blue-800">Phone:</span> {contactInfo.phone}
            </p>
            <p className="text-gray-700">
              <span className="font-medium text-blue-800">Address:</span> {contactInfo.address}
            </p>
            <button
              onClick={generateContactInfo}
              className="mt-6 bg-blue-900 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-blue-800 transition duration-300 transform hover:scale-105 flex items-center justify-center mx-auto"
              disabled={loadingText}
            >
              {loadingText ? (
                <svg className="animate-spin h-5 w-5 text-white mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Generate Contact Info'
              )}
            </button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-left text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-left text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-left text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows="3" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <button type="submit" className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-blue-800 transition duration-300 transform hover:scale-105 w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;