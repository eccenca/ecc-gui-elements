/* eslint no-console: 0 */
import React from 'react';
import render from 'ecc-uitest-helpers';
// test styles
import '../style/test.less';
// component
import Component from '../index.js';
import {Button, Icon} from '../index.js';

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
                <div className="mdl-card__supporting-text">
                    <Component />
                    <Button raised={true} accent={true} ripple={false}>Test</Button>
                    <Button raised={true} ripple={false} tooltip="This is a Test!" fabSize="large">
                        <Icon name="mood" />
                    </Button>
                </div>
            </div>
        );
    },
});

render({Component: Page});
