import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import barberReducer from './barberReducer';
// import barberFactory from './barberFactory';

const rootReducer = combineReducers({
	barbershops : barberReducer,
	//the reducer error is here as the admin factory is not yet defined
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store;