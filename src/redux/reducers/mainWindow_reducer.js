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

// export const setInitializedSuccess = () => async (dispatch) => {
//     const types = await dispatch(getPokemonTypesTC())
//     const subtypes = await dispatch(getPokemonSubtypesTC())
//     let queryCards = `types:${types[0]} subtypes:${subtypes[0]}`
//     const cards = dispatch(getPokemonCardsTC(queryCards))
//     Promise.all([types, subtypes, cards])
//       .then(() => {
//           dispatch(setInitializedSuccessAC())
//       })
// }


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