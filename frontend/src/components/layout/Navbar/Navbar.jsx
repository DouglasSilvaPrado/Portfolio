import "./Navbar.css";

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to={"/"}>
            <img
              src="https://i.ibb.co/DM2fF8X/douglas-Foto.jpg"
              alt=""
              width="64"
              height="64"
              className="d-inline-block mx-3 rounded-circle"
            />
            <span className="nav-primary-text d-none d-sm-block">Douglas da Silva Prado</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link nav-primary-text" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-primary-text" to="/projects">
                  Projetos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-primary-text" to="/about">
                  Sobre
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-primary-text" to="/contact">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
