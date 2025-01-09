// filepath: /e:/SDP FINAL/LB/Frontend/src/Components/HospitalDashboard.jsx
import React from 'react';
import apolloLogo from '../assets/Images/apollo.png';
import lifeBeaconLogo from '../assets/Images/logo.png';
import './HospitalDashboard.css';

const HospitalDashboard = () => {
  return (
    <div className="hospital-dashboard">
      <header className="dashboard-header">
        <div className="hospital-logo-container">
          <img src={apolloLogo} alt="Apollo Hospitals Limited Logo" className="hospital-logo" />
          <span className="hospital-name">Apollo Hospitals Limited</span>
        </div>
        <div className="life-beacon-logo-container">
          <img src={lifeBeaconLogo} alt="Life Beacon Logo" className="life-beacon-logo" />
        </div>
      </header>
      <main className="dashboard-content">
        {/* Add your dashboard content here */}
      </main>
    </div>
  );
};

export default HospitalDashboard;