import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import authReducer from "./reducers/auth_reducer";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import sidebarReducer from "./reducers/sidebar_reducer";


const rootReducer = combineReducers({
      auth: authReducer,
      sidebar: sidebarReducer,
      form: formReducer,
  }
)

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store

