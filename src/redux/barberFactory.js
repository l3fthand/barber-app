import api from '../API';

let barberFactory = {

    set : (barbershops) => {
        let action = {
            type:'SET_BARBERS',
            payload:barbershops
        }
        return action
    },

    load : () => {
        let thunk = (dispatch) => {
            api.getShops()
            .then(res => {
                let barbershops = res.data
                dispatch(barberFactory.set(barbershops))
            })
            
        }
        return thunk
    },

    loadID : (id, data) => {
        let thunk = (dispatch) => {
            api.getShop(id)
            .then(res => {
                dispatch(barberFactory.load(id))
            })
        }
        return thunk
    },

    add : (data) => {
        let thunk = (dispatch) => {
            api.addShop(data)
            .then(res => {
                dispatch(barberFactory.load())
            })
        }
        return thunk
    },
    // remove : (id) => {
    //     let thunk = (dispatch) => {
    //         api.deleteTodos(id)
    //         .then(res => {
    //             dispatch(todosFactory.load())
    //         })
    //     }
    //     return thunk
    // },

}

export default barberFactory;