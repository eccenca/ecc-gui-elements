import React from 'react';
import rxmq from 'ecc-messagebus';
import {
    Card,
    CardTitle,
    CardContent,
    AffirmativeButton,
    DismissiveButton,
    DisruptiveButton,
    ProgressButton,
    Progressbar,
} from '../../index';

const progressTestChannel = rxmq.channel('ui-test.progresstest');

class TestProgressbar extends React.Component{
    constructor(props) {
        super(props);
        this.updateProgress = this.updateProgress.bind(this);
    }
    progress: 0;

    componentDidMount() {
        window.setTimeout(this.updateProgress, 5000);
    }

    updateProgress() {
        this.progress = this.progress + 5;
        if (this.progress < 101) {
            progressTestChannel.subject('number').onNext({
                progressNumber: this.progress,
            });
            progressTestChannel.subject('numberAndDate').onNext({
                progressNumber: this.progress,
                lastUpdate: 'Last update 13:37.',
            });
            window.setTimeout(this.updateProgress, 1000);
        }
    }

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
                    <ProgressButton
                        progress={66}
                        tooltip="working"
                        progressTopic={progressTestChannel.subject('number')}>
                        Run 3
                    </ProgressButton>
                </CardContent>
                <CardContent>
                    <AffirmativeButton
                        progressTopic={progressTestChannel.subject('number')}>
                        Affirm
                    </AffirmativeButton>
                    <DismissiveButton
                        progress={4}
                        progressTopic={progressTestChannel.subject('number')}>
                        Dismiss
                    </DismissiveButton>
                    <DisruptiveButton progress={66}>Disrupt</DisruptiveButton>
                    <DismissiveButton
                        progressTopic={progressTestChannel.subject('number')}
                        tooltip="Last update 13:27. Working">
                        other tooltip
                    </DismissiveButton>
                    <DismissiveButton
                        progressTopic={progressTestChannel.subject(
                            'numberAndDate'
                        )}
                        tooltip="Working">
                        tooltip with lastUpdate
                    </DismissiveButton>
                </CardContent>
                <Progressbar appearLocal progress={15} />
            </Card>
        );
    }
}

export default TestProgressbar;
