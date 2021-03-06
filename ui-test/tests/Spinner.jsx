import React from 'react';
import {
    Card, CardTitle, CardContent, Spinner,
} from '../../index';


const TestSpinner = () => {
    return (
        <Card
            className="my-own-class"
            shadow={0}
            stretch={false}
            reducedSize
        >
            <CardTitle
                className="my-own-class"
                border={false}
                documentLevel="h7"
            >
                Test Spinner
            </CardTitle>
            <CardContent className="my-own-class">
                <Spinner appearInline />
                <Spinner appearLocal />
            </CardContent>
            <Spinner />
        </Card>
    );
};

export default TestSpinner;
