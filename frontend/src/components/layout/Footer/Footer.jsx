import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="container mt-5 py-5">
          <div className="row text-center d-flex align-items-center">
            <div className="col-md-6">
              <h3 className="fs-1">
                Conecte-se com <br /> minhas redes sociais:
              </h3>
            </div>
            <div className="col-md-6">
              <a
                href="https://www.linkedin.com/in/douglas-da-silva-prado-2633b8130/"
                target="_blank"
              >
                <i className="bi bi-linkedin mx-1" style={{ fontSize: 40 }}></i>
              </a>
              <a href="https://github.com/DouglasSilvaPrado" target="_blank">
                <i className="bi bi-github mx-1" style={{ fontSize: 40 }}></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5521990026135"
                target="_blank"
              >
                <i className="bi bi-whatsapp mx-1" style={{ fontSize: 40 }}></i>
              </a>
              <a href="mailto:douglassilvadaprado@gmail.com" target="_blank">
                <i className="bi bi-envelope mx-1" style={{ fontSize: 40 }}></i>
              </a>
              <a
                href="https://www.instagram.com/douglas_silva_prado/"
                target="_blank"
              >
                <i className="bi bi-instagram mx-1" style={{ fontSize: 40 }}></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-dark mt-5 text-white py-4">
          <Link to={"/admin"} className="btn"></Link>
          <p className="text-center">© Todos os Diretos Reservados - Douglas da Silva Prado.</p>
        </div>

      </footer>
    </>
  );
}

export default Footer;
