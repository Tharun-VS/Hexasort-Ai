// components/JobDescriptionRanking.js
import React, { useState } from 'react';
import './JobDescriptionRanking.css';

const JobDescriptionRanking = ({ user }) => {
  const [jobDescription, setJobDescription] = useState('');
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(false);

  const mockProfiles = [
    { id: 1, name: 'John Smith', skills: ['React', 'Node.js', 'Python'], experience: 5, score: 95 },
    { id: 2, name: 'Sarah Johnson', skills: ['Java', 'Spring', 'MySQL'], experience: 3, score: 87 },
    { id: 3, name: 'Mike Wilson', skills: ['Angular', 'TypeScript', 'MongoDB'], experience: 4, score: 82 },
    { id: 4, name: 'Emily Davis', skills: ['Python', 'Django', 'PostgreSQL'], experience: 6, score: 78 },
    { id: 5, name: 'Chris Brown', skills: ['Vue.js', 'Express', 'Redis'], experience: 2, score: 71 }
  ];

  const handleRanking = () => {
    if (!jobDescription.trim()) return;
    
    setLoading(true);
    
    // Simulate API call for ranking
    setTimeout(() => {
      const rankedProfiles = [...mockProfiles].sort((a, b) => b.score - a.score);
      setRankings(rankedProfiles);
      setLoading(false);
    }, 2000);
  };

  const sendNotification = (profileId) => {
    alert(`Notification sent to consultant ${profileId}`);
  };

  return (
    <div className="ranking-container">
      <div className="ranking-header">
        <h2>Job Description Matching & Ranking</h2>
        <p>Compare consultant profiles against job requirements</p>
      </div>

      <div className="jd-input-section">
        <label htmlFor="jobDescription">Job Description</label>
        <textarea
          id="jobDescription"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Enter the job description with required skills, experience, and qualifications..."
          rows={6}
        />
        <button 
          onClick={handleRanking} 
          disabled={loading || !jobDescription.trim()}
          className="rank-btn"
        >
          {loading ? 'Processing...' : 'Find & Rank Consultants'}
        </button>
      </div>

      {loading && (
        <div className="loading-section">
          <div className="spinner"></div>
          <p>Analyzing job description and ranking consultants...</p>
        </div>
      )}

      {rankings.length > 0 && (
        <div className="rankings-section">
          <h3>Ranked Consultant Matches</h3>
          <div className="rankings-list">
            {rankings.map((profile, index) => (
              <div key={profile.id} className={`ranking-card ${index < 3 ? 'top-match' : ''}`}>
                <div className="rank-number">#{index + 1}</div>
                <div className="profile-info">
                  <h4>{profile.name}</h4>
                  <p className="experience">Experience: {profile.experience} years</p>
                  <div className="skills">
                    {profile.skills.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="match-score">
                  <div className="score-circle">
                    <span className="score">{profile.score}%</span>
                  </div>
                  <p>Match Score</p>
                </div>
                <div className="actions">
                  <button 
                    onClick={() => sendNotification(profile.id)}
                    className="notify-btn"
                  >
                    Send Email
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {rankings.length > 3 && (
            <div className="ranking-summary">
              <p>Showing top {rankings.length} matches. Top 3 matches highlighted above.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default JobDescriptionRanking;
