import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class AlertMessage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          visible: true
        };
    
        this.onDismiss = this.onDismiss.bind(this);
    }
    
    onDismiss() {
        this.setState({ visible: false });
    }
    render() {
        return (
            <div>
                <Alert color={this.props.alertType} isOpen={this.state.visible} toggle={this.onDismiss}>
                    <i className={this.props.iconName}></i> {this.props.alertInfo}
                </Alert> 
            </div>
        );
    }
}

export default AlertMessage;