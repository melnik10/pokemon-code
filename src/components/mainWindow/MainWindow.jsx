import React from 'react'
import style from './MainWindow.module.css'
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const MainWindow = (props) => {
    return (
      <div className={style.mainWindowWrapper}>
          <div className={style.header}><Header/></div>
          <div className={style.sidebar}><Sidebar/></div>
          <div className={style.content}>Content</div>
      </div>
    )
}

export default MainWindow;