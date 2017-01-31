import React from 'react';
import Button from './Button';

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

export default DisruptiveButton;
