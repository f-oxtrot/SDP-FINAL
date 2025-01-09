import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaCalendarCheck, FaPrescriptionBottle, FaBell, FaUserEdit, FaSignOutAlt } from 'react-icons/fa';
import backgroundVideo from '../assets/Images/hos.mp4';
import logo from '../assets/Images/logo.png';
import profilePic from '../assets/Images/pran.jpeg'; // Add the path to the profile picture
import './DoctorDashboard.css';

const DoctorDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication tokens or user data here
    // For example: localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <div className="doctor-dashboard">
      <img src={logo} alt="LifeBeacon Logo" className="logo" />
      <aside className="sidebar">
        <div className="user-info">
          <img src={profilePic} alt="Doctor Profile" className="profile-pic" />
          <h2>Welcome, Dr. Pran Gopal Dutta</h2>
        </div>
        <nav className="menu">
          <ul>
            <li><FaTachometerAlt className="icon" /> Dashboard</li>
            <li><FaCalendarCheck className="icon" /> Appointment</li>
            <li><FaPrescriptionBottle className="icon" /> Prescribe</li>
            <li><FaBell className="icon" /> Notifications</li>
            <li><FaUserEdit className="icon" /> Update Profile</li>
            <li onClick={handleLogout}><FaSignOutAlt className="icon" /> Logout</li>
          </ul>
        </nav>
      </aside>
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