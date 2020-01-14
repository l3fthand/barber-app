import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import barberReducer from './barberReducer';

let rootReducer = combineReducers({
	barbershops : barberReducer,
})

let store = createStore(
	rootReducer,
	applyMiddleware(thunk)
)

export default store;