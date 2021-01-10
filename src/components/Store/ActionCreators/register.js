import axios from 'axios'
import * as actionTypes from '../Actions/Actions'

export const registerAction = () => {
    return {
        type: actionTypes.REGISTER_ACTION
    }
}

export const registerSuccess = () => {
    return {
        type: actionTypes.REGISTER_ACTION_SUCCESS
    }
}

export const registerFail = () => {
    return {
        type: actionTypes.REGISTER_ACTION_FAIL
    }
}

export const register = (email,password,fname,lname,nin,municipality,userType) => {
    return dispatch => {
        dispatch(registerAction())
        const user = {
            email,
            password,
            fname,
            lname,
            nin,
            municipality,
            userType,
        }
        
        axios.put('http://localhost:8080/auth/signup',user)
        .then(res => {
            dispatch(registerSuccess())
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
        
    }
}