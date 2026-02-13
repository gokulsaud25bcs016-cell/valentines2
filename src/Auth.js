import React, { useState } from "react";
import "./Auth.css";

export default function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">

      <div className="auth-box">

        {/* LEFT FORM */}
        <div className="auth-form">

          <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>

          <p>
            {isLogin
              ? "Login to continue learning"
              : "Sign up and start learning"}
          </p>

          {!isLogin && (
            <input type="text" placeholder="Full Name" />
          )}

          <input type="text" placeholder="Email" />

          <input type="password" placeholder="Password" />

          <button
            onClick={() => onLogin()}
            className="auth-btn"
          >
            {isLogin ? "Login" : "Register"}
          </button>

          <div className="auth-switch">

            {isLogin ? (
              <>
                Don't have an account?
                <span onClick={() => setIsLogin(false)}>
                  Sign Up
                </span>
              </>
            ) : (
              <>
                Already have account?
                <span onClick={() => setIsLogin(true)}>
                  Login
                </span>
              </>
            )}

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="auth-image">

          <div className="image-overlay">

            <h1>RuralLearn AI</h1>

            <p>
              Learn Anywhere. Learn Smart.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}