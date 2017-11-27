import React from 'react';
import {
    Card,
    CardTitle,
    CardContent,
    Tooltip
} from '../../index.js';

class TestTooltips extends React.PureComponent {
    render() {
        return (
            <Card>
                <CardTitle>
                    <h4 className="mdl-card__title-text">Test Alerts</h4>
                </CardTitle>
                <CardContent>
                    <h5>Positions</h5>
                    <Tooltip position="top" label="top tooltip">
                        top
                    </Tooltip>
                    &nbsp;/&nbsp;
                    <Tooltip position="right" label="right tooltip">
                        right
                    </Tooltip>
                    &nbsp;/&nbsp;
                    <Tooltip position="bottom" label="bottom tooltip">
                        bottom
                    </Tooltip>
                    &nbsp;/&nbsp;
                    <Tooltip position="left" label="left tooltip">
                        left
                    </Tooltip>
                    &nbsp;/&nbsp;
                    <Tooltip label="default tooltip">
                        default
                    </Tooltip>
                </CardContent>
            </Card>
        );
    }
}
;

export default TestTooltips;
