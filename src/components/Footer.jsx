import React from 'react'

export default function Footer() {
  return (
    <div className="card-footer text-muted bg-dark p-1">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/niltonroese"><i className="fab fa-github"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.linkedin.com/in/niltonmarmittroese/"><i className="fab fa-linkedin"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://medium.com/@niltonroese"><i className="fab fa-medium"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="mailto:niltonroese@gmail.com"><i className="fas fa-mail-bulk"></i></a>
                </li>
            </ul>
            <h6 className="small text-center">© 2022 Nilton Roese development. All rights reserved.</h6>
        </div>
  )
}
