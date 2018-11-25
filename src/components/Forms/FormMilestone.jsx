import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import DatePicker from "react-datepicker";
import { Container, Row, Col } from 'reactstrap';

class FormMilestone extends Component {
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
            <div>
              <Form>
                <Row>
                  <Col md="12">
                    <Label for="exampleEmail">Milestone</Label>
                    <Input type="textarea" name="text" id="exampleText" placeholder="Please add your milestone here" />
                  </Col>
                  <Col md="12">
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
                  <Col md="12">
                  </Col>
                </Row>
              </Form>
            </div>
        );
    }
}

export default FormMilestone;