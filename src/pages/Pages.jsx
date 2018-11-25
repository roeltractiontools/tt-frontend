import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Buttons from '../components/Buttons/Buttons';
import textareapage from './textareapage'
import selectpage from './selectpage'
import buttonpages from './buttonpages';
import inputpages from './inputpages';
import formpages from './formpages'
import tablepage from './tablepage'
import tabpage from './tabpage'
import alertpage from './alertpage'
import colorprotanopiapage from './colorprotanopiapage'

export default class Pages extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
          <Switch>
            <Route
              path={`/buttonpages`}
              component={buttonpages}/>
            <Route
              path={`/inputpages`}
              component={inputpages}/>
              <Route
              path={`/formpages`}
              component={formpages}/>
              <Route
              path={`/textareapage`}
              component={textareapage}/>
              <Route
              path={`/selectpage`}
              component={selectpage}/>
              <Route
              path={`/tablepage`}
              component={tablepage}/>
              <Route
              path={`/tabpage`}
              component={tabpage}/>
              <Route
              path={`/alertpage`}
              component={alertpage}/>
              <Route
              path={`/colorprotanopiapage`}
              component={colorprotanopiapage}/>
          </Switch>
      </div>
    )
  }
}