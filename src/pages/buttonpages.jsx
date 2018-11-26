import React, { Component } from 'react';
import Buttons from '../components/Buttons/Buttons'
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Card, CardHeader, CardBody} from '../components/Card/Bundle';

class buttonpages extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
    render() {
        return (
            <div>
                <h3>Buttons</h3>
                <Button color="action">Save</Button>{' '}
                <Button color="action-alternative">Cancel</Button>{' '}
                <Button color="secondary-green">Save and Continue</Button>{' '}
                <Button color="action-alternative" disabled>Disabled</Button>{' '}
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret color="dropdown">
                    Button Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </div>
        );
    }
}

export default buttonpages;