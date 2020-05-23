import React from 'react';
import './App.css';


import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
    Redirect
} from 'react-router-dom'

import Home from './pages/Home.js'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Login from './pages/Login'
import NavBar from './components/NavBar'

import AuthRoute from './components/AuthRoute';

import { Provider } from 'react-redux';
import configStore from './store'


function App() {
    return (
        <Provider store={configStore()}>
            <div className="App">

                <Router>
                    <NavBar></NavBar>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/login" exact component={() => <AuthRoute component={Login}></AuthRoute>}></Route>
                        <Route path="/signup" exact component={Signup}></Route>
                        <Route path="/profile" exact component={Profile}></Route>
                        <Route component={() => <Redirect to="/"></Redirect>}></Route>
                    </Switch>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
