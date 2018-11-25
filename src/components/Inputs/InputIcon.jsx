import React, { Component } from 'react';

class InputIcon extends Component {
    render() {
        return (
            <div>
              <div class="input-group mb-3 input-icon">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon2"><i className={this.props.iconName}></i></span>
                </div>
              </div>                
            </div>
        );
    }
}

export default InputIcon;