import React from 'react'
import s from './Greeting.module.css'

const Greeting = () => {
  return (
    <div className={s.greeting}>
      <span>Привет!</span>
      <span>Меня зовут<br/><span>Анастасия Пыжик</span></span>
      <span>Я front-end разработчик.</span>
    </div>
  );
}

export default Greeting
