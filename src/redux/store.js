import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import barberReducer from './barberReducer';
import waitingReducer from './waitingReducer';
import cuttingReducer from './cuttingReducer';

let rootReducer = combineReducers({
	barbershops : barberReducer,
	waiting : waitingReducer,
	cutting : cuttingReducer,
})

let store = createStore(
	rootReducer,
	applyMiddleware(thunk)
)

export default store;