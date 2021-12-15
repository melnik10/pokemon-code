import React, {useState} from "react";
import Preloader from "../Preloader/Preloader";
import style from './Image.module.css'

const Image = ({image, onClickImage = () => false}) => {

    const [isLoadImage, setIsLoadImage] = useState(true)
    let preloaderStyle, imageStyle
    if (isLoadImage) {
        preloaderStyle = "block"
        imageStyle = "none"
    } else {
        preloaderStyle = "none"
        imageStyle = "block"
    }
    
    return (
      <div className={style.image}>
          <div style={{display: preloaderStyle}}>
              <Preloader style={'width=50px'}/>
          </div>
          {image ? <div style={{display: imageStyle, height: '100%'}}>
              <img onLoad={() => setIsLoadImage(false)} onClick={() => onClickImage()} src={image}/>
          </div> : ''}
      </div>
    )
}

export default Image