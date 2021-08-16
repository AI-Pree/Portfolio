import React from 'react';
import {projects} from ".././data/projects"

export default function Projects(){
    return (<div>
        {projects.map((project)=>{
            <p>{project.title}</p>
        })}
    </div>);

}