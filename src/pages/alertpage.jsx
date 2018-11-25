import React, { Component } from 'react';
import Alert from '../components/Alert/AlertMessage';
import AlertMessage from '../components/Alert/AlertMessage';

class alertpage extends Component {
    render() {
        return (
            <div>
                <AlertMessage alertType={'error'} iconName={'fas fa-exclamation-triangle'} alertInfo={'This Alert is for ERROR message'} />
                <AlertMessage alertType={'warning'} iconName={'fas fa-exclamation-circle'} alertInfo={'This Alert is for WARNING message'}/>
                <AlertMessage alertType={'success'} iconName={'fas fa-check-circle'} alertInfo={'This Alert is for SUCCESS message'}/>
            </div>
        );
    }
}

export default alertpage;