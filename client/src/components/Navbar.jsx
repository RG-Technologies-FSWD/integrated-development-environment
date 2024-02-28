import React from "react";


const Navbar = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        
        <a className="navbar-brand" href="https://rg-tech.in/">
          <img
            src="../assets/logo_blackbase.png"
            alt="logo"
            className="img-fluid"
            style={{ width: "90px", height: "60px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{border:0}}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav"
            style={{
              width: "99%",
              paddingRight: "10px",
              display: "flex",
              justifyContent: "right",
            }}
          >
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/javascript">
                JavaScript
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/python">
                Python
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/sql">
                SQL
              </a>
          </li>*/}
            <li className="nav-item">
              <a style={{color:"white"}} className="nav-link" href="/login">
                Login
              </a>
            </li> 
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
