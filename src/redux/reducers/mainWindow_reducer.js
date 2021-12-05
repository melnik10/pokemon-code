import {getPokemonSubtypesTC, getPokemonTypesTC} from "./pokemon_reducer";
import {getPokemonCardsTC} from "./pokemon_reducer";

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

export const setInitializedSuccess = () => async (dispatch) => {
    const types = await dispatch(getPokemonTypesTC())
    const subtypes = await dispatch(getPokemonSubtypesTC())
    const cards = await dispatch(getPokemonCardsTC())

    Promise.all([types, subtypes, cards])
      .then(() => {
          debugger;
          dispatch(setInitializedSuccessAC())
      })
}


export default mainWindowReducer;