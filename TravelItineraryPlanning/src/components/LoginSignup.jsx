import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Replace with your Firebase API key and database URL
  const API_KEY = "YOUR_FIREBASE_API_KEY"; // Found in Firebase console -> Project settings -> Web API Key
  const DATABASE_URL = "https://YOUR_PROJECT_ID.firebaseio.com"; // Found in Firebase console -> Realtime Database

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (isLogin) {
      // Handle Login
      try {
        const response = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email,
              password,
              returnSecureToken: true,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to login. Please check your credentials.");
        }

        const data = await response.json();
        console.log("Login successful:", data);
        navigate("/home");
      } catch (err) {
        setError(err.message);
      }
    } else {
      // Handle Signup
      try {
        const authResponse = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email,
              password,
              returnSecureToken: true,
            }),
          }
        );

        if (!authResponse.ok) {
          throw new Error("Failed to create an account. Try again.");
        }

        const authData = await authResponse.json();
        console.log("Signup successful:", authData);

        // Store additional user details in Realtime Database
        const dbResponse = await fetch(
          `${DATABASE_URL}/users/${authData.localId}.json?auth=${authData.idToken}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              email,
            }),
          }
        );

        if (!dbResponse.ok) {
          throw new Error("Failed to store user data in the database.");
        }

        console.log("User data stored successfully:", await dbResponse.json());
        navigate("/home");
      } catch (err) {
        setError(err.message);
      }
    }
  };

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
              <form onSubmit={handleSubmit}>
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
              <form onSubmit={handleSubmit}>
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
