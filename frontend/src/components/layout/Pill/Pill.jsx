import axios from "axios";
import React, { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import {BASE_URL} from "../../utils/Request"

function Pill() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/projects`).then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <>
      <div className="container my-5" data-uw-styling-context="true">
        <div className="row row-cols-1" data-uw-styling-context="true">
          <ul
            className="nav nav-pills mb-3 d-flex justify-content-center"
            id="pills-tab"
            role="tablist"
            data-uw-styling-context="true"
          >
            <li
              className="nav-item col"
              role="presentation"
              data-uw-styling-context="true"
            >
              <button
                className="nav-link active px-5"
                id="pills-todos-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-todos"
                type="button"
                role="tab"
                aria-controls="pills-todos"
                aria-selected="true"
                data-uw-styling-context="true"
              >
                Todos
              </button>
            </li>
            <li
              className="nav-item col"
              role="presentation"
              data-uw-styling-context="true"
            >
              <button
                className="nav-link px-5"
                id="pills-aplicativos-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-aplicativos"
                type="button"
                role="tab"
                aria-controls="pills-aplicativos"
                aria-selected="false"
                data-uw-styling-context="true"
              >
                Aplicativos
              </button>
            </li>
            <li
              className="nav-item col"
              role="presentation"
              data-uw-styling-context="true"
            >
              <button
                className="nav-link px-5"
                id="pills-sites-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-sites"
                type="button"
                role="tab"
                aria-controls="pills-sites"
                aria-selected="false"
                data-uw-styling-context="true"
              >
                Sites
              </button>
            </li>
            <li
              className="nav-item col"
              role="presentation"
              data-uw-styling-context="true"
            >
              <button
                className="nav-link px-5"
                id="pills-outro-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-outro"
                type="button"
                role="tab"
                aria-controls="pills-outro"
                aria-selected="false"
                data-uw-styling-context="true"
              >
                Outros
              </button>
            </li>
          </ul>
        </div>
        {/* tablist */}

        <div
          className="tab-content"
          id="pills-tabContent"
          data-uw-styling-context="true"
        >
          <div
            className="tab-pane fade show active"
            id="pills-todos"
            role="tabpanel"
            aria-labelledby="pills-todos-tab"
            data-uw-styling-context="true"
          >
            <div
              className="container my-5 text-center"
              data-uw-styling-context="true"
            >
              <div className="row" data-uw-styling-context="true">
                {projects.map((project) => (
                  <div key={project.id} className="col-md-6 col-lg-4 mb-3">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>

              {/*Group Cards*/}
            </div>
            {/*Container Cards*/}
          </div>
          {/* tab-Todos */}

          <div
            className="tab-pane fade"
            id="pills-aplicativos"
            role="tabpanel"
            aria-labelledby="pills-aplicativos-tab"
            data-uw-styling-context="true"
          >
            <div
              className="container my-5 text-center"
              data-uw-styling-context="true"
            >
              <div className="row" data-uw-styling-context="true">
                {projects.map((project) => (
                  <>
                    {project.type === "App" && (
                      <>
                        <div key={project.id} className="col-md-6 col-lg-4 mb-3">
                          <ProjectCard project={project} />
                        </div>
                      </>
                    )}
                  </>
                ))}
              </div>
              {/*Group Cards*/}
            </div>
            {/*Container Cards*/}
          </div>
          {/* tab-Aplicativos */}

          <div
            className="tab-pane fade"
            id="pills-sites"
            role="tabpanel"
            aria-labelledby="pills-sites-tab"
            data-uw-styling-context="true"
          >
            <div
              className="container my-5 text-center"
              data-uw-styling-context="true"
            >
              <div className="row" data-uw-styling-context="true">
                {projects.map((project) => (
                  <>
                    {project.type === "Site" && (
                      <>
                        <div key={project.id} className="col-md-6 col-lg-4 mb-3">
                          <ProjectCard project={project} />
                        </div>
                      </>
                    )}
                  </>
                ))}
              </div>{" "}
              {/*Group Cards*/}
            </div>
            {/*Container Cards*/}
          </div>
          {/* tab-Sites */}

          <div
            className="tab-pane fade"
            id="pills-outro"
            role="tabpanel"
            aria-labelledby="pills-outro-tab"
            data-uw-styling-context="true"
          >
            <div className="text-center" data-uw-styling-context="true">
              <h1 className="my-3" data-uw-styling-context="true">
                Veja outros Projetos no meu GitHub 👇
              </h1>
              <a
                href="https://github.com/DouglasSilvaPrado"
                target="_blank"
                data-uw-styling-context="true"
              >
                <img
                  src="https://i.ibb.co/4Tx0JJS/GitHub.png"
                  className="img-fluid"
                  alt="github-perfil"
                  data-uw-styling-context="true"
                />
              </a>
            </div>{" "}
            {/*content github*/}
          </div>
          {/* tab-Outors*/}
        </div>
        {/* tabs-content */}
      </div>{" "}
      {/* container*/}
    </>
  );
}

export default Pill;
