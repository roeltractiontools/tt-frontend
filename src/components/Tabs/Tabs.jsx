import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }
    
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    render() {
        return (
            <div>
            <div class="tabs-container">
                <Button color="tabs" onClick={this.toggle}>{this.props.tabName} <i class="fas fa-angle-down"></i></Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            {this.props.children}
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
            </div>
        );
    }
}

export default Tabs;