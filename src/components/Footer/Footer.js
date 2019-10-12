import React from 'react'
import s from './Footer.module.css'
import Icons from './Icons/Icons'

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <p className={s.headerName}>Анастасия Пыжик</p>
        <Icons />
        <p>&copy; 2019 Все права защищены</p>
      </div>
    </div>
  )
}

export default Footer
