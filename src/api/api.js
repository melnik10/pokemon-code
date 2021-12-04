const axios = require("axios");
const instance = axios.create({
    "API-KEY": "94e5f252-cbba-4cb2-aa17-47b6072d6de4",
    baseURL: 'https://api.pokemontcg.io/v2'
})

export const pokemonAPI = {
    getTypes() {
        return instance.get('/types')
          .then(r => r.data)
    },
    getSubtypes() {
        return instance.get('/subtypes')
          .then(r => r.data)
    }
}



