import React,{useState,useEffect} from 'react'
import Button from '../../UI/Button'
import {connect} from 'react-redux'
import * as actions from '../../Store/ActionCreators'


import './auth.scss'
const Auth = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
      
    })

    const submitHandler = (e) => {
        e.preventDefault()
        props.auth(email,password)
        props.history.push('/home')
    }

    return (
        <div className="container-main">
            <div className="recaptcha-container" id="recaptcha"></div>
            <form onSubmit={submitHandler}>
            <div className="auth-container">
                {/* <h1>Login</h1> */}
                <input type="text" placeholder="Email" value={email}  onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password}  onChange={(e)=> setPassword(e.target.value)}/>
                <Button>Sign In</Button>
                <h4 onClick={()=> props.history.push('/register')}>Sign Up</h4>
            </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        auth: (email,password) => dispatch(actions.authenticate(email,password))
    }
}

export default connect(null,mapDispatchToProps)(Auth)
