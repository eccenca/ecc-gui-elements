import React from 'react';
import {
    Card,
    CardTitle,
    CardContent,
    ProgressButton,
    Progressbar,
} from '../../index';


class TestProgressbar extends React.Component {
    progress: 0;

    render() {
        return (
            <Card stretch={false} shadow={4}>
                <CardTitle documentLevel="h4">Test Progressbars</CardTitle>
                <CardContent>
                    <h5>Progressbar</h5>
                    <Progressbar progress={85} />
                    <Progressbar appearGlobal indeterminate />
                    <h5>Progressbutton</h5>
                    <ProgressButton
                        raised
                        disabled={false}
                        tooltip="some more info about the running progress"
                    >
                        Run
                    </ProgressButton>
                    <ProgressButton
                        className="testbutton"
                        disruptive
                        disabled={false}
                        tooltip="working"
                        progress={0}
                    >
                        Run 2
                    </ProgressButton>
                </CardContent>
                <Progressbar appearLocal progress={15} />
            </Card>
        );
    }
}

export default TestProgressbar;
