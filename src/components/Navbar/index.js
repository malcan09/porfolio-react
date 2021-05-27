import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Miguel Alcantar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">About Me</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="#">Porfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Resume</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      
      </ul>
    
    </div>
  </div>
</nav>
    )
}

export default Navbar;