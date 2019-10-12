import React from 'react';
import s from './Header.module.css'

const Header = () => {
  return (
    <div className={s.header}>
      <div class={s.container}>
        <div className={s.logo}>PyzhikAnastasia</div>
        <div className={s.navMenu}>
          <button>Меню</button>
          <div className={s.menuItems}>
            <a href='#'>Главная</a>
            <a href='#'>Скиллы</a>
            <a href='#'>Работы</a>
            <a href='#'>Контакты</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
