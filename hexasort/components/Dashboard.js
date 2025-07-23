// components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>HEXAWARE Recruitment System</h1>
          <div className="user-info">
            <span>Welcome, {user.name}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="dashboard-cards">
          <Link to="/ranking" className="dashboard-card">
            <h3>Job Description Matching</h3>
            <p>Compare and rank consultant profiles against job descriptions</p>
            <div className="card-icon">📊</div>
          </Link>

          <Link to="/profiles" className="dashboard-card">
            <h3>Consultant Profiles</h3>
            <p>View and manage consultant database</p>
            <div className="card-icon">👥</div>
          </Link>

          <div className="dashboard-card">
            <h3>Communication Agent</h3>
            <p>Automated email notifications and status updates</p>
            <div className="card-icon">📧</div>
          </div>

          <div className="dashboard-card">
            <h3>Real-time Progress</h3>
            <p>Track matching status and workflow progress</p>
            <div className="card-icon">⏱️</div>
          </div>
        </div>

        {user.role === 'ar_requestor' && (
          <div className="ar-features">
            <h2>AR Requestor Features</h2>
            <div className="feature-list">
              <div className="feature-item">
                <span className="status-indicator current">Current Matching Status Dashboard</span>
              </div>
              <div className="feature-item">
                <span className="status-indicator progress">JD Comparison Status (Submitted/In Progress)</span>
              </div>
              <div className="feature-item">
                <span className="status-indicator completed">Top 3 Matches (Listed/Not Found)</span>
              </div>
            </div>
          </div>
        )}

        {user.role === 'recruiter' && (
          <div className="recruiter-features">
            <h2>Recruiter Features</h2>
            <div className="feature-list">
              <div className="feature-item">
                <span>Admin Console for profile management</span>
              </div>
              <div className="feature-item">
                <span>JD Search & Filters by skills, experience, status</span>
              </div>
              <div className="feature-item">
                <span>Report Generation for matching results</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
