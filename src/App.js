import React, { useState } from 'react';

import './App.css';
// hello
function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Aenigma WebApp</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit" className="login-button">
            Start Quest
          </button>
        </form>
        <div className="extra-links">
          <a href="#">Forgot Password?</a>
          <a href="#">Create Account</a>
        </div>
      </div>
    </div>
  );
}

export default App;
