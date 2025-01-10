import React, { useState } from 'react';
import { FaTachometerAlt, FaCalendarCheck, FaPrescriptionBottle, FaBell, FaUserEdit, FaSignOutAlt } from 'react-icons/fa';
import backgroundVideo from '../assets/Images/hos.mp4';
import logo from '../assets/Images/logo.png';
import profilePic from '../assets/Images/pran.jpeg';
import UpdateProfile from './UpdateProfile';
import './DoctorDashboard.css';

const DoctorDashboard = () => {
  const [isUpdateProfileOpen, setIsUpdateProfileOpen] = useState(false);

  const handleLogout = () => {
    // Clear any authentication tokens or user data here
    // For example: localStorage.removeItem('authToken');
    window.location.href = '/'; // Redirect to the login page
  };

  const handleUpdateProfile = () => {
    setIsUpdateProfileOpen(true);
  };

  const closeUpdateProfile = () => {
    setIsUpdateProfileOpen(false);
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
            <li onClick={handleUpdateProfile}><FaUserEdit className="icon" /> Update Profile</li>
            <li onClick={handleLogout}><FaSignOutAlt className="icon" /> Logout</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <video autoPlay loop muted className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {isUpdateProfileOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeUpdateProfile}>&times;</span>
              <UpdateProfile closeModal={closeUpdateProfile} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DoctorDashboard;