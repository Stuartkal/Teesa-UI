import axios from 'axios'
import * as actionTypes from '../Actions/Actions'

export const getPostAction = () => {
    return {
        type: actionTypes.GET_POST_ACTION
    }
}

export const getPostSuccess = (post) => {
    return {
        type: actionTypes.GET_POST_SUCCESS,
        post
    }
}

export const getPostFail = () => {
    return {
        type: actionTypes.GET_POST_FAIL
    }
}

export const get = () => {
    return (dispatch,getState) => {
        dispatch(getPostAction())

        const token = getState().auth.token

        axios.get('http://localhost:8080/posts/posts',{
            headers:{
                ContentType: 'Application/json',
                Authorization: token
            }
        })
        .then(res => {
            dispatch(getPostSuccess(res.data.post))
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
}