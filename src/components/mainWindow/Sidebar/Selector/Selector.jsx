import React, {useMemo, useState} from "react";
import style from './Selector.module.css'
import {Field, reduxForm} from "redux-form";
import InputField from "../../../Fields/InputField";

const compareValue = (value, inputValue) => {
    if (!inputValue) {
        return true
    } else {
        return value.toString().toUpperCase().includes(inputValue.toUpperCase())
    }
}

const Selector = (props) => {
    const [isHideSelect, setHideSelect] = useState(true)
    const [inputValue, setInputValue] = useState('')
    const [inputPlaceholder, setInputPlaceholder] = useState(props[props.selectorType][0])
    return (
      <form>
          <div className={style.selectorName}>
              <span>{props.selectorType.toString().toUpperCase()}</span>
          </div>
          <div lassName={style.selector}>
              <div onClick={() => setHideSelect(!isHideSelect)}
                   className={isHideSelect ? `${style.inputArrowSelector} ${style.active}` : style.inputArrowSelector}>
              </div>
              <Field component={InputField}
                     name={props.inputName}
                     // onFocus={() => setHideSelect(false)}
                     onChange={(event, newInputValue) => {
                         setInputValue(newInputValue)
                     }}
                     inputValue={inputValue}
                     className={style.inputSelector}
                     onClick={() => setHideSelect(!isHideSelect)}
                     placeholder={inputPlaceholder}/>

              <div className={isHideSelect ? `${style.selectorItems} ${style.hide}` : style.selectorItems}>
                  <div>
                      {props[props.selectorType] ? props[props.selectorType].filter((value) => compareValue(value, inputValue)).map((value, index) => {
                          return (
                            <div className={style.selectorChild} onClick={(event) => {
                                const placeholderValue = event.target.innerText
                                props.onClickSelectorValue(placeholderValue)
                                setInputPlaceholder(placeholderValue)
                                setInputValue('')
                                setHideSelect(true)
                            }}>{value}</div>)
                      }) : ''}
                  </div>
              </div>
          </div>
      </form>

    )
}


const reduxSelector = reduxForm({form: 'selectorForm'})(Selector)

export default reduxSelector;