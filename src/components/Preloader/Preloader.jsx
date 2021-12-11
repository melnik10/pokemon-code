import React from "react";
import preloaderImage from '../../assets/images/Spinner-1s-200px.svg'
import style from './Preloader.module.css'

const Preloader = () => {
    return (
      <div className={style.preloader}>
          <img src={preloaderImage}/>
      </div>
    )
}

export default Preloader