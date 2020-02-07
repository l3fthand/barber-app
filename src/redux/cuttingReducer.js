let initialState = []

function cuttingReducer(state = initialState,action){
    if(action.type === 'ADD_CUTTING'){
        return [...state, action.payload]
    }
    else if (action.type === 'REMOVE_CUTTING'){
		//remove item from state
		let id = action.payload
		return state.filter((customer) => {
	     	return customer.id !== id;
	    })
	}
    else if(action.type === 'SET_CUTTING'){
        return [...action.payload]
    }
    else{
        return state
    }
}

export default cuttingReducer;