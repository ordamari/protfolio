import React, { useEffect, useState } from 'react';
import { projectService } from '../services/projectService';

export default function Projects({setElPages,elPages,checkIsInScreen}) {

  const [projects, setProjects] = useState(projectService.query());
  const [isEffectHappend,setIsEffectHappend]= useState(false);

  function setEffect(){
    if(checkIsInScreen(2)){
      setIsEffectHappend(true);
      return true
    }
    else return false;
  }

  return (
    <div 
    ref={(el) => { if (el && !elPages.projects) setElPages(prevState => ({ ...prevState, projects: el })) }} 
    className={`main-container projects ${(isEffectHappend || setEffect())? 'effect':''}`}>
      <div className="h2-container">
        <h2>PROJECTS</h2>
        <div className="projects-container">
          {
            projects.map(project => (

              <div className="project flex" key={project.id}>
                <img src={project.imgUrl} alt="img project" />
                <div className="project-data">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p>{project.createAt}</p>
                  <p>{project.technologies.join('/ ')}</p>
                  <div className="btn-container">
                    <a href={project.liveDemo}>Live Demo</a>
                    <a href={project.repo}>Repositorie</a>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>

    </div>
  )
}

