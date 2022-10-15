import React from "react";
import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary ">
      <div class="container-fluid">
        <div class="col-8 text-center">
          <span class="navbar-text">FRIENDS QUOTES EXTRAVAGANZA</span>
        </div>
        <div class="col-4">
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Characters">
                  Characters
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Quiz">
                  Quiz
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Login">
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
