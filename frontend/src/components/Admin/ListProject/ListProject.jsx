import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/Request";
import { Link } from "react-router-dom";

function ListProject() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/projects`).then((res) => {
      console.log(res.data);
      setProjects(res.data);
    });
  }, []);
  return (
    <>
      <div className="container my-5">
        <h3>Lista de Projetos</h3>
        <Link to={`/newProject`} className="btn btn-primary float-end">
          Novo Projeto
        </Link>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Tipo</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{project.type}</td>
                <td>
                  <Link
                    to={`/editProject/${project.id}`}
                    className="btn btn-primary m-1"
                  >
                    Editar
                  </Link>
                  <button className="btn btn-danger m-1">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListProject;
