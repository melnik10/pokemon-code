import {pokemonAPI} from "../../api/api";

const GET_POKEMON_TYPES = 'pokemon/GET_POKEMON_TYPES'
const GET_POKEMON_SUBTYPES = 'pokemon/GET_POKEMON_SUBTYPES'
const GET_POKEMON_CARDS = 'pokemon/GET_POKEMON_CARDS'
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
                selectedCard: action.payload.selectedCard
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
    debugger;
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
export const getPokemonSubtypes = (subtypes) => {
    return {
        type: GET_POKEMON_SUBTYPES,
        payload: {
            subtypes
        }
    }
}


export const getPokemonTypesTC = () => async (dispatch) => {
    debugger;
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

export const getPokemonCardsTC = (queryCard) => async (dispatch) => {
    const response = await pokemonAPI.getCards(queryCard)
    if(response.status === 200) {
        dispatch(getPokemonCards(response.data.data))
    }
}

// export const getPokemonSelectedCardTC = (idCard) => async (dispatch) => {
//     const response = await pokemonAPI.getCard(idCard)
//     if(response.status === 200) {
//         dispatch(getPokemonSelectedCard(response.data.data))
//     }
// }

export default pokemonReducer;