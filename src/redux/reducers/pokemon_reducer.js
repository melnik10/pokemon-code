import {pokemonAPI} from "../../api/api";

const GET_POKEMON_TYPES = 'pokemon/GET_POKEMON_TYPES'
const GET_POKEMON_SUBTYPES = 'pokemon/GET_POKEMON_SUBTYPES'
const SET_CURRENT_POKEMON_TYPE_SUBTYPE = 'pokemon/SET_CURRENT_POKEMON_TYPE_SUBTYPE'
const GET_POKEMON_CARDS = 'pokemon/GET_POKEMON_CARDS'
const CLEAR_POKEMON_CARDS = 'pokemon/CLEAR_POKEMON_CARDS'
const GET_POKEMON_SELECTED_CARD = 'pokemon/GET_POKEMON_SELECTED_CARD'

const initialState = {
}

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMON_TYPES:
            return {
                ...state,
                types: action.payload.types,
            }
        case GET_POKEMON_SUBTYPES:
            return {
                ...state,
                subtypes: action.payload.subtypes,

            }
        case GET_POKEMON_CARDS:
            return {
                ...state,
                cards: action.payload.cards,
            }
        case GET_POKEMON_SELECTED_CARD:
            return {
                ...state,
                selectedCard: {attacks: [{damage: 'Not damage'}], ...action.payload.selectedCard}

            }
        case CLEAR_POKEMON_CARDS:
            return {
                ...state,
                cards: null,
            }
        case SET_CURRENT_POKEMON_TYPE_SUBTYPE:
            return {
                ...state,
                type: action.payload.type,
                subtype: action.payload.subtype
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


export const getPokemonSelectedCard = (card) => {
    
    return {
        type: GET_POKEMON_SELECTED_CARD,
        payload: {
            selectedCard: card
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

export const setCurrentPokemonTypeSubtype = (type, subtype) => {
    return {
        type: SET_CURRENT_POKEMON_TYPE_SUBTYPE,
        payload: {
            type,
            subtype
        }
    }
}

export const clearPokemonCards = () => {
    return {
        type: CLEAR_POKEMON_CARDS,
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
    if(response.status === 200) {
        dispatch(getPokemonTypes(response.data.data))
        return response.data.data
    }
}

export const getPokemonSubtypesTC = () => async (dispatch) => {
    const response = await pokemonAPI.getSubtypes()
    if(response.status === 200) {
        dispatch(getPokemonSubtypes(response.data.data))
        return response.data.data
    }
}

export const getPokemonCardsTC = (type,subtype , currentPage = 1, pageSize = 250 ) => async (dispatch) => {
    const response = await pokemonAPI.getCards(type, subtype, currentPage, pageSize)
    dispatch(setCurrentPokemonTypeSubtype(type,subtype))
    if(response.status === 200) {
        dispatch(getPokemonCards(response.data.data))
    }
}

export default pokemonReducer;