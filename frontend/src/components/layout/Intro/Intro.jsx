import React from "react";
import { Link } from 'react-router-dom'

function Intro() {
  return (
    <>
      <div className="container my-5 pt-5" id="intro">
        <div className="row">
          <div className="col-sm-12 col-md-6 text-center">
            <h3 className="text-primary">Full Stack Develop​er</h3>
            <div className="text-lg-start my-3">
              <p className="text-base">Olá meu nome e</p>
              <h3 className="text-primary mb-3">Douglas da Silva Prado</h3>
              <p>
                Sou apaixonado pelo mundo da tecnologia. Sou formado pela RecodePro como desenvolvedor full stack e estou na graduação de Análise e Desenvolvimento de Sistemas pela FAEL.
              </p>
              <div className="d-flex justify-content-between mt-5">
                <Link
                  to="/projects"
                  className="btn btn-lg btn-outline-primary rounded-pill"
                >
                  Projetos
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-lg btn-primary rounded-pill"
                >
                  Entre em Contato
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 text-center">
            <img
              src="https://douglas-silva-prado-4.netlify.app/images/full-stack1.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
