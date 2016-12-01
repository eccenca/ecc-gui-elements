import React from 'react';
import {
    Alert,
    Info,
    Success,
    Warning,
    Error
} from '../../index.js';

const TestAlerts = React.createClass({
    getInitialState() {
        return {
        };
    },

    render() {
        return (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Alerts</h4>
                </div>
                <div className="mdl-card__content">
                    <Alert border={true} vertSpacing={true} handlerDismiss={function() {}}>
                        <p>This is a</p>
                        <p>untyped message.</p>
                    </Alert>
                    <Info border={true} vertSpacing={true}>
                        info
                    </Info>
                    <Success border={true} vertSpacing={true}>
                        success
                    </Success>
                    <Warning border={true} vertSpacing={true}>
                        warning
                    </Warning>
                    <Error handlerDismiss={function() {}} labelDismiss="remove error" vertSpacing={true}>
                        error
                    </Error>
                </div>
            </div>
        );
    }
});

export default TestAlerts;