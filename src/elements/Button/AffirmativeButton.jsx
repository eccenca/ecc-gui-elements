import React from 'react';
import Button from './Button';
import ProgressButton from './ProgressButton';

const AffirmativeButton = React.createClass({
    // template rendering
    render() {
        // split 'normal' props from button content
        const {children, ...otherProps} = this.props;
        const useProgressButton = (
            typeof otherProps.progress !== 'undefined' ||
            typeof otherProps.progressTopic !== 'undefined'
        );

        // remove unused propTypes from button
        if (!useProgressButton) {
            delete otherProps.progress;
            delete otherProps.progressTopic;
        }

        if (__DEBUG__ && (typeof otherProps.accent !== 'undefined')) {
            console.warn('Do not use <AffirmativeButton/> with accent property.'); // eslint-disable-line no-console
        }

        if (__DEBUG__ && (typeof otherProps.colored !== 'undefined')) {
            console.warn('Do not use <AffirmativeButton/> with colored property.'); // eslint-disable-line no-console
        }

        if (__DEBUG__ && (typeof otherProps.dismissive !== 'undefined')) {
            console.warn('Do not use <AffirmativeButton/> with dismissive property.'); // eslint-disable-line no-console
        }

        if (__DEBUG__ && (typeof otherProps.disruptive !== 'undefined')) {
            console.warn('Do not use <AffirmativeButton/> with disruptive property.'); // eslint-disable-line no-console
        }

        // render button
        return (
            useProgressButton
        ) ? (
            <ProgressButton
                {...otherProps}
                affirmative = {true}
            >
                {children}
            </ProgressButton>
        ) : (
            <Button
                {...otherProps}
                affirmative = {true}
            >
                {children}
            </Button>
        );
    },
});

export default AffirmativeButton;
