import React, { Component } from 'react';

class Topnav extends Component {
    render() {
        return (
            <div className="nav-container">
                <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
                <button className="btn btn-link text-white order-1 order-sm-0" id="sidebarToggle" href="#">
                    <i className="fas fa-bars"></i>
                </button>
                <button className="btn btn-link text-white order-1 order-sm-0" id="sidebarToggle" href="#">
                    <i className="fas fa-expand"></i>
                </button>
                <ul className="navbar-nav ml-auto mr-0 mr-md-10 my-2 my-md-0 company-setting">
                    <li className="nav-item dropdown no-arrow mx-1">
                    <div className="dropdown">
                        <a className="dropdown-toggle" href="http://localhost:3000" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Company
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="http://localhost:3000">Action</a>
                        <a className="dropdown-item" href="http://localhost:3000">Another action</a>
                        <a className="dropdown-item" href="http://localhost:3000">Something else here</a>
                        </div>
                    </div>
                    </li>
                </ul>
                </nav>
            </div>
        );
    }
}

export default Topnav;