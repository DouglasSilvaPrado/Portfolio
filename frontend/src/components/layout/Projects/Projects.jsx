import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
function Projects() {
  const project = {
    id:1,  
    image:
      "https://github.com/DouglasSilvaPrado/Sistema-de-Fastfood/raw/main/SistemaDeVendas/src/imagens/TelaPrincipal.JPG",
    name: "Sistema de Fastfood",
    description: "Sistema desenvolvido em Java",
    type: "Desktop",
    code: "https://github.com/DouglasSilvaPrado/Sistema-de-Fastfood",
    tools: "Java",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:6891150094536630272/",
  };

  return (
    <>
      <div className="container my-5">
        <div className="text-center">
          <h2>Projetos</h2>
          <h3 className="text-base">Meus Projetos Pessoais e Profissionais</h3>
        </div>
        <div>
          <div key={project.id} className="col col-sm-6 col-lg-4 col-xl-3 mb-3">
            <ProjectCard project={project} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
