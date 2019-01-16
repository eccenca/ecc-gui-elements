import React from 'react';
import {Card, CardTitle, CardContent, Nothing} from '../../index';

function TestNothing() {
    return (
        <Card>
            <CardTitle>Test Nothing</CardTitle>
            <CardContent>
                <Nothing key="nothing" />
            </CardContent>
        </Card>
    );
}
export default TestNothing;
