import React from 'react'
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import NewProject from "../NewProject/NewProject";

function PagesProjectsForm() {
    const {id} = useParams();
    return ( 
        <NewProject id={id ? Number.parseInt(id, 10) : null} />
     );
}

export default PagesProjectsForm;