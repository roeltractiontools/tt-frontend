import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Label, Input, FormFeedback, FormText} from 'reactstrap';

class colorprotanopiapage extends Component {
    render() {
        const isProtanopia = true; // pull from database

        var colorBlindStyle = `${isProtanopia && 'isProtanopia'}`;
        
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