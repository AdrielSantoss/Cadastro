import React from 'react'
import {Switch, Redirect, Route} from 'react-router'
import Home from '../components/home/home'
import UserCrud from '../components/User/user'

export default props =>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/users" component={UserCrud}/>
        <Redirect from="*" to="/"/>
    </Switch>