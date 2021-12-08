import React, {useState} from "react";
import style from './Selector.module.css'

const compareValue = (value, inputValue) => {
    if(!inputValue) {
        return true
    }
    else if(value === inputValue) {
        return true;
    }
}

const Selector = (props) => {
    const [isHideSelect, setHideSelect] = useState(false)
    return (
      <div>
          <div>
              <span>Type</span>
              <span onClick={() => setHideSelect(!isHideSelect)}>Button</span>
          </div>
          <div className={isHideSelect? style.hide : style.nohide}>
              <input type={'input'} placeholder={'Type something'}/>
              {props.subtypes ? props.subtypes.filter((value) => compareValue(value, '')).map((value, index) => <div className={style.selectorChild} key={index}>{value}</div> ) : ''}
          </div>
      </div>

    )
}

export default Selector