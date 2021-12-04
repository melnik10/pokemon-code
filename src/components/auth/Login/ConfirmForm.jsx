import React, {useEffect, useState} from 'react'
import {Field, reduxForm} from "redux-form";


export const ConfirmForm = (props) => {
    const [code, setCode] = useState(props.code)
    useEffect(() => {
        console.log('Ваш код для входа: ',code)
        alert('Ваш код для входа: ' + code)
    }, [code])
    return (
      <div>
          <form onSubmit={props.handleSubmit}>
              <div><Field name='confirmCode' component='input' type='text' placeholder='Input code...'/></div>
              <div onClick={() => {
                  let newCode = props.getRandomCode(100000, 1000000)
                  setCode(newCode)
                  props.setConfirmCode(newCode)
              }
              }>Выслать код еще раз?
              </div>
              <button type={'submit'}>Submit</button>
          </form>
      </div>
    )
}

const ReduxConfirmForm = reduxForm({form: 'confirm'})(ConfirmForm)
export default ReduxConfirmForm;