import React from 'react'

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary ">
    <div class="container-fluid">
      <div class="col-6">
        <span class="navbar-text">FRIENDS QUOTES EXTRAVAGANZA</span>
      </div>
      <div class="col-6">
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Characters
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Quiz
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Header
