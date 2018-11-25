import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.cardTitle}</h3>
                <div class="card">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Card;