import React from 'react'
import s from './Contacts.module.css'
import BlockHead from '../BlockHead'

const Contacts = (props) => {
  return (
    <div className={s.contacts}>
      <div className={s.container}>
        <BlockHead data={props.titleData[2]} />
        <form>
          <input type='text' placeholder='Name'/>
          <input type='email' placeholder='E-mail'/>
          <textarea placeholder='Your message'/>
          <button>Отправить</button>
        </form>
      </div>
    </div>
  )
}

export default Contacts
