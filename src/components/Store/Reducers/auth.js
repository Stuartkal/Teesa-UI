import * as actionTypes from '../Actions/Actions'
import {updateObject} from './utility'

const initialState = {
    fname: '',
    lname: '',
    email: '',
    municipality: '',
    userType: '',
    token: '',
    userId: '',
    authenticated: false,
    loading: false,
    error: false
}

const auth = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_ACTION:
            return updateObject(state, {
                loading:true,
                authenticated: false,
            })
            case actionTypes.AUTH_ACTION_SUCCESS:
                return updateObject(state, {
                    email: action.email,
                    fname: action.fname,
                    lname: action.lname,
                    municipality: action.municipality,
                    userType: action.userType,
                    token: action.token,
                    userId: action.userId,
                    authenticated: true,
                    loading:false
                })
                case actionTypes.AUTH_ACTION_FAIL:
                    return updateObject(state, {
                        authenticated: false,
                        loading:false,
                        error:true
                    })

            default: return state
    }
}

export default auth