import React from 'react';
import {
    Progressbar,
} from '../../index.js';

const TestProgressbar = React.createClass({
    getInitialState() {
        return {
        };
    },

    render() {
        return (
            <div className="mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Progressbars</h4>
                </div>
                <div className="mdl-card__content">
                    <Progressbar progress={85}/>
                    <Progressbar appearGlobal={true} indeterminate={true} />
                </div>
                <Progressbar appearLocal={true} progress={15}/>
            </div>
        );
    }
});

export default TestProgressbar;
