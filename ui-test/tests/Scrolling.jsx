import React from 'react';
import {
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
        return (
            <Card>
                <CardTitle documentLevel="h4">
                    Test scrolling support
                </CardTitle>
                <CardContent>
                </CardContent>
            </Card>
        );
    }
});

export default TestScrolling;
