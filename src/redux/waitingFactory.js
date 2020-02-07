import api from '../API';

let waitingFactory = {

    set : (waiting) => {
        let action = {
            type:'SET_WAITING',
            payload: waiting
        }
        return action
    },

    load : () => {
        let thunk = (dispatch) => {
            api.getWaiting()
            .then(res => {
                let waiting = res.data
                dispatch(waitingFactory.set(waiting))
            })
            
        }
        return thunk
    },

    add : (data) => {
        let thunk = (dispatch) => {
            api.addWaiting(data)
            .then(res => {
                dispatch(waitingFactory.load())
            })
        }
        return thunk
    },

    remove : (id) => {
        let thunk = (dispatch) => {
            api.deleteWaiting(id)
            .then(res => {
                dispatch(waitingFactory.load())
            })
        }
        return thunk
    },

}

export default waitingFactory;