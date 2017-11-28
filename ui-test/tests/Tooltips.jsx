import React from 'react';
import {
    Button,
    Card,
    CardTitle,
    CardContent,
    Checkbox,
    Icon,
    Tooltip,
} from '../../index.js';

class TestTooltips extends React.PureComponent {
    render() {

        const tooltipObject = (
            <div>
                <p>This is a tooltip,<br/> holding dom and react objects.</p>
                <Checkbox>
                    <p>Object label</p>
                </Checkbox>
            </div>
        );

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

                    <h5>Sizes</h5>
                    <Tooltip label="normal tooltip">
                        normal
                    </Tooltip>
                    &nbsp;/&nbsp;
                    <Tooltip large label="large tooltip">
                        large
                    </Tooltip>

                    <h5>Object tooltip</h5>
                    <Tooltip label={tooltipObject}>
                        Holding an object as label.
                    </Tooltip>

                    <h5>Tooltip for objects</h5>
                    <Tooltip label="Tooltip for paragraph">
                        <p>Paragraph.</p>
                    </Tooltip>
                    <Tooltip label="Tooltip for icon">
                        <Icon name="add" />
                    </Tooltip>
                    <Tooltip label="Tooltip for button">
                        <Button>Button</Button>
                    </Tooltip>
                    <Tooltip label="Tooltip for checkbox">
                        <Checkbox label="checkbox label" />
                    </Tooltip>
                </CardContent>
            </Card>
        );
    }
}
;

export default TestTooltips;
