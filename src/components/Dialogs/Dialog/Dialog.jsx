import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './../Dialogs.module.css'

const Dialog = (props) => {
  return (
    <div className={style["dialog-item"]}>
      <NavLink to={"/dialogs/" + props.id} className={({isActive}) => (isActive ? `${style.active} ${style["dialog-item"]}` : style["dialog-item"])}>{props.name}</NavLink>
    </div>
  );
};

export default Dialog;