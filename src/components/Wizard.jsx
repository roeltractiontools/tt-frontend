import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Buttons from './Buttons/Buttons';
import Header from './Header/Header';
import Sidenav from './Sidenav/Sidenav';

export default class Wizard extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
      <Sidenav/>
        <div className='wizard-container'>
          <Switch>
            <Route
              path={`/Buttons`}
              component={Buttons}/>
          <Route
              path={`/Header`}
              component={Header}/>
          </Switch>
        </div>

      </div>
    )
  }
}