import React from 'react';
import {
    Card,
    CardTitle,
    CardContent,
    Progressbar,
} from '../../index.js';

class TestProgressbar extends React.PureComponent {
    render() {
        return (
            <Card stretch={false} shadow={4}>
                <CardTitle documentLevel={'h4'}>
                    Test Progressbars
                </CardTitle>
                <CardContent>
                    <Progressbar progress={85}/>
                    <Progressbar appearGlobal={true} indeterminate={true}/>
                </CardContent>
                <Progressbar appearLocal={true} progress={15}/>
            </Card>
        );
    }
}
;

export default TestProgressbar;
