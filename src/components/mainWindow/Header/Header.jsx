import React from "react";
import style from './Header.module.css'
const Header = (props) => {
    return (
      <div className={style.header}>
          <div className={style.backButton}>Back</div>
          <div className={style.logoutButton}>Logout</div>
      </div>
    )
}

export default Header;
