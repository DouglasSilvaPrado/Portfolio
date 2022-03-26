import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard({project}) {
    return ( 
        <>
            <div className="card h-100" >
                <img src={project.image} className="card-img-top" alt={project.name} />
                <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                </div>
                <div className="card-footer">
                    <Link to={`/project/${project.id}`}>
                        <div className="btn btn-outline-success w-100">Ver Mais</div>
                    </Link>
                </div>
            </div>
        </>
     );
}

export default ProjectCard;