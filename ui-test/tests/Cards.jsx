import React from 'react';
import {
    Card,
    CardTitle,
    CardMenu,
    ContextMenu,
    MenuItem,
    CardContent,
    CardActions,
    FloatingActionList,
    SelectBox,
    Checkbox,
    Button,
    DisruptiveButton,
} from '../../index';

class TestCards extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            stretch: true,
            shadow: 4,
            fixedActions: false,
            reducedSize: false,
            titleBorder: false,
            titleDocumentLevel: 'h1',
            actionsBorder: true,
            actionsFixed: false,
            longCard: false,
            miniFAB: false,
            actionsHide: false,
            bottomMenuFAB: function() { return false; },
        };
    }

    render() {
        return (
            <diV>
                <Card
                    className="uitest-divmargin"
                    stretch={this.state.stretch}
                    shadow={this.state.shadow}
                    fixedActions={this.state.fixedActions}
                    reducedSize={this.state.reducedSize}
                >
                    <CardTitle
                        border={this.state.titleBorder}
                        documentLevel={this.state.titleDocumentLevel}
                    >
                        Test Cards
                    </CardTitle>
                    <CardMenu>
                        <Button raised>Action</Button>
                        <DisruptiveButton>Remove</DisruptiveButton>
                        <ContextMenu>
                            <MenuItem>Menu item 1</MenuItem>
                            <MenuItem>Menu item 2</MenuItem>
                        </ContextMenu>
                    </CardMenu>
                    <CardContent>
                        <div
                            className={
                                this.state.longCard ? 'uitest-longcard' : ''
                            }
                        >
                            <Checkbox
                                label="Large card"
                                checked={this.state.longCard}
                                onChange={({ value }) =>
                                    this.setState({ longCard: value })
                                }
                            />
                        </div>
                        <Checkbox
                            label="Stretch"
                            checked={this.state.stretch}
                            onChange={({ value }) => this.setState({ stretch: value })}
                        />
                        <SelectBox
                            placeholder="Shadow"
                            options={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
                            value={this.state.shadow}
                            onChange={value => this.setState({ shadow: value })}
                        />
                        <Checkbox
                            label="Fixed Actions"
                            checked={this.state.fixedActions}
                            onChange={({ value }) =>
                                this.setState({ fixedActions: value })
                            }
                        />
                        <Checkbox
                            label="Reduced Size"
                            checked={this.state.reducedSize}
                            onChange={({ value }) =>
                                this.setState({ reducedSize: value })
                            }
                        />
                        <Checkbox
                            label="Title Border"
                            checked={this.state.titleBorder}
                            onChange={({ value }) =>
                                this.setState({ titleBorder: value })
                            }
                        />
                        <SelectBox
                            placeholder="Title Document Level"
                            options={['h1', 'h2', 'h3', 'h4', 'h5', 'h6']}
                            value={this.state.titleDocumentLevel}
                            onChange={value =>
                                this.setState({ titleDocumentLevel: value })
                            }
                        />
                        <Checkbox
                            label="Actions Border"
                            checked={this.state.actionsBorder}
                            onChange={({ value }) =>
                                this.setState({ actionsBorder: value })
                            }
                        />
                        <Checkbox
                            label="Actions Fixed"
                            checked={this.state.actionsFixed}
                            onChange={({ value }) =>
                                this.setState({ actionsFixed: value })
                            }
                        />
                        <Checkbox
                            label="Hide Actions"
                            checked={this.state.actionsHide}
                            onChange={({ value }) =>
                                this.setState({ actionsHide: value })
                            }
                        />
                        <Checkbox
                            label="Show FAB in mini size"
                            checked={this.state.miniFAB}
                            onChange={({ value }) => this.setState({ miniFAB: value })}
                        />
                        <Checkbox
                            label="Open FAB menu to bottom"
                            checked={this.state.bottomMenuFAB()}
                            onChange={({ value }) => this.setState({ bottomMenuFAB: function() { return value; }})}
                        />
                    </CardContent>
                    {!this.state.actionsHide ? (
                        <CardActions
                            className="mdl-card__actions"
                            border={this.state.actionsBorder}
                            fixed={this.state.actionsFixed}
                        >
                            <Button raised accent>
                                Raised dummy Button
                            </Button>
                            <Button>Normal dummy Button</Button>
                            <FloatingActionList
                                openToBottom={this.state.bottomMenuFAB}
                                actions={[
                                    {
                                        icon: 'info',
                                        label: 'info FAB',
                                        handler() {
                                            alert('You clicked the info FAB.');
                                        },
                                    },
                                    {
                                        icon: 'edit',
                                        label: 'edit FAB',
                                        handler() {
                                            alert('You clicked the edit FAB.');
                                        },
                                    },
                                    {
                                        icon: 'remove',
                                        label: 'remove FAB',
                                        disabled: true,
                                        handler() {
                                            alert('You clicked the remove FAB.');
                                        },
                                    },
                                ]}
                                fabSize={this.state.miniFAB ? 'mini' : 'large'}
                            />
                        </CardActions>
                    ) : null}
                </Card>

                <Card className="uitest-divmargin" reducedSize>
                    <CardTitle>
                        Test with normal Card included in reduced Card
                    </CardTitle>
                    <CardMenu>
                        <ContextMenu>
                            <MenuItem>Menu item 1</MenuItem>
                            <MenuItem>Menu item 2</MenuItem>
                        </ContextMenu>
                    </CardMenu>
                    <CardContent>
                        <Card shadow={0}>
                            <CardTitle>Normal Card</CardTitle>
                            <CardContent>
                                <p>Dummy Content</p>
                            </CardContent>
                            <CardActions>
                                <Button raised>Dummy button</Button>
                            </CardActions>
                        </Card>
                    </CardContent>
                    <CardActions>
                        <Button raised>Dummy button</Button>
                    </CardActions>
                </Card>

                <Card className="uitest-divmargin">
                    <CardTitle
                        border={this.state.titleBorder}
                    >
                        Allow floating menu with 1 item
                    </CardTitle>
                    <CardContent>
                        <p>
                            Illum hic hic quis cernantur, ea quid ingeniis laboris. Aute si consequat et
                            magna excepteur arbitror, veniam doctrina graviterque aut consequat multos sint
                            laborum amet, ex magna ullamco proident, esse nescius exquisitaque ea pariatur
                            se ipsum voluptate, quem mentitum exercitation. Ne illum elit esse iudicem,
                            doctrina sed quis.Enim deserunt et constias, fabulas irure admodum. Nescius
                            summis quo iudicem domesticarum a ex quid ipsum do quibusdam, in tempor pariatur
                            concursionibus, cupidatat te fugiat officia, a sunt incididunt, labore id ad
                            anim consequat e nam summis do nulla quo summis hic mandaremus. Vidisse
                            domesticarum ne mentitum. Minim incurreret est appellat nam probant velit irure
                            eu sint e illum si vidisse, nostrud a illum.
                        </p>
                    </CardContent>
                    <FloatingActionList
                        allowSingleItemList
                        fixed={this.state.actionsFixed}
                        actions={[
                            {
                                icon: 'info',
                                label: 'info FAB',
                                handler() {
                                    alert('You clicked the info FAB.');
                                },
                            },
                        ]}
                        fabSize={this.state.miniFAB ? 'mini' : 'large'}
                    />
                </Card>

                <Card className="uitest-divmargin">
                    <CardTitle
                        border={this.state.titleBorder}
                    >
                        Do not allow floating menu with 1 item
                    </CardTitle>
                    <CardContent>
                        <p>
                            Illum hic hic quis cernantur, ea quid ingeniis laboris. Aute si consequat et
                            magna excepteur arbitror, veniam doctrina graviterque aut consequat multos sint
                            laborum amet, ex magna ullamco proident, esse nescius exquisitaque ea pariatur
                            se ipsum voluptate, quem mentitum exercitation. Ne illum elit esse iudicem,
                            doctrina sed quis.Enim deserunt et constias, fabulas irure admodum. Nescius
                            summis quo iudicem domesticarum a ex quid ipsum do quibusdam, in tempor pariatur
                            concursionibus, cupidatat te fugiat officia, a sunt incididunt, labore id ad
                            anim consequat e nam summis do nulla quo summis hic mandaremus. Vidisse
                            domesticarum ne mentitum. Minim incurreret est appellat nam probant velit irure
                            eu sint e illum si vidisse, nostrud a illum.
                        </p>
                    </CardContent>
                    <FloatingActionList
                        fixed={this.state.actionsFixed}
                        actions={[
                            {
                                icon: 'info',
                                label: 'info FAB',
                                handler() {
                                    alert('You clicked the info FAB.');
                                },
                            },
                        ]}
                        fabSize={this.state.miniFAB ? 'mini' : 'large'}
                    />
                </Card>
            </diV>
        );
    }
}
export default TestCards;
