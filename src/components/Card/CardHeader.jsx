import React, { Component } from 'react';

class CardHeader extends Component {
    render() {
        return (
            <div>
                <div class="card-header">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default CardHeader;