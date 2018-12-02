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
import { Link } from 'react-router-dom';

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
                  <span className="mt-0 welcome-text">Welcome Roel</span><br/>
                  <span>Admin</span>
                </span>
              </div>
              </a>
          </li>
          <li className="nav-item active">
              <Link to="/buttons" className="nav-link " activeClassName="active">
                <img src={icon} alt=""/>
                <span>Buttons</span>
              </Link>
          </li>
          <li className="nav-item">
            <Link to="/alert" className="nav-link"  activeClassName="active">
            <img src={icon} alt=""/>
              <span>Alerts</span>
            </Link>
          </li>
          <li className="nav-item">
              <Link to="/inputs" className="nav-link"  activeClassName="active">
                <img src={icon} alt=""/>
                <span>Inputs</span>
              </Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={icon} alt=""/>
                <span>Forms</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
              <Link to="/forms" className="nav-link">
                <img src={icon} alt=""/>
                <span>Form Basic</span>
              </Link>
              <Link to="/forms" className="nav-link">
              <img src={icon} />
                <span>Form To-do</span>
              </Link>
              <Link to="/forms" className="nav-link">
              <img src={icon} />
                <span>Form Milestone</span>
              </Link>
              <Link to="/forms" className="nav-link">
              <img src={icon} />
                <span>Form Scorecard</span>
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/textarea" className="nav-link" activeClassName="active">
            <img src={icon} alt=""/>
              <span>Textarea</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/select" className="nav-link" activeClassName="active">
            <img src={icon} alt=""/>
              <span>Select</span>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={icon} alt=""/>
              <span>Tables</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
              <Link to="/table#table-basic" className="nav-link">
                <img src={icon} alt=""/>
              </Link>
              <Link to="/table#table-archive" className="nav-link">
              <img src={icon} alt=""/>
                <span>Table Archive</span>
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/tabs" className="nav-link">
            <img src={icon} alt=""/>
              <span>Tab Menus</span>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={icon} alt=""/>
                <span>Color Blind</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
              <Link to="/protanopia" className="nav-link">
                <img src={icon} alt=""/>
                <span>Protanopia</span>
              </Link>
              <Link to="/deuteranopes" className="nav-link">
                <img src={icon} />
                <span>Deuteranopes</span>
              </Link>
              <Link to="/tritanopes" className="nav-link">
                <img src={icon} />
                <span>Tritanopes</span>
              </Link>
            </div>
          </li>
        </ul>
    );
  }
}

export default Sidenav;