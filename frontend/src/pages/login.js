import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Person, Key } from "react-bootstrap-icons";

function Login() {
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [type, setType] = useState(""); 

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await fetch("https://online-exam-portal-vs1n.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setType("success");
        setMessage("Login successful! Redirecting...");

        
        localStorage.setItem("token", data.token);

  
setTimeout(() => {
  const redirectPath = localStorage.getItem("redirectAfterLogin");

  if (redirectPath) {
    navigate(redirectPath);
    localStorage.removeItem("redirectAfterLogin");
  } else {
    navigate("/explore");
  }
}, 1500);

      } else {
        setType("danger");
        setMessage(data.message || "Invalid credentials");
      }

    } catch (error) {
      console.log(error);
      setType("danger");
      setMessage("Error connecting to server");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 text-white"
      style={{
        background: "linear-gradient(135deg, #e3612d, #2b4ea2)",
      }}
    >
      <div className="text-center w-100">

        <h1 className="fw-bold">Login</h1>
        <p className="mb-3">Please Log In First Enter your E-mail and Password</p>

        <p className="mb-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-black">
            Sign Up
          </Link>
        </p>

        <div className="mx-auto" style={{ maxWidth: "400px" }}>

        
          {message && (
            <div className={`alert alert-${type} text-center`}>
              {message}
            </div>
          )}

      
          <form onSubmit={handleSubmit}>

            
            <div className="input-group mb-4 border rounded-3 px-2">
              <span className="input-group-text bg-transparent border-0 text-white">
                <Person />
              </span>
              <input
                type="email"
                name="email"
                className="form-control bg-transparent border-0 text-white"
                placeholder="Username or E-mail"
                onChange={handleChange}
                required
              />
            </div>

            
            <div className="input-group mb-4 border rounded-3 px-2">
              <span className="input-group-text bg-transparent border-0 text-white">
                <Key />
              </span>
              <input
                type="password"
                name="password"
                className="form-control bg-transparent border-0 text-white"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>

          
            <button
              type="submit"
              className="btn w-100 fw-bold"
              style={{
                border: "2px solid #7cff4f",
                color: "#7cff4f",
              }}
            >
              Login
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default Login;