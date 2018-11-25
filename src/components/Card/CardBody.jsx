import React, { Component } from 'react';

class CardBody extends Component {
    render() {
        return (
            <div>
                <div class="card-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default CardBody;