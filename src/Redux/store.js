import { createStore , applyMiddleware , compose, combineReducers } from 'redux'
import reducers from './reducer'
import thunk from "redux-thunk";


const rootReducer = combineReducers({reducers})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)