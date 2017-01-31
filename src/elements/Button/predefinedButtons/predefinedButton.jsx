import React from 'react';
import Button from '../Button';


const AffirmativeButton = React.createClass({
    // template rendering
    render() {
        // split 'normal' props from button content
        const {children, ...otherProps} = this.props;
        const semanticConfig = {};
        // define special params
        semanticConfig.accent = true;
        semanticConfig.colored = false;
        // render button
        return (
            <Button {...otherProps} {...semanticConfig}>
                {children}
            </Button>
        );
    },
});

const DismissiveButton = React.createClass({
    // template rendering
    render() {
        // split 'normal' props from button content
        const {children, ...otherProps} = this.props;
        const semanticConfig = {};
        // define special params
        semanticConfig.accent = false;
        semanticConfig.colored = false;
        // render button
        return (
            <Button {...otherProps} {...semanticConfig}>
                {children}
            </Button>
        );
    },
});

const DisruptiveButton = React.createClass({
    // template rendering
    render() {
        // split 'normal' props from button content
        const {children, ...otherProps} = this.props;
        const semanticConfig = {};
        // define special params
        semanticConfig.accent = true;
        semanticConfig.colored = false;
        // render button
        return (
            <Button {...otherProps} {...semanticConfig}>
                {children}
            </Button>
        );
    },
});

export {AffirmativeButton, DismissiveButton, DisruptiveButton};

