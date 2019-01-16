import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
    { label: "Survey Title", name: "title" },
    { label: "Subject Line", name: "subject" },
    { label: "Email Body", name: "body" },
    { label: "Recipient List", name: "emails"}
];

//SurveyForm shows a form for a user to add input
class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({ label, name }) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name}/>
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                        <i className="material-icons right">close</i>
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    };
}

function validate(values) {
    const errors = {};
    if (!values.title) {
        errors.title = 'You must provide a title!';
    }
    if (!values.subject) {
        errors.subject = 'You must provide a subject!';
    }
    if (!values.body) {
        errors.body = 'You must provide a survey body!';
    }
    if (!values.emails) {
        errors.emails = 'You must provide a recipient!';
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);