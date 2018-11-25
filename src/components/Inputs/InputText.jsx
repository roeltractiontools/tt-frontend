import React, { Component } from 'react';

class InputText extends Component {
    render() {
        return (
            <div>
                <input type="text" className={this.props.styleClassName}  placeholder="Username" aria-describedby="basic-addon1"/>
            </div>
        );
    }
}

export default InputText;