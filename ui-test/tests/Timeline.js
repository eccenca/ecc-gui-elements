import React from 'react';
import {
    Button,
    Timeline,
} from '../../index.js';

const TestTimeline = React.createClass({
    getInitialState() {
        return {
            timelineItems: [
                {
                    id: 'http://example.com/1',
                    className: 'binding1',
                    start: '2013-01-01 09:30',
                    content: 'First'
                },
                {
                    id: 'http://example.com/2',
                    className: 'binding2',
                    start:
                    '2013-01-01 10:00',
                    end: '2013-01-01 10:45',
                    content: 'Second'
                },
                {
                    id: 'http://example.com/3',
                    className: 'binding3',
                    start: '2013-01-01 11:00',
                    content: 'Third'
                },
            ],
        };
    },

    render() {
        return (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Timelines</h4>
                </div>
                <div className="mdl-card__content">
                    <Timeline
                        items={this.state.timelineItems}
                        options={{type: 'point'}}
                        onSelect={items => console.log('Timeline', 'onSelect', items)}
                    />
                    <Button
                        onClick={
                            () => this.setState(
                                {
                                    timelineItems: this.state.timelineItems.concat(
                                        [
                                            {
                                                start: Date.now(),
                                                content: '' + Date.now(),
                                            }
                                        ]
                                    )
                                }
                            )
                        }
                    >
                        Add item to the timeline
                    </Button>
                </div>
            </div>
        );
    }
});

export default TestTimeline;
