import React from 'react';
import {Card, CardTitle, CardContent, Icon} from '../../index';

const TestIcons = React.createClass({
    getInitialState() {
        return {};
    },

    render() {
        return (
            <Card>
                <CardTitle documentLevel={'h4'}>Test Icons</CardTitle>
                <CardContent>
                    <h5>Basic Icons with Fallback tooltips</h5>
                    <Icon name="edit" />
                    <Icon name="remove" />
                    <Icon name="save" />
                    <Icon name="confirm" />
                    <Icon name="cancel" />
                    <Icon name="arrow_firstpage" />
                    <Icon name="arrow_prevpage" />
                    <Icon name="arrow_nextpage" />
                    <Icon name="arrow_lastpage" />
                    <Icon name="arrow_dropdown" />
                    <Icon name="expand_more" />
                    <Icon name="expand_less" />
                    <Icon name="menu_more" />
                    <Icon name="adjust" />
                    <Icon name="filter" />
                    <Icon name="sort" />
                    <Icon name="hide" />
                    <Icon name="settings" />
                    <Icon name="access_forbidden" />
                    <Icon name="delete" />
                    <h5>Other Icons</h5>
                    <Icon
                        name="widgets"
                        tooltip="no tooltip on the next (canonical) icon"
                    />
                    <Icon name="access_forbidden" tooltip={false} />
                    <Icon
                        name="non_existing_icon_name"
                        tooltip="Icon with non existent icon name"
                    />
                    <Icon
                        name="account_box"
                        badge="5"
                        tooltip="Icon with badge"
                    />
                    <Icon
                        name="account"
                        badge="673"
                        tooltip="Icon with three digit badge"
                    />
                </CardContent>
            </Card>
        );
    },
});

export default TestIcons;
