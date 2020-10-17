import firebase from '../Firebase'
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

export const register = (email,password,name,nin,municipality,userType) => {
    return dispatch => {
        dispatch(registerAction())
        const user = {
            email,
            name,
            nin,
            municipality,
            userType,
            date: new Date()
        }
        const db = firebase.firestore().collection('teesa-register')

        try {
         firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((response)=>{
            console.log('email',response.user)
            db
        .doc()
        .set(user)
        .then((response)=>{
            console.log('register',response)
        })
        })

        }

        catch(error) {
            console.log(error.message)
        }
        

        
    }
}