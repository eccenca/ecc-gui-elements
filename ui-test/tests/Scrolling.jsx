import React from 'react';
import _ from 'lodash';
import {
    Button,
    Card,
    CardTitle,
    CardContent,
    CardActions,
    FloatingActionList,
} from '../../index';
import ScrollingHOC from '../../src/hocs/ScrollingHOC';

class TestScrolling extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            actionsList: [
                {
                    icon: 'confirm',
                    label: 'Reduce to one action with icon',
                    handler: this.makeActionsSingle1,
                },
                {
                    icon: 'cancel',
                    label: 'Reduce to one action without icon',
                    handler: this.makeActionsSingle2,
                },
                {
                    icon: 'edit',
                    label: 'Load multiple items',
                    handler: this.makeActionsMultiple,
                },
                {
                    icon: 'confirm',
                    label: 'Reduce to one action with icon',
                    handler: this.makeActionsSingle1,
                },
                {
                    icon: 'cancel',
                    label: 'Reduce to one action without icon',
                    handler: this.makeActionsSingle2,
                },
                {
                    icon: 'edit',
                    label: 'Load multiple items',
                    handler: this.makeActionsMultiple,
                },
                {
                    icon: 'confirm',
                    label: 'Reduce to one action with icon',
                    handler: this.makeActionsSingle1,
                },
                {
                    icon: 'cancel',
                    label: 'Reduce to one action without icon',
                    handler: this.makeActionsSingle2,
                },
                {
                    icon: 'edit',
                    label: 'Load multiple items',
                    handler: this.makeActionsMultiple,
                },
            ],
        };
        this.makeActionsSingle1 = this.makeActionsSingle1.bind(this);
        this.makeActionsSingle2 = this.makeActionsSingle2.bind(this);
        this.makeActionsMultiple = this.makeActionsMultiple.bind(this);
        this.handleScrollTo = this.handleScrollTo.bind(this);
    }

    componentDidMount() {
        this.props.scrollIntoView({
            topOffset: 10,
        });
    }


    makeActionsSingle1() {
        this.setState({
            actionsList: [
                {
                    icon: 'add',
                    label: 'Add multiple action list',
                    handler: this.makeActionsMultiple,
                },
            ],
        });
    }
    makeActionsSingle2() {
        this.setState({
            actionsList: [
                {
                    label: 'Add multiple action list',
                    handler: this.makeActionsMultiple,
                },
            ],
        });
    }
    makeActionsMultiple() {
        this.setState({
            actionsList: [
                {
                    icon: 'confirm',
                    label: 'Reduce to one action with icon',
                    handler: this.makeActionsSingle1,
                },
                {
                    icon: 'cancel',
                    label: 'Reduce to one action without icon',
                    handler: this.makeActionsSingle2,
                },
                {
                    icon: 'confirm',
                    label: 'Reduce to one action with icon',
                    handler: this.makeActionsSingle1,
                },
            ],
        });
    }

    handleScrollTo(ref) {
        this.props.scrollElementIntoView(this[ref], {topOffset: 5});
    }

    render() {
        const scrollTestCases = _.map([1, 2, 3], idx => ({
            label: `Scroll to dummy card ${idx}`,
            handleRef: `testDummy${idx}`,
        }));

        const scrollHandlerButtons = scrollTestCases.map(testobject => (
            <Button
                raised
                key={testobject.handleRef}
                onClick={() => {
                    this.handleScrollTo(testobject.handleRef);
                }}>
                {testobject.label}
            </Button>
        ));

        return (
            <div>
                {/* dummy cards to test scrolling */}
                {_.map([1, 2, 3], idx => (
                    <Card
                        className="uitest-divmargin"
                        key={idx}
                        ref={id => {
                            this[`testDummy${idx}`] = id;
                        }}>
                        <CardContent>
                            <div className="uitest-scrolling__cardcontent">
                                A test Dummy for card {idx}
                            </div>
                        </CardContent>
                    </Card>
                ))}
                <Card fixedActions>
                    <CardTitle documentLevel="h4">
                        Test scrolling support
                    </CardTitle>
                    <CardContent className="uitest-highred">
                        <p>
                            Content is higher than the viewport. Can you see the
                            top part of this section?
                        </p>
                    </CardContent>
                    <CardActions fixed>
                        {scrollHandlerButtons}
                        <FloatingActionList
                            iconName="edit"
                            actions={this.state.actionsList}
                        />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default ScrollingHOC(TestScrolling);
