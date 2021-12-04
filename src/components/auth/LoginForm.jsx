import React from 'react'
import {Field, reduxForm} from "redux-form";

export const LoginForm = (props) => {
    return (
      <div >
        <form onSubmit={props.handleSubmit}>
            <div><Field name='login' component='input' type='text' /></div>
            <div><Field name='password' component='input' type='password' /></div>
            <button>Submit</button>
        </form>
      </div>
    )
}

const ReduxLoginForm = reduxForm({form : 'login'})(LoginForm)
export default ReduxLoginForm;