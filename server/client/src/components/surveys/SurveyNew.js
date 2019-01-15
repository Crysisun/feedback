import React, { Component } from 'react';
import SurveyForm from './SurveyForm';

//SurveyNew shows SurveyForm and SurveyFormReview
class SurveyNew extends Component {
    render() {
        return (
            <div>
                <SurveyForm />
            </div>
        );
    };
}

export default SurveyNew;