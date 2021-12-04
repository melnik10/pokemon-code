import {pokemonAPI} from "../../api/api";

const GET_POKEMON_TYPES = 'sidebar/GET_POKEMON_TYPES'
const GET_POKEMON_SUBTYPES = 'sidebar/GET_POKEMON_SUBTYPES'


const initialState = {
    types: null,
    subtypes: null,
}

const sidebarReducer = (state = initialState, action) => {

    switch(action.type) {
        case GET_POKEMON_TYPES:
            return {
                ...state,
                types: action.payload.types
            }
        case GET_POKEMON_SUBTYPES:
            return {
                ...state,
                subtypes: action.payload.subtypes
            }
        default:
            return state
    }
}



export const getPokemonTypes = (types) => {
    return {
        type: GET_POKEMON_TYPES,
        payload: {
            types
        }
    }
}
export const getPokemonSubtypes = (subtypes) => {
    return {
        type: GET_POKEMON_SUBTYPES,
        payload: {
            subtypes
        }
    }
}

export const getPokemonTypesTC = () => async (dispatch) => {
    const response = await pokemonAPI.getTypes()
    dispatch(getPokemonTypes(response.data))
}

export const getPokemonSubtypesTC = () => async (dispatch) => {
    const response = await pokemonAPI.getSubtypes()
    dispatch(getPokemonSubtypes(response.data))
}

export default sidebarReducer;