import React, { useState } from 'react';
import { FaTachometerAlt, FaCalendarCheck, FaPrescriptionBottle, FaBell, FaUserEdit, FaSignOutAlt } from 'react-icons/fa';
import backgroundVideo from '../assets/Images/hos.mp4';
import logo from '../assets/Images/logo.png';
import profilePic from '../assets/Images/pran.jpeg';
import UpdateProfile from './UpdateProfile';
import './DoctorDashboard.css';

const DoctorDashboard = () => {
  const [isUpdateProfileOpen, setIsUpdateProfileOpen] = useState(false);
  const [showAppointments, setShowAppointments] = useState(false);

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

  const handleShowAppointments = () => {
    setShowAppointments(true);
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
            <li onClick={handleShowAppointments}><FaCalendarCheck className="icon" /> Appointment</li>
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
        {showAppointments && (
          <div className="appointments-table">
            <table>
              <thead>
                <tr>
                  <th>NID</th>
                  <th>Name</th>
                  <th>Problem</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123456789</td>
                  <td>John Doe</td>
                  <td>Flu</td>
                  <td>30</td>
                  <td><button>PRESCRIBE</button></td>
                </tr>
                <tr>
                  <td>987654321</td>
                  <td>Jane Smith</td>
                  <td>Headache</td>
                  <td>25</td>
                  <td><button>PRESCRIBE</button></td>
                </tr>
                <tr>
                  <td>456789123</td>
                  <td>Michael Johnson</td>
                  <td>Back Pain</td>
                  <td>45</td>
                  <td><button>PRESCRIBE</button></td>
                </tr>
                <tr>
                  <td>789123456</td>
                  <td>Emily Davis</td>
                  <td>Allergy</td>
                  <td>35</td>
                  <td><button>PRESCRIBE</button></td>
                </tr>
                <tr>
                  <td>321654987</td>
                  <td>Chris Brown</td>
                  <td>Diabetes</td>
                  <td>50</td>
                  <td><button>PRESCRIBE</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
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