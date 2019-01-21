import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

//SurveyNew shows SurveyForm and SurveyFormReview
class SurveyNew extends Component {
    state = { showReview: false };
    renderContent() {
        if (this.state.showReview) {
            return <SurveyFormReview />
        }
        return <SurveyForm
            onSurveySubmit={() => this.setState({ showReview: true})}
        />
    }
    render() {
        return (
            <div>
                { this.renderContent() }
            </div>
        );
    };
}

export default SurveyNew;