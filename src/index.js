import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'jquery';
import '@popperjs/core'; // Edit here
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
