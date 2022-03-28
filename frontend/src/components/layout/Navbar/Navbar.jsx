import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="https://i.ibb.co/DM2fF8X/douglas-Foto.jpg"
              alt=""
              width="64"
              height="64"
              className="d-inline-block mx-3 rounded-circle"
            />
            <span className="nav-primary-text d-none d-sm-block">Douglas da Silva Prado</span>
          </a>
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
                <a className="nav-link nav-primary-text" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-primary-text" href="#">
                  Projetos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-primary-text" href="#">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-primary-text" href="#">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
