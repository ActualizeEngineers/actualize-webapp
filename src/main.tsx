// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/custom.css';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import FloatingActions from './components/shared/FloatingActions';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      <Footer />
      <FloatingActions />
    </BrowserRouter>
  </React.StrictMode>
);
