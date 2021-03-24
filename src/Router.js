import React from 'react'
import Login from './Component/Login'
import Signup from './Component/Signup'
import Home from './Component/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/Login">
                    <Login/>
                </Route>
                <Route exact path="/Signup">
                    <Signup/>
                </Route>
            </Switch>
        </Router>
    )
}

