/* eslint no-console: 0 */
import React from 'react';
import render from 'ecc-uitest-helpers';
// test styles
import '../style/test.less';
// component
import Component from '../index.js';

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
                </div>
            </div>
        );
    },
});

render({Component: Page});
