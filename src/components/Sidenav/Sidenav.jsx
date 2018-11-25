import React, { Component } from 'react';
import logo from '../../img/logo-square.png';
import avatar from '../../img/avatar.png';
import icon from '../../img/icon.png';

class Sidenav extends Component {
  render() {
    return (
        <ul className="sidebar navbar-nav">
          <li className="nav-item">
              <a className="nav-link nav-logo" href="index.html">
                <img src={logo} alt="logo" />
                <span>Traction Tools</span>
              </a>
          </li>
          <li className="nav-item">
              <a className="nav-link nav-profile" href="index.html">
              <div className="media">
                <img className="align-self-center avatar" alt="" src={avatar}  />
                <span className="ml-3 media-body">
                  <span className="mt-0 welcome-text">Welcome User</span><br/>
                  <span>Admin</span>
                </span>
              </div>
              </a>
          </li>
          <li className="nav-item active">
              <a className="nav-link" href="/buttonpages">
                <img src={icon} alt=""/>
                <span>Buttons</span>
              </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/alertpage">
            <img src={icon} alt=""/>
              <span>Alerts</span>
            </a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="/inputpages">
                <img src={icon} alt=""/>
                <span>Inputs</span>
              </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={icon} alt=""/>
                <span>Forms</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
              <a className="nav-link" href="/formpages#form-basic">
                <img src={icon} alt=""/>
                <span>Form Basic</span>
              </a>
              <a className="nav-link" href="/formpages#form-todo">
              <img src={icon} />
                <span>Form To-do</span>
              </a>
              <a className="nav-link" href="/formpages#form-milestone">
              <img src={icon} />
                <span>Form Milestone</span>
              </a>
              <a className="nav-link" href="/formpages#form-scorecard">
              <img src={icon} />
                <span>Form Scorecard</span>
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/textareapage">
            <img src={icon} alt=""/>
              <span>Textarea</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/selectpage">
            <img src={icon} alt=""/>
              <span>Select</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={icon} alt=""/>
              <span>Tables</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
              <a className="nav-link" href="/tabletpage#table-basic">
              <img src={icon} alt=""/>
                <span>Table Basic</span>
              </a>
              <a className="nav-link" href="/tablepage#table-archive">
              <img src={icon} alt=""/>
                <span>Table Archive</span>
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/tabpage">
            <img src={icon} alt=""/>
              <span>Tab Menus</span>
            </a>
          </li>
        </ul>
    );
  }
}

export default Sidenav;