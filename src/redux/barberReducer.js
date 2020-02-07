let initialState = []

function barberReducer(state = initialState,action){
    if(action.type === 'ADD_BARBER'){
        return [...state, action.payload]
    }
    else if (action.type === 'REMOVE_BARBER'){
		//remove item from state
		let id = action.payload
		return state.filter((barber) => {
	     	return barber.id !== id;
	    })
	}
    else if(action.type === 'SET_BARBERS'){
        return [...action.payload]
    }
    else{
        return state
    }
}

export default barberReducer;