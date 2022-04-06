import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
    
    const history = useHistory();
    
    function auth(event){
        event.preventDefault();
        if(values.username === "douglasadm" && values.password === "superadm123"){
            history.push("/listProject")
        }else{
            alert("Usuario ou senha invalida!")
        }
    }

    const initialValues = {
        username:"",
        password:""
      }
    
  const [values, setValues] = useState(initialValues)

  function onChange(e){
    const {name, value} = e.target
    setValues({...values, [name]: value})
  }

  return (
    <>
      <div className="container my-5">
        <form>
          <div className="row">
            <h1 className="text-center">Login</h1>
            <div className="col-md-6 offset-md-3 my-3">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="form-control"
                value={values.username}
                onChange={onChange}
              />
            </div>
            <div className="col-md-6 offset-md-3 my-3">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="form-control"
                value={values.password}
                onChange={onChange}
              />
            </div>
           
          </div>
          <button type="submit" className="btn btn-primary col-md-6 offset-md-3" onClick={auth}>Entrar</button>
        </form>
      </div>
    </>
  );
}

export default Login;
