import React from 'react';
import {
    Button,
    Icon
} from '../../index.js';

const TestButtons = React.createClass({
    getInitialState() {
        return {
        };
    },

    render() {
        return (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Buttons</h4>
                </div>
                <div className="mdl-card__content">
                    <h5>Buttons using canonical icons</h5>
                    <Button colored iconName="edit" tooltip="own tooltip"/>
                    <Button accent iconName="delete" tooltip={false} />
                    <Button raised iconName="arrow_nextpage" />
                    <Button raised colored iconName="arrow_prevpage" />
                    <Button raised accent iconName="arrow_lastpage" />
                    <Button fabSize="mini" iconName="arrow_firstpage" />
                    <Button fabSize="large" iconName="arrow_dropdown" />
                    <Button iconName="expand_more" />
                    <Button iconName="expand_less" />
                    <Button iconName="menu_more" />
                    <Button iconName="filter" />
                    <Button iconName="sort" />
                    <Button iconName="hide" />
                    <Button iconName="access_forbidden" />
                </div>
                <div className="mdl-card__actions">
                    <Button raised={true} ripple={false} tooltip="This is a Test!" fabSize="mini">
                        <Icon name="mood" />
                    </Button>
                    <Button raised={true}>
                        <Icon name="hide" />
                        Hide
                    </Button>
                    <Button iconName="more_vert" />
                </div>
            </div>
        );
    }
});

export default TestButtons;