import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Test API connection
    axios.get('/api/health')
      .then(response => {
        setHealth(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('API connection failed:', error);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>🌐 Meuso</h1>
          <p>Multi-dimensional Social Platform</p>
        </header>

        <main className="app-main">
          {loading ? (
            <p>Connecting to server...</p>
          ) : health ? (
            <div className="status-card success">
              <h2>✅ System Ready</h2>
              <p>Status: {health.status}</p>
              <p>Message: {health.message}</p>
              <p className="timestamp">Time: {new Date(health.timestamp).toLocaleString()}</p>
            </div>
          ) : (
            <div className="status-card error">
              <h2>❌ Connection Failed</h2>
              <p>Unable to connect to backend server</p>
              <p>Please ensure the backend is running on port 5000</p>
            </div>
          )}

          <div className="info-card">
            <h3>🚀 Checkpoint #1 Complete!</h3>
            <ul>
              <li>✅ Project structure created</li>
              <li>✅ Backend server configured</li>
              <li>✅ Frontend React app initialized</li>
              <li>✅ Database schema defined</li>
              <li>✅ Basic health check working</li>
            </ul>
          </div>
        </main>

        <footer className="app-footer">
          <p>Ready for Checkpoint #2: User Authentication</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
