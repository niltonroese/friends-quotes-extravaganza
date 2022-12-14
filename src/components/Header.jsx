import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
    const { user, isAuthenticated } = useAuth0();
    const { logout } = useAuth0();

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <div className="col-8 text-center">
          <span className="navbar-brand">FRIENDS QUOTES EXTRAVAGANZA</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="col-4">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Characters">
                  Characters
                </Link>
              </li>
              <li className="nav-item">
                {isAuthenticated ? (
                    <>
                     <Link className="nav-link" to="/Quiz">
                        Quiz
                    </Link>
                    </>
                ) : (
                    <Link className="nav-link" to="/Login">
                        Quiz
                    </Link>
                )}
              </li>
              <li className="nav-item">
              {isAuthenticated ? (
                <>
                    <Link className="nav-link" to="/FavoriteQuote">Quotes</Link>
                </>
              ) : (
                null
              )}
                </li>
              <li className="nav-item">
              {isAuthenticated ? (
                <>
                    <Link className="nav-link" to="/Leaderboard">Leaderboard</Link>
                </>
              ) : (
                null
              )}
                </li>
              <li className="nav-item">
              {isAuthenticated ? (
                <>
                    <img className="text-info me-2 mb-1" style={{borderRadius:'50px'}} height={40} width={40} src={user.picture} alt={user.email} />
                    <button type="button" className="btn btn-outline-info btn-sm p-1" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
                </>
              ) : (
                <Link className="nav-link" to="/Login">
                  Log In
                </Link>
              )}
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