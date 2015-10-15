import React from 'react';
import {MaterialMixin} from 'ecc-mixins';
import Alert from './Alert';

const Warning = React.createClass({
    mixins: [MaterialMixin],

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

export default Warning;
