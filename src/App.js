import React, { useState } from "react";
import "./App.css";
import illustration from "./assets/illustration.png";
import logo from "./assets/logo.png";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("Admin");

  return (
    <div className="page">
      <div
        className="card"
        style={{ backgroundImage: `url(${illustration})` }}
      >
        <div className="login-box">
          {/* Logo */}
          <div className="logo-area">
            <img src={logo} alt="Logo" className="logo-image" />
          </div>

          {/* Title */}
          <h3 className="title">
            <span>HR</span> PORTAL
          </h3>

          {/* Role Selection */}
          <div className="role-select">
            <label htmlFor="role">Select Role:</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Admin">Admin</option>
              <option value="HR">HR</option>
              <option value="Employees">Employees</option>
              <option value="Interns">Interns</option>
            </select>
          </div>

          {/* Username */}
          <input type="text" placeholder="Username" />

          {/* Password */}
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </span>
          </div>

          {/* Change Password & Login */}
          <div className="change">Change Password</div>
          <button>Login</button>

          {/* Support Text */}
          <div className="support">
            Unable to login? Kindly connect with IT Support Team
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
