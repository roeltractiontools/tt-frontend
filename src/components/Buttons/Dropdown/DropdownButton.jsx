import React, { Component } from 'react';

class DropdownButton extends Component {
    render() {
        return (
            <div>
                <div class="btn-group">
                  <button className={this.props.styleClassName} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.buttonName}
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>                
            </div>
        );
    }
}

export default DropdownButton;