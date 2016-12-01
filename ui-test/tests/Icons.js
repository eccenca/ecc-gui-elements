import React from 'react';
import {
    Icon
} from '../../index.js';

const TestIcons = React.createClass({
    getInitialState() {
        return {
        };
    },

    render() {
        return (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Icons</h4>
                </div>
                <div className="mdl-card__content">
                    <h5>Basic Icons with Fallback tooltips</h5>
                    <Icon name="edit" />
                    <Icon name="delete" />
                    <Icon name="arrow_firstpage" />
                    <Icon name="arrow_prevpage" />
                    <Icon name="arrow_nextpage" />
                    <Icon name="arrow_lastpage" />
                    <Icon name="arrow_dropdown" />
                    <Icon name="expand_more" />
                    <Icon name="expand_less" />
                    <Icon name="menu_more" />
                    <Icon name="filter" />
                    <Icon name="sort" />
                    <Icon name="hide" />
                    <Icon name="access_forbidden" />
                    <h5>Other Icons</h5>
                    <Icon name="widgets" tooltip="no tooltip on the next (canonical) icon" />
                    <Icon name="access_forbidden" tooltip={false} />
                </div>
            </div>
        );
    }
});

export default TestIcons;
