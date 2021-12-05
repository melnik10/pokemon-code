import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import authReducer from "./reducers/auth_reducer";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import pokemonReducer from "./reducers/pokemon_reducer";
import mainWindowReducer from "./reducers/mainWindow_reducer";


const rootReducer = combineReducers({
      auth: authReducer,
      pokemon: pokemonReducer,
      mainWindow: mainWindowReducer,
      form: formReducer,
  }
)

const store = createStore(rootReducer, applyMiddleware(thunk))

window.store = store

export default store

