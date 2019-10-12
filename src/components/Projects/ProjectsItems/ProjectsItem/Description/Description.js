import React from 'react'
import s from './Description.module.css'

const Description = (props) => {
  return (
    <div className={s.description}>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}

export default Description
