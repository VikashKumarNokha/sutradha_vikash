import { applyMiddleware, legacy_createStore, combineReducers, compose } from "redux";
 import { reducer }  from "./reducer"
import thunk from "redux-thunk";
const rootstore = { reducer}; 

const composeEnhancer = window.
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = legacy_createStore(combineReducers(rootstore), composeEnhancer( applyMiddleware(thunk)));

export { store };