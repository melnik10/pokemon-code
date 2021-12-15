import {getPokemonSubtypesTC, getPokemonTypesTC} from "./pokemon_reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS'

let initialState = {
    initialized: false,
}


const mainWindowReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state;
    }
}

const setInitializedSuccessAC = () => {
    return {
        type: INITIALIZED_SUCCESS,
    }
}

export const setInitializedSuccess = () => (dispatch) => {
    const types = dispatch(getPokemonTypesTC())
    const subtypes = dispatch(getPokemonSubtypesTC())

    Promise.all([types, subtypes])
      .then(() => {
          dispatch(setInitializedSuccessAC())
      }, resolve => {
          alert(resolve)
          delete localStorage.isConfirm
      })
}


export default mainWindowReducer;