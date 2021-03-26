import React,{useContext} from 'react'
import Login from './Component/Login'
import Signup from './Component/Signup'
import Home from './Component/Home'
import Error from './Component/Error'
import Customer from './Component/Customer'
import { UserContext } from './Provider/UserProvider'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Driver from './Component/Driver'

export default function AppRouter() {
    const user = useContext(UserContext);
    return (
        user ?
        <Router>
            <Switch>
                <Route exact path="/">
                  <Customer/>
                </Route>
                <Route path="/Driver">
                  <Driver/>
                </Route>
            </Switch>
        </Router>
        :
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/Login">
                    <Login/>
                </Route>
                <Route path="/Signup">
                    <Signup/>
                </Route>
                <Route path="*">
                    <Error/>
                </Route>
            </Switch>
        </Router>
    )
}

