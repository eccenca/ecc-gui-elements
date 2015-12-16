import React from 'react';
import {MaterialMixin} from 'ecc-mixins';
import Alert from './Alert';

const Warning = React.createClass({
    mixins: [MaterialMixin],

    // define property types
    propTypes: {
        children: React.PropTypes.node.isRequired,
    },

    // template rendering
    render() {
        const {children, ...otherProps} = this.props;

        return (
            <Alert type="warning" {...otherProps}>
                {this.props.children}
            </Alert>
        );

    },
});

export default Warning;
