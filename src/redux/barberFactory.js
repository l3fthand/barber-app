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

    add : (data) => {
        let thunk = (dispatch) => {
            api.addShop(data)
            .then(res => {
                dispatch(barberFactory.load())
            })
        }
        return thunk
    },

    remove : (id) => {
        let thunk = (dispatch) => {
            api.deleteShop(id)
            .then(res => {
                dispatch(barberFactory.load())
            })
        }
        return thunk
    },

}

export default barberFactory;