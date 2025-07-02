import logo from './logo.svg';
import './App.css';
import React from 'react';
// import IRECYCLE_LOGO from './irecycle-logo.png';

function App() {
  return (
   
    <div className="app-container">
      <div className="content-area">
        {}
        <div className="logo-section">
          <img src="public/irecycle-logo.png" alt="iRECYCLE Logo" className="logo-icon" />
          <h1>iRECYCLE</h1>
        </div>

        {}
        <p className="welcome-message">
          Welcome, Explore all unsold second hand clothes
        </p>

        {}
        <div className="loading-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

