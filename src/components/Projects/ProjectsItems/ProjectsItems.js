import React from 'react'
import s from './ProjectsItems.module.css'
import ProjectsItem from './ProjectsItem/ProjectsItem'

const ProjectsItems = (props) => {
  return (
    <div className={s.projectsItems}>
      {props.data.map(p => <ProjectsItem
        img={p.image}
        title={p.title}
        text={p.text} />)}
    </div >
  )
}

export default ProjectsItems
