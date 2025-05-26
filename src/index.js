import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'; // Import your global CSS
import App from './App'; // Import your App component

// Get the root element from public/index.html
const container = document.getElementById('root');

// Create a root. This is the new way to render in React 18.
const root = createRoot(container);

// Render your App component into the root, wrapped with BrowserRouter
document.addEventListener('DOMContentLoaded', () => {
  if (container) {
    root.render(
      <React.StrictMode>
        {/* Remove basename when using a custom domain and no homepage in package.json */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
  } else {
    console.error("Root element with ID 'root' not found in the document.");
  }
});
