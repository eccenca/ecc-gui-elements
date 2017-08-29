import React from 'react';
import _ from 'lodash';
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
} from '../../index.js';

const progressTestChannel = rxmq.channel('ui-test.progresstest');

const TestProgressbar = React.createClass({

    progress: 0,

    componentDidMount() {
        window.setTimeout(this.updateProgress, 5000);
    },

    updateProgress() {
        this.progress = this.progress + 5;
        if (this.progress < 101) {
            progressTestChannel.subject('number').onNext({
                progressNumber: this.progress,
            });
            window.setTimeout(this.updateProgress, 1000);
        }
    },

    render() {
        return (
            <Card stretch={false} shadow={4}>
                <CardTitle documentLevel={'h4'}>
                    Test Progressbars
                </CardTitle>
                <CardContent>
                    <Progressbar progress={85}/>
                    <Progressbar appearGlobal={true} indeterminate={true}/>
                <CardContent>
                </CardContent>
                    <ProgressButton
                        raised
                        disabled={false}
                        tooltip="some more info about the running progress"
                    >
                        Run
                    </ProgressButton>
                    <ProgressButton
                        disruptive
                        disabled={false}
                        tooltip="working"
                        progress={0}
                    >
                        Run 2
                    </ProgressButton>
                    <ProgressButton
                        progress={66}
                        tooltip="working"
                        progressTopic={progressTestChannel.subject('number')}
                    >
                        Run 3
                    </ProgressButton>
                </CardContent>
                <CardContent>
                    <AffirmativeButton
                        progressTopic={progressTestChannel.subject('number')}
                    >
                        Affirm
                    </AffirmativeButton>
                    <DismissiveButton
                        progress={4}
                        progressTopic={progressTestChannel.subject('number')}
                    >
                        Dismiss
                    </DismissiveButton>
                    <DisruptiveButton
                        progress={66}
                    >
                        Disrupt
                    </DisruptiveButton>
                </CardContent>
                <Progressbar appearLocal={true} progress={15}/>
            </Card>
        );
    },
});

export default TestProgressbar;
