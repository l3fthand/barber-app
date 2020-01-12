let initialState = []

function barberReducer(state = initialState,action){
    // switch(action.type){
    //     case ADD_BARBER:
    //         return [...state, action.payload]
    //     case SET_BARBERS:
    //         return [...action.payload]
    //     default:
    //     return state


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