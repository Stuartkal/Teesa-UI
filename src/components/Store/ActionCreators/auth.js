import axios from 'axios'
import * as actionTypes from '../Actions/Actions'

export const authAction = () => {
    return {
        type: actionTypes.AUTH_ACTION
    }
}

export const authActionSuccess = (email,fname,lname,municipality,userType,token,userId) => {
    return {
        type: actionTypes.AUTH_ACTION_SUCCESS,
        email,
        fname,
        lname,
        municipality,
        userType,
        token,
        userId
    }
}

export const authActionFail = () => {
    return {
        type: actionTypes.AUTH_ACTION_FAIL
    }
}

    

export const authenticate =  (email, password) => {
    return  (dispatch) => {
        dispatch(authAction())
        const user = {
            email,
            password
        }

        axios.post('http://localhost:8080/auth/signin',user)
        .then(res => {
            dispatch(authActionSuccess(res.data.email,res.data.fname,res.data.lname,res.data.municipality,res.data.userType,res.data.token,res.data.userId))
        })
        .catch(error => {
            console.log(error)
        })
    }
}