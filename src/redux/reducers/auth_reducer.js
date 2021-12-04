const SET_AUTH_USER = 'auth/SET_AUTH_USER'
const SET_CONFIRM_USER = 'auth/SET_CONFIRM_USER'
const SET_CONFIRM_CODE = 'auth/SET_CONFIRM_CODE'

const initialState = {
    isAuth: false,
    isConfirm: localStorage.isConfirm,
    confirmCode: localStorage,
}

const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                isAuth: true,
                confirmCode: action.payload.confirmCode
            }
        case SET_CONFIRM_USER:
            return {
                ...state,
                isConfirm: true,
            }
        case SET_CONFIRM_CODE:
            return {
                ...state,
                confirmCode: action.payload.confirmCode
            }
        default:
            return state
    }
}

export const setAuthUser = (confirmCode) => {
    return {
        type: SET_AUTH_USER,
        payload: {
            confirmCode
        }
    }
}
export const setConfirmUser = () => {
    return {
        type: SET_CONFIRM_USER,
    }
}
export const setConfirmCode = (confirmCode) => {
    return {
        type: SET_CONFIRM_CODE,
        payload: {
            confirmCode
        }
    }
}

export default authReducer;