import React, { Component } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import Tooltip from '../Tooltip/Tooltip';
import Button from './Button';
import Progressbar from '../Progressbar/Progressbar';
import PropTypes from 'prop-types';

/**
`<ProgressButton/>` is a special version of the `<Button/>` element that can be used to visualize a running process.
It is shown as a raised disabled button but this behaviour can be overwritten, using the `raised` and `disabled` paramters from the `<Button/>` element.

```js
import {ProgressButton} from '@eccenca/gui-elements';
import rxmq from 'ecc-messagebus';

// channel event which updates progressTopic
rxmq.channel('yourchannel').subject('progressNumber').onNext({
    progress: 30, // integer, progress in percentage
    lastUpdate: 'August 31st 2017, 9:48:24 am.', // string which should be a date, require tooltip to be set
});

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <ProgressButton
                progress={50}
                progressTopic={rxmq.channel('yourchannel').subject('progressNumber')}
                tooltip={'running'}
                raised={false}
            >
                Working!
            </ProgressButton>
        )
    },
    // ....
});
```

You can use `progress` and `progressTopic` options directly on `<AffirmativeButton/>`, `<DismissiveButton/>` and `<DisruptiveButton/>` elements.

*/
class ProgressButton extends Component{
    displayName: 'ProgressButton';

    // define property types
    static propTypes = {
        /**
            integer (default: 0): progress number 0..100, if not set or 0 then an infinite progress bar is used
        */
        progress: PropTypes.number,
        /**
            message queue subject (optional): channel subject that are used to update information about progress,
            if given that the button element listens to it for update objects that include `progressNumber` property with a value between 0 and 100
        */
        progressTopic: PropTypes.object,
        /**
            string (optional): tooltip for progress bar
            if a progress number is known (via option or message queue) then the tooltip is extenden by a colon, the value and a percent char
        */
        tooltip: PropTypes.string,
        /**
            string (optional): text info that shows information about the last known update on the process
        */
        lastUpdate: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            progress: _.get(this.props, 'progress', 0),
            lastUpdate: _.get(this.props, 'lastUpdate', false),
        };
        this.handleProgressUpdates = this.handleProgressUpdates.bind(this);
    }

    componentDidMount() {
        if (_.has(this.props, 'progressTopic')) {
            const topic = _.get(this.props, 'progressTopic');
            if (_.isFunction(topic.subscribe)) {
                this.subscription = topic.subscribe(this.handleProgressUpdates);
            }
        }
    }

    componentWillUnmount() {
        if (_.has(this, 'subscription')) {
            this.subscription.unsubscribe();
        }
    }

    handleProgressUpdates({progressNumber, lastUpdate = false}) {
        if (_.isNumber(progressNumber)) {
            this.setState({
                progress: progressNumber,
                lastUpdate,
            });
        }
    }

    // template rendering
    render() {
        // split 'normal' props from button content
        const {children, className, tooltip, ...otherProps} = this.props;
        delete otherProps.progress;
        delete otherProps.progressTopic;

        const classes = classNames('mdl-progress mdl-js-progress', className);

        let progressbar = (
            <Progressbar
                appearLocal
                indeterminate={!this.state.progress}
                progress={this.state.progress ? this.state.progress : 0}
            />
        );

        if (typeof tooltip !== 'undefined' && tooltip) {
            const lastUpdate = this.state.lastUpdate
                ? `${this.state.lastUpdate} `
                : '';
            progressbar = (
                <Tooltip
                    label={
                        this.state.progress
                            ? `${lastUpdate}${tooltip}: ${this.state.progress}%`
                            : lastUpdate + tooltip
                    }>
                    {progressbar}
                </Tooltip>
            );
        }

        // render button
        return (
            <Button raised disabled {...otherProps}>
                {children}
                {progressbar}
            </Button>
        );
    }
}

export default ProgressButton;
