import React from 'react';
import {
    Button,
    Card,
    CardTitle,
    CardContent,
    CardActions,
} from '../../index.js';
import ScrollingMixin from '../../src/mixins/ScrollingMixin';

const TestScrolling = React.createClass({
    mixins: [ScrollingMixin],
    componentDidMount() {
        this.scrollIntoView({
            topOffset: 10,
        });
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
                <CardContent
                    className="uitest-highred"
                >
                    <p>
                        Content is higher than the viewport. Can you see the top part of this section?
                    </p>
                </CardContent>
                <CardActions>
                    {scrollHandlerButtons}
                </CardActions>
            </Card>
        );
    }
});

export default TestScrolling;
