import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import InputIcon from '../Inputs/InputIcon'
import SelectIcon from '../Select/SelectIcon'
import DatePicker from "react-datepicker";
import { Container, Row, Col } from 'reactstrap';

class FormScorecard extends Component {
    render() {
        return (
            <div id="scorecard">
              <Form>
                <Row>
                  <Col md="12">
                    <Label for="exampleEmail">Scorecard</Label>
                    <Input type="textarea" name="text" id="exampleText" placeholder="Scorecard description" />
                  </Col>
                  <Col md="6">
                    <Label for="exampleEmail">Direct</Label>
                    <SelectIcon/>
                  </Col>
                  <Col md="6">
                    <Label for="exampleEmail">Goal</Label>
                    <InputIcon iconName={'fas fa-percent'}/>
                  </Col>
                </Row>
              </Form>
            </div>
        );
    }
}

export default FormScorecard;