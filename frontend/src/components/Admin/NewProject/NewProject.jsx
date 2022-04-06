import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../utils/Request";

function NewProject({id}) {

    const history = useHistory();

  const initialValues = {
    id: "",
    image: "",
    gif: "",
    name: "",
    description: "",
    type: "",
    code: "",
    deploy: "",
    tools: "",
    demo: "",
  };

  const [values, setValues] = useState(id ? null : initialValues);

  function onChange(e){
    const {name, value} = e.target;
    setValues({...values, [name]:value})
  }

  useEffect(()=>{
      if(id){
          axios.get(`${BASE_URL}/projects/${id}`)
            .then((res)=>{
                setValues(res.data)
            })
      }
  },[])

  function onSubmit(e){
    e.preventDefault();

    const method = id ? "put" : "post"
    const url = id ? `${BASE_URL}/projects/${id}` : `${BASE_URL}/projects`;

    axios[method](url, values)
        .then((res)=>{
            history.push("/listProject")
        })
        .catch((error) =>{
            console.log(error)
          })

  }

  if(!values){
    return <div>Carregando...</div>
  }

  return (
    <>
      <div className="container my-5">
        <h3>{id ? "Editar Projeto" : "Cadastrar Projeto"}</h3>
        <form onSubmit={onSubmit}>
          <div className="my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Url da imagem"
              name="image"
              onChange={onChange}
              value={values.image}
            />
          </div>
          <div className="my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Url do gif"
              name="gif"
              onChange={onChange}
              value={values.gif}
            />
          </div>
          <div className="my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nome do Projeto"
              name="name"
              onChange={onChange}
              value={values.name}
            />
          </div>
          <div className="my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Descrição"
              name="description"
              onChange={onChange}
              value={values.description}
            />
          </div>
          <div className="my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Tipo"
              name="type"
              onChange={onChange}
              value={values.type}
            />
          </div>
          <div className="my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Codigo"
              name="code"
              onChange={onChange}
              value={values.code}
            />
          </div>
          <div className="my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Link Funcional (deploy)"
              name="deploy"
              onChange={onChange}
              value={values.deploy}
            />
          </div>
          <div className="my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Ferramentas Usadas"
              name="tools"
              onChange={onChange}
              value={values.tools}
            />
          </div>
          <div className="my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Link Video Demo"
              name="demo"
              onChange={onChange}
              value={values.demo}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Salvar
          </button>
        </form>
      </div>
    </>
  );
}

export default NewProject;
