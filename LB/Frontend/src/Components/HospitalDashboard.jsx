import React from 'react';
import './HospitalDashboard.css';

const HospitalDashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Hospital Dashboard</h1>
      </header>
      <main className="dashboard-main">
        <section className="dashboard-section">
          <h2>Overview</h2>
          <p>Welcome to the Hospital Dashboard. Here you can manage hospital operations efficiently.</p>
        </section>
        <section className="dashboard-section">
          <h2>Patients</h2>
          <p>Manage patient records and appointments.</p>
        </section>
        <section className="dashboard-section">
          <h2>Staff</h2>
          <p>Manage hospital staff and their schedules.</p>
        </section>
        <section className="dashboard-section">
          <h2>Reports</h2>
          <p>View and generate hospital reports.</p>
        </section>
      </main>
    </div>
  );
};

export default HospitalDashboard;