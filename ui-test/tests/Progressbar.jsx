import React from 'react';
import {
    Card,
    CardTitle,
    CardContent,
    ProgressButton,
    Progressbar,
} from '../../index';


class TestProgressbar extends React.Component{
    progress: 0;

    render() {
        return (
            <Card stretch={false} shadow={4}>
                <CardTitle documentLevel="h4">Test Progressbars</CardTitle>
                <CardContent>
                    <Progressbar progress={85} />
                    <Progressbar appearGlobal indeterminate />
                    <CardContent />
                    <ProgressButton
                        raised
                        disabled={false}
                        tooltip="some more info about the running progress">
                        Run
                    </ProgressButton>
                    <ProgressButton
                        disruptive
                        disabled={false}
                        tooltip="working"
                        progress={0}>
                        Run 2
                    </ProgressButton>
                </CardContent>
                <Progressbar appearLocal progress={15} />
            </Card>
        );
    }
}

export default TestProgressbar;
