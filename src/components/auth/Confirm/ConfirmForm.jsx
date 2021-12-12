import React, {useEffect, useState} from 'react'
import {Field, reduxForm} from "redux-form";
import InputField from "../../common/Fields/InputField";
import style from '../Login/LoginForm.module.css'


export const ConfirmForm = (props) => {
    const [code, setCode] = useState(props.code)
    useEffect(() => {
        console.log('Ваш код для входа: ',code)
        alert('Ваш код для входа: ' + code)
    }, [code])
    return (
      <div>
          <form onSubmit={props.handleSubmit}>
              <div><Field className={style.input} name='confirmCode' component={InputField} type='number'  placeholder='Input code...'/></div>
              <div className={style.sendCode} onClick={() => {
                  let newCode = props.getRandomCode(100000, 1000000)
                  setCode(newCode)
                  props.setConfirmCode(newCode)
              }
              }>Send the code again?
              </div>
              <button className={style.button} type={'submit'}>Send code</button>
          </form>
      </div>
    )
}

const ReduxConfirmForm = reduxForm({form: 'confirm'})(ConfirmForm)
export default ReduxConfirmForm;