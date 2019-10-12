import React from 'react';
import s from './Photo.module.css'
import mainPhoto from '../../../images/mainPhoto.jpg'

const Photo = () => {
  return (
    <div className={s.photo}>
      <img src={mainPhoto} alt='MainPhoto'></img>
    </div>
  );
}

export default Photo;
