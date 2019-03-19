import React, { Component } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip/Tooltip';
import Button from './Button';
import Progressbar from '../Progressbar/Progressbar';

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
                lastUpdate={'August 31st 2017, 9:48:24 am.'}
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

You can use `progress` option directly on `<AffirmativeButton/>`, `<DismissiveButton/>` and `<DisruptiveButton/>` elements.

*/
const ProgressButton = props => {
    const {
        children, className, tooltip, progress, lastUpdate, ...otherProps
    } = props;
    // template rendering

    const classes = classNames('mdl-progress mdl-js-progress', className);

    let progressbar = (
        <Progressbar
            appearLocal
            indeterminate={!progress}
            progress={progress || 0}
        />
    );

    if (typeof tooltip !== 'undefined' && tooltip) {
        const lastUpdate = lastUpdate
            ? `${lastUpdate} `
            : '';
        progressbar = (
            <Tooltip
                label={
                    progress
                        ? `${lastUpdate}${tooltip}: ${progress}%`
                        : lastUpdate + tooltip
                }
            >
                {progressbar}
            </Tooltip>
        );
    }

    // render button
    return (
        <Button className={classes} raised disabled {...otherProps}>
            {children}
            {progressbar}
        </Button>
    );
};

ProgressButton.propTypes = {
    /**
     integer (default: 0): progress number 0..100, if not set or 0 then an infinite progress bar is used
     */
    progress: PropTypes.number,
    /**
     message queue subject (optional): channel subject that are used to update information about progress,
     if given that the button element listens to it for update objects that include `progressNumber` property with a value between 0 and 100
     */
    tooltip: PropTypes.string,
    /**
     string (optional): text info that shows information about the last known update on the process
     */
    lastUpdate: PropTypes.string,
};

ProgressButton.displayName = 'ProgressButton';

export default ProgressButton;
