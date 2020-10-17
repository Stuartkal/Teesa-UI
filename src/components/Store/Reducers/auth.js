import * as actionTypes from '../Actions/Actions'
import {updateObject} from './utility'

const initialState = {
    loading: false
}

const auth = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_ACTION:
            return updateObject(state, {
                loading:true
            })

            default: return state
    }
}

export default auth