import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Camera from './pages/camera.jsx';
import Home from './pages/home.jsx';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const openSnapLens = (e) => {
    e.preventDefault();
    window.location.href = 'https://lens.snap.com/experience/95db1c02-c52c-4010-a3b3-2afbd1644d26';
  };

  return (
    <Router>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-brand-link">AR Tourism</Link>
        </div>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#" onClick={openSnapLens} className="nav-link">Camera</a>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camera" element={<Camera />} />
      </Routes>
    </Router>
  );
};

export default App;