import React from "react";
import preloaderImage from '../../assets/images/Spinner-1s-200px.svg'

const Preloader = () => {
    return (
      <div>
          <img src={preloaderImage}/>
      </div>
    )
}

export default Preloader