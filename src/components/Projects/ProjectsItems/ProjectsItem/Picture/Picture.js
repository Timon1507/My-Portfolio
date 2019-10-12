import React from 'react'
import s from './Picture.module.css'

const Picture = (props) => {
  return (
    <div className={s.picture}>
      <img src={props.img} />
      <a href='#'>Смотреть</a>
    </div>
  )
}

export default Picture
