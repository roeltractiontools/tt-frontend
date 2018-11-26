import React, { Component } from 'react';
import logo from '../../img/logo-square.png';
import avatar from '../../img/avatar.png';
import icon from '../../img/icon.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Sidenav extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
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
              <a className="nav-link" href="/buttons">
                <img src={icon} alt=""/>
                <span>Buttons</span>
              </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/alert">
            <img src={icon} alt=""/>
              <span>Alerts</span>
            </a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="/inputs">
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
              <a className="nav-link" href="/forms#form-basic">
                <img src={icon} alt=""/>
                <span>Form Basic</span>
              </a>
              <a className="nav-link" href="/forms#form-todo">
              <img src={icon} />
                <span>Form To-do</span>
              </a>
              <a className="nav-link" href="/forms#form-milestone">
              <img src={icon} />
                <span>Form Milestone</span>
              </a>
              <a className="nav-link" href="/forms#form-scorecard">
              <img src={icon} />
                <span>Form Scorecard</span>
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/textarea">
            <img src={icon} alt=""/>
              <span>Textarea</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/select">
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
              <a className="nav-link" href="/table#table-basic">
              <img src={icon} alt=""/>
                <span>Table Basic</span>
              </a>
              <a className="nav-link" href="/table#table-archive">
              <img src={icon} alt=""/>
                <span>Table Archive</span>
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/tabs">
            <img src={icon} alt=""/>
              <span>Tab Menus</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={icon} alt=""/>
                <span>Color Blind</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
              <a className="nav-link" href="/protanopia">
                <img src={icon} alt=""/>
                <span>Protanopia</span>
              </a>
              <a className="nav-link" href="/deuteranopes">
              <img src={icon} />
                <span>Deuteranopes</span>
              </a>
              <a className="nav-link" href="/tritanopes">
              <img src={icon} />
                <span>Tritanopes</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidenav;