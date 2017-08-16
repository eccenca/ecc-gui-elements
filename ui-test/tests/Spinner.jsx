import React from 'react';
import {
    Card,
    CardTitle,
    CardContent,
    Spinner,
} from '../../index.js';

class TestSpinner extends React.PureComponent {
    render() {
        return (
            <Card className="my-own-class" shadow={0} stretch={false}>
                <CardTitle className="my-own-class" border={false} documentLevel={7}>
                    Test Spinner
                </CardTitle>
                <CardContent className="my-own-class">
                    <Spinner appearInline={true}/>
                    <Spinner appearLocal={true}/>
                </CardContent>
                <Spinner />
            </Card>
        );
    }
}
;

export default TestSpinner;
