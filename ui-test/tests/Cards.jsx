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
} from '../../index';

class TestCards extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            stretch: true,
            shadow: 4,
            reducedSize: false,
            titleBorder: false,
            titleDocumentLevel: 'h1',
            actionsBorder: true,
            actionsFixed: false,
            longCard: false,
        };
    }

    render() {
        return (
            <Card
                stretch={this.state.stretch}
                shadow={this.state.shadow}
                reducedSize={this.state.reducedSize}>
                <CardTitle
                    border={this.state.titleBorder}
                    documentLevel={this.state.titleDocumentLevel}>
                    Test Cards
                </CardTitle>
                <CardMenu>
                    <ContextMenu>
                        <MenuItem>Menu item 1</MenuItem>
                        <MenuItem>Menu item 2</MenuItem>
                    </ContextMenu>
                </CardMenu>
                <CardContent>
                    <div style={this.state.longCard ? {height: '120vh'} : {}}>
                        <Checkbox
                            label="Click to lengthen me"
                            checked={this.state.longCard}
                            onChange={({value}) =>
                                this.setState({longCard: value})
                            }
                        />
                    </div>
                </CardContent>
                <CardActions
                    className="mdl-card__actions"
                    border={this.state.actionsBorder}
                    fixed={this.state.actionsFixed}>
                    <Checkbox
                        label="Stretch"
                        checked={this.state.stretch}
                        onChange={({value}) => this.setState({stretch: value})}
                    />
                    <hr className="mdl-layout-spacer" />
                    <SelectBox
                        placeholder="Shadow"
                        options={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
                        value={this.state.shadow}
                        onChange={value => this.setState({shadow: value})}
                    />
                    <hr className="mdl-layout-spacer" />
                    <Checkbox
                        label="Reduced Size"
                        checked={this.state.reducedSize}
                        onChange={({value}) =>
                            this.setState({reducedSize: value})
                        }
                    />
                    <Checkbox
                        label="Title Border"
                        checked={this.state.titleBorder}
                        onChange={({value}) =>
                            this.setState({titleBorder: value})
                        }
                    />
                    <SelectBox
                        placeholder="Title Document Level"
                        options={['h1', 'h2', 'h3', 'h4', 'h5', 'h6']}
                        value={this.state.titleDocumentLevel}
                        onChange={value =>
                            this.setState({titleDocumentLevel: value})
                        }
                    />
                    <Checkbox
                        label="Actions Border"
                        checked={this.state.actionsBorder}
                        onChange={({value}) =>
                            this.setState({actionsBorder: value})
                        }
                    />
                    <Checkbox
                        label="Actions Fixed"
                        checked={this.state.actionsFixed}
                        onChange={({value}) =>
                            this.setState({actionsFixed: value})
                        }
                    />
                    <FloatingActionList
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
                        ]}
                        fabSize="mini"
                    />
                </CardActions>
            </Card>
        );
    }
}
export default TestCards;
