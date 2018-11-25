import React, { Component } from 'react';
import logo from './logo.svg';
import  Sidenav from './components/Sidenav/Sidenav'
import Topnav from './components/Nav/Topnav';
import Pages from '../src/pages/Pages';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Sidenav/>
        <div className="container-page" id="content-wrapper">
            <Topnav/>
          <div className="page">
            <div className="page-body">
            <BrowserRouter>
            <Switch>
              <Route path='/' component={Pages} /> {''}
              {/* <Route path='/dashboard' component={UsersPage} /> */}  
            </Switch>
            </BrowserRouter>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
