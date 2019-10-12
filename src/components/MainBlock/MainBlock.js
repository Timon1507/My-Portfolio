import React from 'react';
import s from './MainBlock.module.css'
import Photo from './Photo/Photo';
import Greeting from './Greeting/Greeting';

const MainBlock = () => {
  return (
    <div className={s.mainBlock}>
      <div className={s.container}>
        <Greeting />
        <Photo />
      </div>
    </div>
  );
}

export default MainBlock;
