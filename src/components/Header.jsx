import React from "react";
import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
      <div className="container-fluid">
        <div className="col-8 text-center">
          <span className="navbar-text">FRIENDS QUOTES EXTRAVAGANZA</span>
        </div>
        <div className="col-4">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Characters">
                  Characters
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Quiz">
                  Quiz
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </nav>
  );
}

export default Header;
