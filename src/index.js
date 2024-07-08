import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; // Import your CSS file if needed
import Navbar from './components/navbar'; // Ensure the correct import path and case
import Register from './components/Register';
import Login from './components/Login';
import Feedback from './components/Feedback';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
