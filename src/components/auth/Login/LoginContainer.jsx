import React from 'react'
import LoginForm from "./LoginForm";
import ConfirmForm from "../Confirm/ConfirmForm";
import {connect, useDispatch} from "react-redux";
import {
    generateConfirmCode,
    logout,
    setAuthUser,
    setConfirmCode,
    setConfirmUser
} from "../../../redux/reducers/auth_reducer";
import {stopSubmit} from "redux-form";

export const LoginContainer = (props) => {
    const getRandomCode = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const dispatch = useDispatch()
    const loginSubmit = (data) => {
        const {login, password} = data
        if ((login === 'kode@kode.ru') && (password === 'Enk0deng')) {
            const confirmCode = getRandomCode(100000, 1000000);
            props.setAuthUser(confirmCode)
        } else {
            dispatch(stopSubmit('login', {_error: 'Incorrect password or email...'}))
        }
    }

    const confirmSubmit = (data) => {
        
        if (data.confirmCode == props.confirmCode) {
            props.setConfirmUser()
            localStorage.isConfirm = true;
        } else {
            dispatch(stopSubmit('confirm',{_error: 'Incorrect code...'}))
        }
    }
    return (
      <div>
          {props.isAuth ? <ConfirmForm
              setConfirmCode={props.setConfirmCode}
              code={props.confirmCode}
              onSubmit={confirmSubmit}
              getRandomCode={getRandomCode}/> :
            <LoginForm onSubmit={loginSubmit}/>}
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isConfirm: state.auth.isConfirm,
        confirmCode: state.auth.confirmCode,
    }
}

export default connect(mapStateToProps, {logout, setConfirmCode, setConfirmUser, setAuthUser})(LoginContainer)