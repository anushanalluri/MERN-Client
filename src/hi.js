import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { MycontextProvider } from './Mycontext';
import Login from './Login'; 
import Register from './Register'; 
import './index.css';

const root = document.getElementById('root'); // root id from index.html 
const VirtualRoot = ReactDOM.createRoot(root); // virtual Root (VDOM)

VirtualRoot.render(
  <MycontextProvider>
    <Router>
      <div>
        <h1 className="text-red-200">Hello World</h1>
      </div>
      <Routes>
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Register" element={<Register />} /> 
      </Routes>
    </Router>
  </MycontextProvider>
);
