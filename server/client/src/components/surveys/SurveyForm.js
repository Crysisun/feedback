import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

//SurveyForm shows a form for a user to add input
class SurveyForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name}/>
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
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
    errors.emails = validateEmails(values.emails || '');

    _.each(formFields, ({ name }) => {
        if (!values[name]) {
            if (name === "emails") {
                errors[name] = 'You must provide at least one email.';
            } else {
                errors[name] = 'You must provide a ' + name + '.';
            }
        }
    });
    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);