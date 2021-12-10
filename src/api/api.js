const axios = require("axios");
const instance = axios.create({
    "API-KEY": "94e5f252-cbba-4cb2-aa17-47b6072d6de4",
    baseURL: 'https://api.pokemontcg.io/v2'
})

export const pokemonAPI = {
    getTypes() {
        return instance.get('/types')
    },
    getSubtypes() {
        return instance.get('/subtypes')
    },
    getCards(type, subtype, currentPage, pageSize) {
        debugger;
        let queryGetCards = `/cards?q=types:"${type}" subtypes:"${subtype}"&page=${currentPage}&pageSize=${pageSize}`
        return instance.get(queryGetCards)  ///cards?pageSize=4&page=1
    },
    getCard(idCard) {
        return instance.get(`/cards/${idCard}`)  ///cards?pageSize=4&page=1
    }
}



