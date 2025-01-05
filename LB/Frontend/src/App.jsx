import React, { useState } from 'react';
import { FaInfoCircle, FaEnvelope, FaSignInAlt, FaFacebook, FaPhone, FaGlobe, FaInstagram, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ForgetPassword from './Components/ForgetPassword';
import OtpCaptcha from './Components/OtpCaptcha';

function App() {
  const [content, setContent] = useState({
    title: "Life Beacon",
    description: "A Holistic Medical Assistance and Records Software"
  });

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isForgetPasswordOpen, setIsForgetPasswordOpen] = useState(false);
  const [isOtpCaptchaOpen, setIsOtpCaptchaOpen] = useState(false);

  const descriptions = [
    { text: "Record All Your Medical History Since You are Born", image: 'src/assets/Images/record.jpg' },
    { text: "Store And Record All Your Diagnostic Reports", image: 'src/assets/Images/test.jpg' },
    { text: "Keep Track Of Your Vaccination Schedule", image: 'src/assets/Images/vaccine.jpg' },
    { text: "Review Patient's Medical Summary And History", image: 'src/assets/Images/doc.jpg' },
    { text: "Take Appointment At Your Convenient Time", image: 'src/assets/Images/appt.jpg' },
    { text: "Real Time Data For All Connected Hospitals", image: 'src/assets/Images/rt.jpg' },
  ];

  const doctors = [
    { name: "Prof. Dr. Samnun F. Taha", image: 'src/assets/Images/taha.jpg', appointment: "Appointment Link", intro: "MBBS (BD), MRCP (UK), Diploma in Geriatric Medicine (Royal College of Physicians, LONDON) Geriatric and Internal Medicine Specialist." },
    { name: "Dr. Pran Gopal Datta", image: 'src/assets/Images/pran.jpeg', appointment: "Appointment Link", intro: "MBBS, MCPS, ACORL, PhD, MSc (Audiology), FCPS (ENT), FRCS (Glasgow). ears, nose and throat (ENT) Specialist " },
    { name: "Prof. Dr. Quazi Deen Mohammed", image: 'src/assets/Images/deen.jpg', appointment: "Appointment Link", intro: "MBBS, MD (Neurology), FCPS (Medicine), Fellow in Neurology (USA). Neurology & Medicine Specialist " },
    { name: "Prof. A. K. M. Fazlul Haque", image: 'src/assets/Images/fazlul.jpeg', appointment: "Appointment Link", intro: "MBBS, FCPS, FICS (USA) Fellow Colorectal Surgery (Singapore) International Scholar, Colorectal Surgery (USA). Colorectal surgeon" },
    { name: "Dr. Rowshan Ara Begum", image: 'src/assets/Images/rowshan.jpg', appointment: "Appointment Link", intro: "MBBS , FCPS (Gynae & Obs), FICS. Obstetrics and Gynecology." },
    { name: "Dr. Taslima Akter", image: 'src/assets/Images/taslima.jpg', appointment: "Appointment Link", intro: "MBBS, CCD (BIRDEM), DMU, FCGP, Dip. in Asthma (icddr,b). Family Medicine Specialist" }
  ];

  const scrollToDescription = () => {
    document.getElementById('description-section').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLoginModal = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false);
    setIsForgetPasswordOpen(false);
    setIsOtpCaptchaOpen(false);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  const openSignupModal = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false);
    setIsForgetPasswordOpen(false);
    setIsOtpCaptchaOpen(false);
  };

  const closeSignupModal = () => {
    setIsSignupOpen(false);
  };

  const openForgetPasswordModal = () => {
    setIsForgetPasswordOpen(true);
    setIsLoginOpen(false);
    setIsSignupOpen(false);
    setIsOtpCaptchaOpen(false);
  };

  const closeForgetPasswordModal = () => {
    setIsForgetPasswordOpen(false);
  };

  const openOtpCaptchaModal = () => {
    setIsOtpCaptchaOpen(true);
    setIsForgetPasswordOpen(false);
    setIsLoginOpen(false);
    setIsSignupOpen(false);
  };

  const closeOtpCaptchaModal = () => {
    setIsOtpCaptchaOpen(false);
  };

  return (
    <>
      <div className="section">
        <video autoPlay muted loop>
          <source src="src/assets/Images/bg1.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="logo-container">
          <img src="src/assets/Images/logo.png" alt="Life Beacon Logo" className="logo" />
        </div>
        <div className="button-container">
          <button onClick={scrollToDescription}><FaInfoCircle /> ABOUT US</button>
          <button onClick={scrollToContact}><FaEnvelope /> CONTACT US</button>
          <button onClick={openLoginModal}><FaSignInAlt /> LOGIN</button>
        </div>
        <div className="content">
          <h1>{content.title}</h1>
          <p>{content.description}</p>
        </div>
      </div>
      <div id="description-section" className="section">
        <video autoPlay muted loop>
          <source src="src/assets/Images/bg2.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="description-container">
          {descriptions.map((desc, index) => (
            <div key={index} className={`description-box description-box-${index + 1}`} style={{ backgroundImage: `url(${desc.image})` }}>
              {desc.text}
            </div>
          ))}
        </div>
      </div>
      <div id="integrated-hospitals-section" className="section">
        <video autoPlay muted loop>
          <source src="src/assets/Images/hos.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <h1 className="integrated-hospitals-title">Integrated Hospitals</h1>
        <div className="content">
          <div className="polaroid-container">
            <div className="polaroid-box">
              <img src="src/assets/Images/bsmmu.jpg" alt="All Government Hospitals" className="polaroid-image" />
              <div className="polaroid-caption">
                <h2>All Government Hospitals</h2>
                <div className="polaroid-icons">
                  <a href="https://www.facebook.com/bsmmu.edu.bd/?locale=bn_IN" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                  <a href="tel:+88029661065"><FaPhone /></a>
                  <a href="https://bsmmu.ac.bd/" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
                </div>
              </div>
            </div>
            <div className="polaroid-box">
              <img src="src/assets/Images/square.jpeg" alt="Square Hospital" className="polaroid-image" />
              <div className="polaroid-caption">
                <h2>Square Hospital</h2>
                <div className="polaroid-icons">
                  <a href="https://www.facebook.com/squarehospital" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                  <a href="tel:10616"><FaPhone /></a>
                  <a href="https://www.squarehospital.com/" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
                </div>
              </div>
            </div>
            <div className="polaroid-box">
              <img src="src/assets/Images/evercare.jpg" alt="Evercare Hospital" className="polaroid-image" />
              <div className="polaroid-caption">
                <h2>Evercare Hospital</h2>
                <div className="polaroid-icons">
                  <a href="https://www.facebook.com/evercarebd/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                  <a href="tel:+8810678"><FaPhone /></a>
                  <a href="https://www.evercarebd.com/" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
                </div>
              </div>
            </div>
            <div className="polaroid-box">
              <div className="polaroid-caption">
                <h2>And Almost all the reknowned hospitals of Bangladesh</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="doctors-section" className="section">
        <video autoPlay muted loop>
          <source src="src/assets/Images/bg3.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <h1 className="doctors-title">Meet Our Doctors</h1>
        <div className="content">
          <div className="doctor-container">
            {doctors.map((doctor, index) => (
              <div key={index} className="doctor-box">
                <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                <div className="doctor-caption">
                  <h2>{doctor.name}</h2>
                  <p>{doctor.intro}</p>
                  <a href={doctor.appointment} className="appointment-link">Book Appointment</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="contact-section" className="section bg-gray-800 text-white p-8">
        <h1 className="text-3xl font-Poppins mb-4">CONTACT US</h1>
        <div className="contact-content">
          <div className="contact-logo">
            <img src="src/assets/Images/logo.png" alt="Life Beacon Logo" onClick={scrollToTop} style={{ cursor: 'pointer', zIndex: 4 }} />
          </div>
          <div className="contact-icons">
            <a href="https://www.facebook.com/farhan.nabil.752861?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6 inline-block mr-2" />
              <span>Life Beacon</span>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 inline-block mr-2" />
              <span>life_beacon</span>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-6 h-6 inline-block mr-2" />
              <span>LifeBeacon</span>
            </a>
            <a href="tel:+1234567890">
              <FaPhone className="w-6 h-6 inline-block mr-2" />
              <span>tel:+1234567890,+987654321,+88123465789</span>
            </a>
            <a href="https://g.co/kgs/u9ZoFgw" target="_blank" rel="noopener noreferrer">
              <FaMapMarkerAlt className="w-6 h-6 inline-block mr-2" />
              <span> FIND US ON : https://g.co/kgs/u9ZoFgw</span>
            </a>
          </div>
        </div>
      </div>
      {isLoginOpen && <Login closeModal={closeLoginModal} openSignupModal={openSignupModal} openForgetPasswordModal={openForgetPasswordModal} />}
      {isSignupOpen && <Signup closeModal={closeSignupModal} />}
      {isForgetPasswordOpen && <ForgetPassword closeModal={closeForgetPasswordModal} openOtpCaptchaModal={openOtpCaptchaModal} />}
      {isOtpCaptchaOpen && <OtpCaptcha closeModal={closeOtpCaptchaModal} />}
    </>
  );
}

export default App;