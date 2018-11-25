import React, { Component } from 'react';
import InputCheckbox from '../components/Inputs/InputCheckbox'
import Buttons from '../components/Buttons/Buttons'
import FormTodo from '../components/Forms/FormTodo'
import FormBasic from '../components/Forms/FormBasic'
import FormMilestone from '../components/Forms/FormMilestone'
import FormScorecard from '../components/Forms/FormScorecard'
import FormValidation from '../components/Forms/FormValidation'
import {Card, CardHeader, CardBody} from '../components/Card/Bundle'
import { Button, Form, FormGroup, Label, FormText } from 'reactstrap';

class formpages extends Component {
    render() {
        return (
            <div>
                <h3>Form Basic</h3>
                <FormBasic/>
                {/* Start Form To-do */}
                <h3>Form Todo</h3>
                <div class="" tabindex="-1" role="dialog">
                    <div class="modal-dialog modal-issue" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h3>Add a To-do</h3>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div class="modal-body">
                                <FormTodo/>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-action" data-dismiss="modal">Submit</button>
                            <button type="button" class="btn btn-action-alternative">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Form To-do */}
                {/* Start Form Milestone */}
                <h3>Form Milestone</h3>
                <div class="" tabindex="-1" role="dialog">
                    <div class="modal-dialog modal-milestone" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h3>Add Milestone</h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                            <FormMilestone/>
                        </div>
                        <div class="modal-footer">
                            <Button color="action">Submit</Button>
                            <Button color="action-alternative">Cancel</Button>
                        </div>
                    </div>
                    </div>
                </div>
               {/* End Form Milestone */} 
                {/* Start Form Scorecard */}
                <h3>Form Scorecard</h3>
                <div class="" tabindex="-1" role="dialog">
                    <div class="modal-dialog modal-milestone" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h3>Add Milestone</h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                            <FormScorecard/>
                        </div>
                        <div class="modal-footer">
                            <Button color="action">Submit</Button>
                            <Button color="action-alternative">Cancel</Button>
                        </div>
                    </div>
                    </div>
                </div>
               {/* End Form Scorecard */} 
            </div>
        );
    }
}

export default formpages;