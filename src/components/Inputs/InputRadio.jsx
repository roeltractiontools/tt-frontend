import React, { Component } from 'react';

class InputRadio extends Component {
    render() {
        return (
            <div>
                <label class="radio">Company
                  <input type="radio" checked="checked" name="is_company"/>
                  <span class="checkround"></span>
                </label>
            </div>
        );
    }
}

export default InputRadio;