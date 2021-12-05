import {pokemonAPI} from "../../api/api";

const GET_POKEMON_TYPES = 'pokemon/GET_POKEMON_TYPES'
const GET_POKEMON_SUBTYPES = 'pokemon/GET_POKEMON_SUBTYPES'
const GET_POKEMON_CARDS = 'pokemon/GET_POKEMON_CARDS'



const initialState = {
    counter: 0,
}

const pokemonReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case GET_POKEMON_TYPES:
            return {
                ...state,
                types: action.payload.types,
                counter: ++state.counter,
            }
        case GET_POKEMON_SUBTYPES:
            return {
                ...state,
                subtypes: action.payload.subtypes,
                counter: ++state.counter,

            }
        case GET_POKEMON_CARDS:
            return {
                ...state,
                cards: action.payload.cards,
                counter: ++state.counter,
            }
        default:
            return state
    }
}

export const getPokemonCards = (cards) => {
    return {
        type: GET_POKEMON_CARDS,
        payload: {
            cards
        }
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

export const getPokemonCardsTC = () => async (dispatch) => {
    const response = await pokemonAPI.getCards()
    dispatch(getPokemonCards(response.data))
}

export default pokemonReducer;