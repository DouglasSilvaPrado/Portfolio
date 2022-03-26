import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectById from '../../layout/ProjectById/ProjectById';

function Project() {
    const params = useParams()
    return ( 
        <>
           <ProjectById courseId={`${params.projectId}`} /> 
           {console.log(params)}
        </>
     );
}

export default Project;