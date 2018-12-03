import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import DatePicker from "react-datepicker";

class FormTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(date) {
        this.setState({
          startDate: date
        });
    }
    render() {
        return (
            <div id="todo">
                <Form>
                    <Row>
                        <Col md="12">
                            <Label for="exampleEmail">To-do</Label>
                            <Input name="todo" id="exampleText" placeholder="Enter to-do message" />
                        </Col>
                        <Col md="12">
                            <Label for="exampleEmail">To-do</Label>
                            <Input type="textarea" name="text" id="exampleText" placeholder="To-do description" />
                        </Col>
                        <Col md="8">
                            <Label for="exampleEmail">Meeting</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>Department</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </Input>
                        </Col>
                        <Col md="4">
                            <Label for="exampleEmail">Date</Label>
                            <InputGroup className="date">
                                <DatePicker 
                                    className="form-control datepicker"
                                    selected={this.state.startDate}
                                    onChange={this.handleChange} 
                                />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText><i class="far fa-calendar"></i></InputGroupText>
                                    </InputGroupAddon>
                            </InputGroup>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default FormTodo;