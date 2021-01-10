import axios from 'axios'
import * as actionTypes from '../Actions/Actions'

export const postAction = () => {
    return {
        type: actionTypes.POST_ACTION
    }
}

export const postSuccess = () => {
    return {
        type: actionTypes.POST_ACTION_SUCCESS
    }
}

export const postFail = () => {
    return {
        type: actionTypes.POST_ACTION_FAIL
    }
}

export const post = (title,description,imageUrl) => {
    return (dispatch,getState) => {
        dispatch(postAction())

        const token = getState().auth.token
        const post = {
            title,
            description,
            imageUrl,
        }
        
        axios.post('http://localhost:8080/posts/post',post,{
            headers: {
                ContentType: 'Application/json',
                Authorization: token
            }
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
}