import React, { useState } from "react";
import { baseurl } from "../../connection/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [signupD, setSignupD] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSignupD({ ...signupD, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`${baseurl}/signup`, signupD);
      if (response.status === 201) {
        setSignupD({
          username: "",
          email: "",
          password: "",
        });
        setError("");
        setSuccess((prev) => response.data.message);
        setLoading(false);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError((prev) => error.response.data);
    }
  };

  return (
    <div className="container w-50">
      <h2 style={{ textAlign: "center" }}>Sign up</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            required
            value={signupD.username}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
            value={signupD.email}
            onChange={handleInput}
          />
        </div>
        <label htmlFor="username" className="form-label">
          User Password
        </label>
        <div className="input-group mb-3">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            id="password"
            name="password"
            value={signupD.password}
            onChange={handleInput}
            minLength={8}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <button
          type="button"
          className="btn btn-info mb-3 w-100"
          onClick={handleLogin}
          disabled={loading}
        >
          {!loading ? "Sign up" : "checking..."}
        </button>

        <p style={{ textAlign: "center" }}>OR</p>
        <p style={{ marginBottom: "1rem" }}>
          Already Signed up ? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
