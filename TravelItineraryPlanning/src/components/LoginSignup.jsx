import React, { useState } from "react";

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="center-wrapper">
      <div className="auth-container">
        <div className="form-container">
          <div className="logo">Travel Planner</div>
          <div className="tab-buttons">
            <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>
              Login
            </button>
            <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>
              Signup
            </button>
          </div>
          {isLogin ? (
            <div className="login-form">
              <h2>Login</h2>
              <form>
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
                <button className="submit-button" type="submit">
                  Login
                </button>
              </form>
              {error && <p className="error">{error}</p>}
            </div>
          ) : (
            <div className="signup-form">
              <h2>Create Account</h2>
              <form>
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
                <button className="submit-button" type="submit">
                  Signup
                </button>
              </form>
              {error && <p className="error">{error}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
