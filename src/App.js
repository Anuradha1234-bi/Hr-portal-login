import React, { useState } from "react";
import "./App.css";
import illustration from "./assets/illustration.png";
import logo from "./assets/logo.png";

function App() {
  const [page, setPage] = useState("login");
  const [role, setRole] = useState("Admin");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = (value) => {
    let score = 0;
    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[!@#$%^&*]/.test(value)) score++;

    if (!value) setStrength("");
    else if (score <= 1) setStrength("Weak");
    else if (score === 2 || score === 3) setStrength("Medium");
    else setStrength("Strong");
  };

  return (
    <div className="page">
      <div className="card" style={{ backgroundImage: `url(${illustration})` }}>
        <div className="login-box">

          {/* LOGO */}
          <div className="logo-area">
            <img src={logo} alt="Logo" className="logo-image" />
          </div>

          <h3 className="title">
            <span>HR</span> PORTAL
          </h3>

          {/* ================= LOGIN ================= */}
          {page === "login" && (
            <>
              <div className="form-group">
                <label>Select Role</label>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option>Admin</option>
                  <option>HR</option>
                  <option>Employee</option>
                  <option>Intern</option>
                </select>
              </div>

              <div className="form-group email-container">
                <label>Username</label>
                <input type="email" placeholder="Enter your email" />
              </div>

              <div className="form-group password-container">
                <label>Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                />
                <span
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  👁
                </span>
              </div>

              <div className="forgot">Forgot Password?</div>

              <button>Login</button>

              <div className="support">
                Unable to login? Kindly connect with{" "}
                <a href="mailto:itsupport@company.com">IT Support</a>
              </div>

              <div className="register-link">
                New User?{" "}
                <span onClick={() => setPage("register")}>Register Here</span>
              </div>
            </>
          )}

          {/* ================= REGISTER ================= */}
          {page === "register" && (
            <>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter full name" />
              </div>

              <div className="form-group">
                <label>Employee ID</label>
                <input type="text" placeholder="Enter employee ID" />
              </div>

              <div className="form-group email-container">
                <label>Email Address</label>
                <input type="email" placeholder="Enter email" />
              </div>

              <div className="form-group">
                <label>Mobile Number</label>
                <input type="tel" placeholder="Enter mobile number" />
              </div>

              <div className="form-group">
                <label>Role</label>
                <select>
                  <option>Admin</option>
                  <option>HR</option>
                  <option>Employee</option>
                  <option>Intern</option>
                </select>
              </div>

              <div className="form-group">
                <label>Department</label>
                <input type="text" placeholder="Enter department" />
              </div>

              <div className="form-group password-container">
                <label>Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create strong password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    checkStrength(e.target.value);
                  }}
                />
                <span
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  👁
                </span>

                {strength && (
                  <div className={`password-hint ${strength.toLowerCase()}`}>
                    Strength: {strength}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm password" />
              </div>

              <button disabled={strength !== "Strong"}>
                Register
              </button>

              {strength !== "Strong" && (
                <div className="password-hint weak">
                  Password must be STRONG to enable registration
                </div>
              )}

              <div className="register-link">
                Already have an account?{" "}
                <span onClick={() => setPage("login")}>Login</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
