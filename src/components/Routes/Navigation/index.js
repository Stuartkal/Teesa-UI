import React from 'react'
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Auth from '../../Layouts/Auth/Auth'
import Register from '../../Layouts/Auth/Register'
import Welcome from '../../Layouts/Auth/Welcome'
import Home from '../../Layouts/Home/Home'


const index = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Auth}/>
                <Route  path="/register" component={Register}/>
                <Route  path="/welcome" component={Welcome}/>
                <Route  path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default index
