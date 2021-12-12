import React from "react";
import style from './Header.module.css'
import {Redirect} from "react-router-dom";
const Header = (props) => {
    return (
      <div className={style.header}>
          <div className={style.backButton}>Back</div>
          <div onClick={() => {
              delete localStorage.isConfirm
              props.logout()
           }} className={style.logoutButton}>Logout</div>
      </div>
    )
}

export default Header;
