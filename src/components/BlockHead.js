import React from 'react'
import s from './BlockHead.module.css' 

const BlockHead = (props) => {
  return (
    <div className={s.blockHead}>
      {props.data.isLightColorTitle
        ? <h2 className={s.light}>{props.data.title}</h2>
        : <h2>{props.data.title}</h2>}
        
    </div>
  )
}

export default BlockHead
