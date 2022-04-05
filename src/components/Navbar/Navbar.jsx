import React from "react";
import { NavLink } from "react-router-dom";
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul className={style["nav-list"]}>
        <li className={style["nav-item"]}>
          <NavLink to="/profile" className={({isActive}) => (isActive ? `${style.active} ${style["nav-link"]}` : style["nav-link"])}>
            Profile
          </NavLink>
        </li>
        <li className={style["nav-item"]}>
          <NavLink to="/dialogs" className={({isActive}) => (isActive ? `${style.active} ${style["nav-link"]}` : style["nav-link"])}>
            Messages
          </NavLink>
        </li>
        <li className={style["nav-item"]}>
          <NavLink to="/news" className={({isActive}) => (isActive ? `${style.active} ${style["nav-link"]}` : style["nav-link"])}>
            News
          </NavLink>
        </li>
        <li className={style["nav-item"]}>
          <NavLink to="/music" className={({isActive}) => (isActive ? `${style.active} ${style["nav-link"]}` : style["nav-link"])}>
            Music
          </NavLink>
        </li>
        <li className={style["nav-item"]}>
          <NavLink to="/settings" className={({isActive}) => (isActive ? `${style.active} ${style["nav-link"]}` : style["nav-link"])}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
