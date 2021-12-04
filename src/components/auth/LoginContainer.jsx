import React from 'react'
import LoginForm from "./LoginForm";

export const LoginContainer = (props) => {
    const loginSubmit = (data) => {
        const {login, password} = data
        if ((login === 'kode@kode.ru') && (password === 'Enk0deng')) {
            props.setAuthUser()
        } else (console.log("STATUS 400"))
    }
    return (
      <div>
          <LoginForm onSubmit={loginSubmit}/>
      </div>
    )
}


export default LoginContainer