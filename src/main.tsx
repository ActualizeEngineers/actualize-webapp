import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/Pages/home/custom.css';
import Footer from './layouts/Footer';
// import FloatingActions from './components/shared/FloatingActions';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Footer />
      {/* <FloatingActions /> */}
    </BrowserRouter>
  </React.StrictMode>
);
