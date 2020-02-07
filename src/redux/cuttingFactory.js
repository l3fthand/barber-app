import api from '../API';

let cuttingFactory = {

    set : (cutting) => {
        let action = {
            type:'SET_CUTTING',
            payload: cutting
        }
        return action
    },

    load : () => {
        let thunk = (dispatch) => {
            api.getCutting()
            .then(res => {
                let cutting = res.data
                dispatch(cuttingFactory.set(cutting))
            })
            
        }
        return thunk
    },

    add : (data) => {
        let thunk = (dispatch) => {
            api.addCutting(data)
            .then(res => {
                dispatch(cuttingFactory.load())
            })
        }
        return thunk
    },

    remove : (id) => {
        let thunk = (dispatch) => {
            api.deleteCutting(id)
            .then(res => {
                dispatch(cuttingFactory.load())
            })
        }
        return thunk
    },

}

export default cuttingFactory;