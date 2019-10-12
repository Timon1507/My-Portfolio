import React from 'react';
import s from './Skills.module.css'
import SkillsItems from './SkillsItems/SkillsItems'
import BlockHead from '../BlockHead'

const Skills = (props) => {
  return (
    <div className={s.skills}>
      <div className={s.container}>
        <BlockHead data={props.titleData[0]}/>
        <SkillsItems data={props.data}/>
      </div>
    </div>
  );
}

export default Skills
