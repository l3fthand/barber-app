let initialState = []

function waitingReducer(state = initialState,action){
    if(action.type === 'ADD_WAITING'){
        return [...state, action.payload]
    }
    else if (action.type === 'REMOVE_WAITING'){
		//remove item from state
		let id = action.payload
		return state.filter((customer) => {
	     	return customer.id !== id;
	    })
	}
    else if(action.type === 'SET_WAITING'){
        return [...action.payload]
    }
    else{
        return state
    }
}

export default waitingReducer;