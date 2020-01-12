import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import barberReducer from './barberReducer';
import barberFactory from './barberFactory';

let rootReducer = combineReducers({
	barbershops : barberReducer,
})

let store = createStore(
	rootReducer,
	applyMiddleware(thunk)
)

let barbershops = [
	{
		id: 1,
		name: 'Malonleys'
	},
	{
		id: 2,
		name: 'Big Boss'
	}
]

store.dispatch(barberFactory.set(barbershops))

console.log(store.getState())

export default store;