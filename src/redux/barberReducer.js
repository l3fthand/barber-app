let initialState = []

function barberReducer(state = initialState,action){

    if(action.type == 'ADD_BARBER'){
        return [...state, action.payload]
    }
    else if(action.type == 'SET_BARBERS'){
        return [...action.payload]
    }
    else{
        return state
    }
}

console.log(initialState)

export default barberReducer;