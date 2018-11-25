import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Label, Input, FormFeedback, FormText} from 'reactstrap';

class colorprotanopiapage extends Component {
    constructor (props){
        super(props);
        this.state = {
            isBlind: true,
            blindType: 'protanopia'
        }
    }
    render() {
        const isBlind = this.state.isBlind;
        const blindType = this.state.blindType;
        var colorBlindStyle = `${isBlind ? blindType : ''}`;
        return (
            <div>
                
                <Button color={"action " + colorBlindStyle }>Save</Button>{' '}
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

export default colorprotanopiapage;