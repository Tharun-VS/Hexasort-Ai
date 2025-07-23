// components/ConsultantProfiles.js
import React, { useState } from 'react';
import './ConsultantProfiles.css';

const ConsultantProfiles = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [skillFilter, setSkillFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');

  const profiles = [
    { id: 1, name: 'John Smith', email: 'john@example.com', skills: ['React', 'Node.js', 'Python'], experience: 5, status: 'Available' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', skills: ['Java', 'Spring', 'MySQL'], experience: 3, status: 'Assigned' },
    { id: 3, name: 'Mike Wilson', email: 'mike@example.com', skills: ['Angular', 'TypeScript', 'MongoDB'], experience: 4, status: 'Available' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', skills: ['Python', 'Django', 'PostgreSQL'], experience: 6, status: 'Available' },
    { id: 5, name: 'Chris Brown', email: 'chris@example.com', skills: ['Vue.js', 'Express', 'Redis'], experience: 2, status: 'Assigned' }
  ];

  const filteredProfiles = profiles.filter(profile => {
    const matchesSearch = profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         profile.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkill = !skillFilter || profile.skills.some(skill => 
      skill.toLowerCase().includes(skillFilter.toLowerCase()));
    const matchesExperience = !experienceFilter || profile.experience >= parseInt(experienceFilter);
    
    return matchesSearch && matchesSkill && matchesExperience;
  });

  return (
    <div className="profiles-container">
      <div className="profiles-header">
        <h2>Consultant Profiles</h2>
        <p>Search and filter consultant database</p>
      </div>

      <div className="filters-section">
        <div className="filter-group">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by skill..."
            value={skillFilter}
            onChange={(e) => setSkillFilter(e.target.value)}
            className="filter-input"
          />
        </div>
        
        <div className="filter-group">
          <select
            value={experienceFilter}
            onChange={(e) => setExperienceFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">Min Experience</option>
            <option value="1">1+ years</option>
            <option value="3">3+ years</option>
            <option value="5">5+ years</option>
          </select>
        </div>
      </div>

      <div className="profiles-grid">
        {filteredProfiles.map(profile => (
          <div key={profile.id} className="profile-card">
            <div className="profile-header">
              <h3>{profile.name}</h3>
              <span className={`status ${profile.status.toLowerCase()}`}>
                {profile.status}
              </span>
            </div>
            
            <div className="profile-details">
              <p className="email">{profile.email}</p>
              <p className="experience">Experience: {profile.experience} years</p>
              
              <div className="skills-section">
                <h4>Skills:</h4>
                <div className="skills-list">
                  {profile.skills.map(skill => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="profile-actions">
              <button className="action-btn primary">View Details</button>
              <button className="action-btn secondary">Send Message</button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProfiles.length === 0 && (
        <div className="no-results">
          <p>No consultants found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ConsultantProfiles;
