import React, { Component } from 'react';

class InputCheckbox extends Component {
    render() {
        return (
            <div>
                <label class="check">{this.props.checkboxName}
                    <input type="checkbox" name="is_name"/>
                    <span className={this.props.styleClassName}></span>
                </label>
            </div>
        );
    }
}

export default InputCheckbox;