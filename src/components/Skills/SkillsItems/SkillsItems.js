import React from 'react'
import s from './SkillsItems.module.css'
import SkillsItem from './SkillsItem/SkillsItem'

const SkillsItems = (props) => {
  return (
    <div className={s.skillsItems}>
      { props.data.map(i => <SkillsItem image={i.image} title={i.title} text={i.text}/>) }
    </div >
  )
}

export default SkillsItems
