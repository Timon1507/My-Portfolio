import React from 'react'
import s from './SkillsItem.module.css'

const SkillsItem = (props) => {
  return (
      <div className={s.item}>
        <img src={props.image} alt='Skills item'></img>
        <div className={s.describe}>
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </div>
      </div>
  )
}

export default SkillsItem
