import React from 'react';
import mdlUpgrade from 'react-mdl/lib/utils/mdlUpgrade';
import Alert from './Alert';

const Warning = React.createClass({
    // define property types
    propTypes: {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]).isRequired,
    },

    // template rendering
    render() {
        const {...otherProps} = this.props;

        return (
            <Alert type="warning" {...otherProps}>
                {this.props.children}
            </Alert>
        );

    },
});

export default mdlUpgrade(Warning);

