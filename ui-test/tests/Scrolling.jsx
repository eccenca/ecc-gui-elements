import React from 'react';
import {
    Button,
    Card,
    CardTitle,
    CardContent,
} from '../../index.js';
import ScrollingMixin from '../../src/mixins/ScrollingMixin';

const TestScrolling = React.createClass({
    mixins: [ScrollingMixin],
    componentDidMount() {
        this.scrollIntoView();
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
            <Card>
                <CardTitle documentLevel="h4">
                    Test scrolling support
                </CardTitle>
                <CardContent>
                    {scrollHandlerButtons}
                </CardContent>
            </Card>
        );
    }
});

export default TestScrolling;
