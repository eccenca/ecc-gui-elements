import React from 'react';
import {MaterialMixin} from 'ecc-mixins';
import Alert from './Alert';

const Success = React.createClass({
    mixins: [MaterialMixin],

    // define property types
    propTypes: {
        children: React.PropTypes.node.isRequired,
    },

    // template rendering
    render() {
        const {children, ...otherProps} = this.props;

        return (
            <Alert type="success" {...otherProps}>
                {this.props.children}
            </Alert>
        );

    },
});

export default Success;
