import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import authReducer from "./reducers/auth_reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer,
  }
)

const store = createStore(rootReducer)

export default store

