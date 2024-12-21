import React, { useState } from 'react';

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  
  // Firebase API Key (replace this with your Firebase project web API key)
  const firebaseApiKey = 'AIzaSyDNeWcetV-RHveo8Y-VC4hQl8zTeM5ePok';

  // Function to handle login using Firebase REST API
  const handleLogin = async (e) => {
    e.preventDefault();
    const url = `https://console.firebase.google.com/u/0/project/finance-b3ecd/database/finance-b3ecd-default-rtdb/data/~2F`;
    
    const body = {
      email,
      password,
      returnSecureToken: true
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });
      
      const data = await response.json();
      if (data.error) {
        setError('Login failed: ' + data.error.message);
      } else {
        alert('Login successful!');
      }
    } catch (err) {
      setError('Error logging in: ' + err.message);
    }
  };

  // Function to handle signup using Firebase REST API
  const handleSignup = async (e) => {
    e.preventDefault();
    const url = `https://console.firebase.google.com/u/0/project/finance-b3ecd/database/finance-b3ecd-default-rtdb/data/~2F`;
    
    const body = {
      email,
      password,
      returnSecureToken: true
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });

      const data = await response.json();
      if (data.error) {
        setError('Signup failed: ' + data.error.message);
      } else {
        alert('Account created successfully!');
      }
    } catch (err) {
      setError('Error signing up: ' + err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="form-container">
        <div className="logo">Travel Planner</div>
        <div className="tab-buttons">
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>
            Login
          </button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>
            Signup
          </button>
        </div>
        {isLogin ? (
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="submit-button" type="submit">Login</button>
            </form>
            {error && <p className="error">{error}</p>}
            <div className="footer-text">
              <a href="#">Forgot password?</a>
              <p>
                Want to create an account? <span onClick={() => setIsLogin(false)}>Signup</span>
              </p>
            </div>
          </div>
        ) : (
          <div className="signup-form">
            <h2>Create Account</h2>
            <form onSubmit={handleSignup}>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="submit-button" type="submit">Signup</button>
            </form>
            {error && <p className="error">{error}</p>}
            <div className="footer-text">
              <p>
                Already have an account? <span onClick={() => setIsLogin(true)}>Login now</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;
