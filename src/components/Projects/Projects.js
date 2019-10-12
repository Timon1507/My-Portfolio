import React from 'react'
import s from './Projects.module.css'
import ProjectsItems from './ProjectsItems/ProjectsItems'
import BlockHead from '../BlockHead'

const Projects = (props) => {
  return (
    <div className={s.projects}>
        <div className={s.container}>
          <BlockHead data={props.titleData[1]} />
          <ProjectsItems data={props.data}/>
        </div>
    </div>
  );
}

export default Projects
