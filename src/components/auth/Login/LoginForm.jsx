import React from 'react'
import {Field, reduxForm} from "redux-form";
import style from './LoginForm.module.css'
import InputField from "../../Fields/InputField";

export const LoginForm = (props) => {
    return (
      <div>
          <form onSubmit={props.handleSubmit}>
              <div className={style.loginTitle}>POKEMON FOR CODE</div>
              <div><Field className={style.loginInput} name='login' component={InputField} type='text'/></div>
              <div><Field className={style.loginInput} name='password' component={InputField} type='password'/></div>
              <button className={style.loginButton} type={'submit'}>Login</button>
          </form>
      </div>
    )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)
export default ReduxLoginForm;