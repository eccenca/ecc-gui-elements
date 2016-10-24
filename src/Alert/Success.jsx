import React from 'react';
import MaterialMixin from '../mixins/MaterialMixin';
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
                {children}
            </Alert>
        );

    },
});

export default Success;