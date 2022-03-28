import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectById from '../../layout/ProjectById/ProjectById';

function Project() {
    const params = useParams()
    return ( 
        <>
           <ProjectById projectId={`${params.projectId}`} /> 
        </>
     );
}

export default Project;
