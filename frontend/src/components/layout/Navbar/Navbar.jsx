import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="container">
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
            <div
              className="collapse navbar-collapse justify-content-lg-between"
              id="navbarNavAltMarkup"
            >
              <div to="/" className="navbar-brand d-flex">
                <img
                  src="https://i.ibb.co/DM2fF8X/douglas-Foto.jpg"
                  alt="rapaz sorrindo"
                  width="64"
                  height="64"
                  className="rounded-circle"
                />
                <div className="mx-3">
                  <h5>Douglas da Silva Prado</h5>
                  <h5>Full Stack Developer</h5>
                </div>
              </div>

              <div className="navbar-nav">
                <a to="" className="nav-link">
                  Home
                </a>
                <a to="" className="nav-link">
                  Projetos
                </a>
                <a to="" className="nav-link">
                  Sobre
                </a>
                <a to="" className="nav-link">
                  Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
