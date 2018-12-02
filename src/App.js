import React, { Component } from 'react';
import logo from './logo.svg';
import  Sidenav from './components/Nav/Sidenav';
import Topnav from './components/Nav/Topnav';
import { Switch, Route } from 'react-router-dom';
import Buttons from './components/Buttons/Buttons';
import textareapage from './pages/textareapage';
import selectpage from './pages/selectpage';
import buttonpages from './pages/buttonpages';
import inputpages from './pages/inputpages';
import formpages from './pages/formpages';
import tablepage from './pages/tablepage';
import tabpage from './pages/tabpage';
import alertpage from './pages/alertpage';
import colorprotanopiapage from './pages/colorprotanopiapage';
import colordeuteranopes from './pages/colordeuteranopes';
import colortritanopespage from './pages/colortritanopespage';


class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Sidenav/>
        <div className="container-page" id="content-wrapper">
            <Topnav/>
          <div className="page">
            <div className="page-body">
            
              
              {/* <Route path='/dashboard' component={UsersPage} /> */}   
              <Switch>
                <Route exact path="/" component={buttonpages} />
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
