import React from 'react';
import {
    Button,
    Card,
    CardTitle,
    CardContent,
    CardActions,
    FloatingActionList
} from '../../index.js';
import ScrollingMixin from '../../src/mixins/ScrollingMixin';

const TestScrolling = React.createClass({
    mixins: [ScrollingMixin],
    componentDidMount() {
        this.scrollIntoView({
            topOffset: 10,
        });
    },
    getInitialState() {
        return {
            actionsList: [
                {
                    icon: 'confirm',
                    label: 'Reduce to one action with icon',
                    handler: this.makeActionsSingle1
                },
                {
                    icon: 'cancel',
                    label: 'Reduce to one action without icon',
                    handler: this.makeActionsSingle2
                },
            ],
        };
    },
    makeActionsSingle1() {
        this.setState(
            {
                actionsList: [
                    {
                        icon: 'add',
                        label: 'Add multiple action list',
                        handler: this.makeActionsMultiple
                    },
                ],
            }
        );
    },
    makeActionsSingle2() {
        this.setState(
            {
                actionsList: [
                    {
                        label: 'Add multiple action list',
                        handler: this.makeActionsMultiple
                    },
                ],
            }
        );
    },
    makeActionsMultiple() {
        this.setState(
            {
                actionsList: [
                    {
                        icon: 'confirm',
                        label: 'Reduce to one action with icon',
                        handler: this.makeActionsSingle1
                    },
                    {
                        icon: 'cancel',
                        label: 'Reduce to one action without icon',
                        handler: this.makeActionsSingle2
                    },
                ],
            }
        );
    },
    render() {

        const scrollHandlerButtons = this.props.scrollTestCases.map(
            function(testobject) {
                return (
                    <Button
                        raised
                        onClick={function(){testobject.handleScroll(testobject.handleRef);}}
                    >
                        {testobject.label}
                    </Button>
                );
            }
        )

        return (
            <Card fixedActions>
                <CardTitle documentLevel="h4">
                    Test scrolling support
                </CardTitle>
                <CardContent
                    className="uitest-highred"
                >
                    <p>
                        Content is higher than the viewport. Can you see the top part of this section?
                    </p>
                </CardContent>
                <CardActions fixed>
                    {scrollHandlerButtons}
                    <FloatingActionList
                        iconName={'edit'}
                        actions={this.state.actionsList}
                    />
                </CardActions>
            </Card>
        );
    }
});

export default TestScrolling;
