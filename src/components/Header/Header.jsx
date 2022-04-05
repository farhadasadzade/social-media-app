import React from 'react';
import logo from '../../images/logo.png';
import style from './Header.module.css'


const Header = () => {
    return (
    <header className={style.header}>
        <img className={style.logo} src={logo} alt="" />
    </header>
    )
}

export default Header;