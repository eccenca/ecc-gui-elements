import React from 'react';
import {
    AffirmativeButton,
    Button,
    Card,
    CardTitle,
    CardMenu,
    CardContent,
    Checkbox,
    Icon,
    TextField,
    Tooltip,
} from '../../index';

const TestTooltips = () => {
    const tooltipObject = (
        <div>
            <p>
                This is a tooltip,<br /> holding dom and react objects.
            </p>
            <Checkbox>
                <p>Object label</p>
            </Checkbox>
        </div>
    );

    return (
        <Card>
            <CardTitle>
                <h4 className="mdl-card__title-text">
                    Test Tooltips (with a longer title to test overflowing)
                </h4>
                <CardMenu>
                    <Button>Test</Button>
                    <Button iconName="menu_more" tooltip="Test" />
                </CardMenu>
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
                <Tooltip label="default tooltip">default</Tooltip>
                <h5>Sizes</h5>
                <Tooltip label="normal tooltip">normal</Tooltip>
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
                &nbsp;/&nbsp;
                <Tooltip label="Tooltip for icon">
                    <span>
                        <Icon name="add" tooltip={false} />
                    </span>
                </Tooltip>
                &nbsp;/&nbsp;
                <Tooltip label="Tooltip for button">
                    <AffirmativeButton>Button</AffirmativeButton>
                </Tooltip>
                &nbsp;/&nbsp;
                <Tooltip label="Tooltip for checkbox">
                    <span>
                        <Checkbox label="checkbox label" />
                    </span>
                </Tooltip>
                &nbsp;/&nbsp;
                <Tooltip label="Tooltip for text input">
                    <div>
                        <TextField
                            label="textfield label"
                            value="textfield value"
                        />
                    </div>
                </Tooltip>
            </CardContent>
        </Card>
    );
};
export default TestTooltips;
