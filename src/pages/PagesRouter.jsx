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
import colordeuteranopes from './colordeuteranopes'
import colortritanopespage from './colortritanopespage'

export default class PagesRouter extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
          <Switch>
            <Route
              path={`/buttons`}
              component={buttonpages}/>
            <Route
              path={`/inputs`}
              component={inputpages}/>
              <Route
              path={`/forms`}
              component={formpages}/>
              <Route
              path={`/textarea`}
              component={textareapage}/>
              <Route
              path={`/select`}
              component={selectpage}/>
              <Route
              path={`/table`}
              component={tablepage}/>
              <Route
              path={`/tabs`}
              component={tabpage}/>
              <Route
              path={`/alert`}
              component={alertpage}/>
              <Route
              path={`/protanopia`}
              component={colorprotanopiapage}/>
              <Route
              path={`/deuteranopes`}
              component={colordeuteranopes}/>
              <Route
              path={`/tritanopes`}
              component={colortritanopespage}/>
          </Switch>
      </div>
    )
  }
}