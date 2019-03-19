import React from 'react';
import _ from 'lodash';
import {
    Card, CardTitle, CardContent, Icon,
} from '../../index';
import canonicalIconNames from '../../src/elements/Icon/canonicalicons.json';

class TestIcons extends React.Component {
    render() {
        return (
            <Card>
                <CardTitle documentLevel="h4">Test Icons</CardTitle>
                <CardContent>
                    <h5>Canonical icons with fallback tooltips</h5>
                    {_.map(
                        canonicalIconNames,
                        (value, key) => (
                            <Icon name={key} key={`testicon-${key}`} />
                        )
                    )}
                    <h5>Other Icons</h5>
                    <Icon
                        name="widgets"
                        tooltip="no tooltip on the next (canonical) icon"
                    />
                    <Icon name="access_forbidden" tooltip={false} />
                    <Icon
                        name="error"
                        tooltip="Icon with non existent icon name"
                    />
                    <Icon
                        name="account_box"
                        badge="5"
                        tooltip="Icon with badge"
                    />
                    <Icon
                        name="error"
                        badge="673"
                        tooltip="Icon with three digit badge"
                    />
                </CardContent>
            </Card>
        );
    }
}

export default TestIcons;
