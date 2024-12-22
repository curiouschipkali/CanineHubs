import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the correct version of ReactDOM
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root container
root.render( // Use render from the root
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
