import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Label, Input, FormFeedback, FormText} from 'reactstrap';

class colortritanopespage extends Component {
    constructor (props){
        super(props);
        this.state = {
            isBlind: true,
            blindType: 'tritanopes'
        }
    }
    render() {
        const isBlind = this.state.isBlind;
        const blindType = this.state.blindType;
        var colorBlindStyle = `${isBlind ? blindType : ''}`;
        return (
            <div className={colorBlindStyle}>
                <Button color={"action-alternative"}>Cancel</Button>{' '}
                <Button color={"action"}>Save</Button>{' '}
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
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Valid input</Label>
                            <Input valid />
                            <FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Invalid input</Label>
                            <Input invalid />
                            <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
                        </FormGroup>
                    </Form>
            </div>
        );
    }
}

export default colortritanopespage;