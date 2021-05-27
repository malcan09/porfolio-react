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
              <Link
                to="/about"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
            </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/porfolio"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/porfolio"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Porfolio
            </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
            </Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar;