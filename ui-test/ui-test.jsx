/* eslint no-console: 0 */
import React from 'react';
import render from 'ecc-uitest-helpers';
// test styles
import '../style/test.less';
// component
import {
    Alert,
    Button,
    Icon,
    Info,
    Error,
    Warning,
    Success
} from '../index.js';

const Page = React.createClass({
    getInitialState() {
        return {
        };
    },
    // template rendering
    render() {
        return (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">test</h4>
                </div>
                <div className="mdl-card__content">
                    <div>
                        <Alert border={true} vertSpacing={true} dismissLabel="remove">
                            <p>This is a</p>
                            <p>untyped message.</p>
                        </Alert>
                        <Info border={true} vertSpacing={true} >
                            info
                        </Info>
                        <Success border={true} vertSpacing={true} >
                           success
                        </Success>
                        <Warning border={true} vertSpacing={true} >
                            warning
                        </Warning>
                        <Error dismissLabel="remove error" vertSpacing={true} >
                            error
                        </Error>
                    </div>
                    <div>
                        <Button raised={true} accent={true} ripple={false}>Test</Button>
                        <Button raised={true} ripple={false} tooltip="This is a Test!" fabSize="large">
                            <Icon name="mood" />
                        </Button>
                    </div>
                </div>
            </div>
        );
    },
});

render({Component: Page});
