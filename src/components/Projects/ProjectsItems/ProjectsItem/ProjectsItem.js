import React from 'react'
import s from './ProjectsItem.module.css'
import Picture from './Picture/Picture'
import Description from './Description/Description'

const ProjectsItem = (props) => {
  return (
    <div className={s.item}>
      <Picture img={props.img}/>
      <Description title={props.title} text={props.text}/>
    </div>
  )
}

export default ProjectsItem
