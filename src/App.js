import React, { Component } from 'react';

import axios from './axios-shop';
import {Route, Switch, BrowserRouter} from "react-router-dom";

import './App.css';

import Register from './Containers/Register/Register'
import Login from "./Containers/Login/Login";
import HomePage from "./Containers/HomePage/HomePage";



class App extends Component {


  render() {
    return (
      <BrowserRouter>
          <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/register'  exact component={Register} />
              <Route path='/login'  exact component={Login} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
