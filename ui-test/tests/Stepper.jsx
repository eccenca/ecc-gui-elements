import React from 'react';
import {} from '../../index.js';

const TestStepper = React.createClass({
    getInitialState() {
        return {};
    },

    render() {
        return (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Stepper</h4>
                </div>
                <div className="mdl-card__content">
                    <h5>Linear Stepper</h5>
                    <ul
                        data-upgraded=",MaterialStepper"
                        className="mdl-stepper mdl-stepper--linear"
                        id="demo-stepper-linear">
                        <li className="mdl-step is-active">
                            <span className="mdl-step__label">
                                <span className="mdl-step__title">
                                    <span className="mdl-step__title-text">
                                        Title of step 1
                                    </span>
                                    <span className="mdl-step__title-message">
                                        Summarize if needed
                                    </span>
                                </span>
                                <span className="mdl-step__label-indicator">
                                    <span className="mdl-step__label-indicator-content">
                                        1
                                    </span>
                                </span>
                            </span>
                            <div className="mdl-step__content" />
                            <div className="mdl-step__actions">
                                <button
                                    data-upgraded=",MaterialButton,MaterialRipple"
                                    className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored mdl-button--raised"
                                    data-stepper-next="">
                                    Continue
                                    <span className="mdl-button__ripple-container">
                                        <span className="mdl-ripple" />
                                    </span>
                                </button>
                                <button
                                    data-upgraded=",MaterialButton,MaterialRipple"
                                    className="mdl-button mdl-js-button mdl-js-ripple-effect"
                                    data-stepper-cancel="">
                                    Cancel
                                    <span className="mdl-button__ripple-container">
                                        <span className="mdl-ripple" />
                                    </span>
                                </button>
                            </div>
                        </li>
                        <li className="mdl-step">
                            <span className="mdl-step__label">
                                <span className="mdl-step__title">
                                    <span className="mdl-step__title-text">
                                        Title of step 2
                                    </span>
                                </span>
                                <span className="mdl-step__label-indicator">
                                    <span className="mdl-step__label-indicator-content">
                                        2
                                    </span>
                                </span>
                            </span>
                            <div className="mdl-step__content" />
                            <div className="mdl-step__actions">
                                <button
                                    data-upgraded=",MaterialButton,MaterialRipple"
                                    className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored mdl-button--raised"
                                    data-stepper-next="">
                                    Continue
                                    <span className="mdl-button__ripple-container">
                                        <span className="mdl-ripple" />
                                    </span>
                                </button>
                                <button
                                    data-upgraded=",MaterialButton,MaterialRipple"
                                    className="mdl-button mdl-js-button mdl-js-ripple-effect"
                                    data-stepper-cancel="">
                                    Cancel
                                    <span className="mdl-button__ripple-container">
                                        <span className="mdl-ripple" />
                                    </span>
                                </button>
                            </div>
                        </li>
                        <li className="mdl-step">
                            <span className="mdl-step__label">
                                <span className="mdl-step__title">
                                    <span className="mdl-step__title-text">
                                        Title of step 3
                                    </span>
                                </span>
                                <span className="mdl-step__label-indicator">
                                    <span className="mdl-step__label-indicator-content">
                                        3
                                    </span>
                                </span>
                            </span>
                            <div className="mdl-step__content" />
                            <div className="mdl-step__actions">
                                <button
                                    data-upgraded=",MaterialButton,MaterialRipple"
                                    className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored mdl-button--raised"
                                    data-stepper-next="">
                                    Continue
                                    <span className="mdl-button__ripple-container">
                                        <span className="mdl-ripple" />
                                    </span>
                                </button>
                                <button
                                    data-upgraded=",MaterialButton,MaterialRipple"
                                    className="mdl-button mdl-js-button mdl-js-ripple-effect"
                                    data-stepper-cancel="">
                                    Cancel
                                    <span className="mdl-button__ripple-container">
                                        <span className="mdl-ripple" />
                                    </span>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    },
});

export default TestStepper;
