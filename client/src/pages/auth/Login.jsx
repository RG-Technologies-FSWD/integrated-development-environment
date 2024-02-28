import React, { useState } from "react";
import { baseurl } from "../../connection/api";
import axios from "axios";

const Login = () => {
  const [loginD, setLoginD] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingF, setLoadingF] = useState(false);
  const [restmail, setResetMail] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginD({ ...loginD, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`${baseurl}/login`, loginD);
      setLoading(false);
      if (response.data.token) {
        setError("");
        setSuccess(response.data.message);
        localStorage.setItem("rg-ide-token",response.data.token)
        setLoginD({
          email: "",
          password: "",
        });
        setTimeout(() => {
          window.location.href="/javascript"
        }, 600);
      }
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.error);
    }
  };

  const handleForget = async () => {
    try {
      setLoadingF(true);
      const res = await axios.post(`${baseurl}/reset-password`, {
        email: loginD.email,
      });
      setLoadingF(false);
      if (res.data.status) {
        setResetMail("No user Found");
      } else {
        setResetMail(
          "A mail has been sent to you ,You can reset password with 5 min ,check your spam folders too"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container w-50">
      <h2 style={{ textAlign: "center" }}>Login</h2>
      {restmail && (
        <p style={{ color: "green", fontSize: "17px" }}>
          <u>{restmail}</u>
        </p>
      )}
      <form className="auth-forms">
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
            value={loginD.email}
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
            value={loginD.password}
            onChange={handleInput}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => setShowPassword(!showPassword)}

          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <h6
          style={{
            textAlign: "end",
            color: "grey",
            fontSize: "13px",
            padding: "5px 0",
            cursor: "pointer",
          }}
          onClick={handleForget}
        >
          {loadingF ? "checking ..." : "Forgot password"}
        </h6>
        <button
          type="button"
          className="btn btn-info mb-3 w-100"
          onClick={handleLogin}
          disabled={loading}
        >
         { loading ? "Checking...":"Login"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <p style={{ textAlign: "center" }}>OR</p>
        <p style={{ marginBottom: "1rem" }}>
          Need an Account ? <a href="/signup">Register Now</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
