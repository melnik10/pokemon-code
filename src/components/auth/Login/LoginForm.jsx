import React from 'react'
import {Field, reduxForm} from "redux-form";
import style from './LoginForm.module.css'
import InputField from "../../common/Fields/InputField";

const LoginForm = (props) => {
    return (
      <div>
          <form onSubmit={props.handleSubmit}>
              <div className={style.title}>POKEMON FOR CODE</div>
              <div><Field className={style.input} name='login' component={InputField} type='text' placeholder={'Login'}/></div>
              <div><Field className={style.input} name='password' component={InputField} type='password' placeholder={'Password'}/></div>
              <button className={style.button} type={'submit'}>Login</button>
              <div className={style.errorContainer}><div className={style.error}>{props.error}</div></div>
          </form>

      </div>
    )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)
export default ReduxLoginForm