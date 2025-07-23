// components/Login.js
import React, { useState } from 'react';
import './Login.css';

const Login = ({ setUser }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '', role: 'recruiter' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setUser({
        id: 1,
        email: credentials.email,
        role: credentials.role,
        name: credentials.role === 'recruiter' ? 'John Recruiter' : 'Jane AR Manager'
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>HEXAWARE</h1>
          <h2>Recruitment System</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials({...credentials, email: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Role</label>
            <select 
              value={credentials.role}
              onChange={(e) => setCredentials({...credentials, role: e.target.value})}
            >
              <option value="recruiter">Recruiter</option>
              <option value="ar_requestor">AR Requestor</option>
            </select>
          </div>
          
          <button type="submit" disabled={loading} className="login-btn">
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
