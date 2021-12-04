const SET_AUTH_USER = 'auth/SET_AUTH_USER'

const initialState = {
    isAuth: false,
    isConfirmed: false,
}

const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                isAuth: true,
            }
        default:
            return state
    }
}

export const setAuthUserAC = () => {
    return {
        type: SET_AUTH_USER,
    }
}

export const setAuthUser = (dispatch) => {
    debugger;
    dispatch(setAuthUserAC())
}

export default authReducer;