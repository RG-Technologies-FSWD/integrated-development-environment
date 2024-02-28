import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const User = () => {
  const token = localStorage.getItem("rg-ide-token");
  const decode = token ? jwtDecode(token) : null;
  const navigate = useNavigate();

  useEffect(() => {
    if (!decode) {
      navigate("/login");
    }
  }, [decode]);

  const handleLogout = () => {
    const bool = window.confirm("Do you want to logout ?");
    if (bool) {
      localStorage.removeItem("rg-ide-token");
      setTimeout(() => {
        window.location.href = "/";
      }, 600);
    }
  };

  return (
    <div className="container">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://cdn.dribbble.com/users/730703/screenshots/6581243/avento.gif" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{decode?.name}</h5>
              <p className="card-text">
                Registered email : <b>{decode?.email}</b>
              </p>
              <button className="btn btn-danger" onClick={handleLogout}>
                logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
