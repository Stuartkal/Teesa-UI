import React,{useState,useEffect} from 'react'
import Button from '../../UI/Button'
import {connect} from 'react-redux'
import * as actions from '../../Store/ActionCreators'

import './auth.scss'
const Register = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [nin, setNin] = useState('')
    const [municipality, setMunicipality] = useState('')
    const [userType, setUserType] = useState('')

    // console.log(name,nin,municipality,userType)

    useEffect(() => {
        // props.register()
    },[])

    const submitHandler = (e) =>{
        e.preventDefault()
        props.register(email,password,name,nin,municipality,userType)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
            <div className="auth-container">
                <h1>Sign Up</h1>
                <input type="text" placeholder="Email" value={email}  onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password}  onChange={(e)=> setPassword(e.target.value)}/>
                <input value={name} type="text" placeholder="Full Name" onChange={(e)=>setName(e.target.value)}/>
                <input value={nin} type="text" placeholder="NIN" onChange={(e)=>setNin(e.target.value)}/>
                <input value={municipality} type="text" placeholder="Municipality" onChange={(e)=>setMunicipality(e.target.value)}/>
                <select value={userType} onChange={(e)=>setUserType(e.target.value)}>
                    <option defaultValue>select user type</option>
                    <option>Member of parliament </option>
                    <option>Member of constituency </option>
                </select>
                <Button>Sign Up</Button>
            </div>
            </form>
        </div>
    )
}

const mapDispatchTopProps = (dispatch) => {
    return {
        register: (email,password,name,nin,municipality,userType) => dispatch(actions.register(email,password,name,nin,municipality,userType))
    }
}

export default connect(null, mapDispatchTopProps)(Register)
