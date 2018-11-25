import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    return (
      <button className={this.props.styleClassName}>{this.props.buttonName}</button>
    );
  }
}

export default Buttons;