import React from 'react';
import Button from './Button';
import ProgressButton from './ProgressButton';

const DismissiveButton = React.createClass({
    // template rendering
    render() {
        // split 'normal' props from button content
        const {children, ...otherProps} = this.props;

        if (__DEBUG__ && (typeof otherProps.accent !== 'undefined')) {
            console.warn('Do not use <DismissiveButton/>  with accent property.'); // eslint-disable-line no-console
        }

        if (__DEBUG__ && (typeof otherProps.colored !== 'undefined')) {
            console.warn('Do not use <DismissiveButton/>  with colored property.'); // eslint-disable-line no-console
        }

        if (__DEBUG__ && (typeof otherProps.affirmative !== 'undefined')) {
            console.warn('Do not use <DismissiveButton/>  with affirmative property.'); // eslint-disable-line no-console
        }

        if (__DEBUG__ && (typeof otherProps.disruptive !== 'undefined')) {
            console.warn('Do not use <DismissiveButton/>  with disruptive property.'); // eslint-disable-line no-console
        }

        // render button
        return (
            typeof otherProps.progress !== 'undefined' ||
            typeof otherProps.progressTopic !== 'undefined'
        ) ? (
            <ProgressButton
                {...otherProps}
                dismissive = {true}
            >
                {children}
            </ProgressButton>
        ) : (
            <Button
                {...otherProps}
                dismissive = {true}
            >
                {children}
            </Button>
        );
    },
});

export default DismissiveButton;
