import React from 'react'
import { Link } from 'react-router-dom'

import "./ProjectCard.css"

function ProjectCard({project}) {
    return ( 
        <>
            <div className="card card-project h-100 mt-5" >
                <img src={project.image} className="card-img-top" alt={project.name} />
                <div className="card-body">
                    <h5 className="card-title text-center">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                </div>
                <div className="card-footer">
                    <Link to={`/project/${project.id}`}>
                        <div className="btn btn-outline-primary w-100">Ver Mais</div>
                    </Link>
                </div>
            </div>
        </>
     );
}

export default ProjectCard;