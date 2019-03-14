import React, { Component } from 'react';

import axios from './axios-shop';
import {Route, Switch, BrowserRouter} from "react-router-dom";

import './App.css';

import Register from './Containers/Register/Register'
import Login from "./Containers/Login/Login";
import HomePage from "./Containers/HomePage/HomePage";
import AddProducts from "./Containers/AddProduct/AddProducts";




class App extends Component {


  render() {
    return (
      <BrowserRouter>
          <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/register'  exact component={Register} />
              <Route path='/login'  exact component={Login} />
              <Route path='/addproduct'  exact component={AddProducts} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
