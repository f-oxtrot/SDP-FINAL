import React from 'react';
import backgroundVideo from '../assets/Images/hos.mp4'; // Replace with actual video path

const DoctorDashboard = () => {
  return (
    <div className="doctor-dashboard">
      <main className="main-content">
        <video autoPlay loop muted className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </main>
    </div>
  );
};

export default DoctorDashboard;