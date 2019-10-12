import React from 'react'
import s from './Slogan.module.css'

const Slogan = () => {
  return (
    <div className={s.slogan}>
      <div className={s.container}>
        <p>Рассматриваю варианты удаленной работы</p>
        <button>Нанять меня</button>
      </div>
    </div>
  )
}

export default Slogan
