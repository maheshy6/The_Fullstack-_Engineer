import React, { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="form-container">
        <div className="logo">Tarvel Planner</div>
        <div className="tab-buttons">
          <button
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? 'active' : ''}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>
        {isLogin ? (
          <div className="login-form">
            <h2>Login</h2>
            <form>
              <input type="email" placeholder="Enter your email" required />
              <input type="password" placeholder="Enter your password" required />
              <button className="submit-button" type="submit">Login</button>
            </form>
            <div className="footer-text">
              <a href="#">Forgot password?</a>
              <p>
                Want to create account? <span onClick={() => setIsLogin(false)}>Signup</span>
              </p>
            </div>
          </div>
        ) : (
          <div className="signup-form">
            <h2>Create Account</h2>
            <form>
              <input type="text" placeholder="Enter your name" required />
              <input type="email" placeholder="Enter your email" required />
              <input type="password" placeholder="Enter your password" required />
              <button className="submit-button" type="submit">Signup</button>
            </form>
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

export default App;
