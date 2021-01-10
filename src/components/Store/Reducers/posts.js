import * as actionTypes from '../Actions/Actions'
import {updateObject} from './utility'

const initialState = {
    posts:[],
    loading: false,
    error: false
}

const auth = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_POST_ACTION:
            return updateObject(state, {
                loading:true,
                authenticated: false,
            })
            case actionTypes.GET_POST_SUCCESS:
                return updateObject(state, {
                    posts: action.post,
                    loading:false
                })
                case actionTypes.GET_POST_FAIL:
                    return updateObject(state, {
                        loading:false,
                        error:true
                    })

            default: return state
    }
}

export default auth