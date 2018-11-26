import React, { Component } from 'react';
import InputIcon from '../components/Inputs/InputIcon';
import InputRadio from '../components/Inputs/InputRadio';
import InputCheckbox from '../components/Inputs/InputCheckbox';
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

class inputpages extends Component {
    render() {
        return (
            <div>
            <h3>Validation</h3>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Input without validation</Label>
                        <Input />
                        <FormFeedback>You will not be able to see this</FormFeedback>
                        <FormText>Example help text that remains unchanged.</FormText>
                        </FormGroup>
                        <FormGroup>
                        <Label for="exampleEmail">Valid input</Label>
                        <Input valid />
                        <FormFeedback valid>Sweet! that name is available</FormFeedback>
                        <FormText>Example help text that remains unchanged.</FormText>
                        </FormGroup>
                        <FormGroup>
                        <Label for="examplePassword">Invalid input</Label>
                        <Input invalid />
                        <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                        <FormText>Example help text that remains unchanged.</FormText>
                        </FormGroup>
                        <FormGroup>
                        <Label for="exampleEmail">Input without validation</Label>
                        <Input />
                        <FormFeedback tooltip>You will not be able to see this</FormFeedback>
                        <FormText>Example help text that remains unchanged.</FormText>
                        </FormGroup>
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
            <h3>Sizes</h3>
                <Input placeholder="Input Size Large" bsSize="lg" />
                <Input placeholder="Input Size Default"/>
                <Input placeholder="Input Size Default" bsSize="sm"/>
                <InputIcon iconName={'fas fa-percent'}/>
                <InputRadio/>
                <InputRadio/>
                <InputCheckbox styleClassName={'checkmark'} checkboxName={'Agree to terms and conditions'}/>
                <InputCheckbox styleClassName={'checkmark-solid'} checkboxName={'Agree to terms and conditions'}/>
                <Button type="submit" color="action">Submit</Button>        
            </div>
        );
    }
}

export default inputpages;