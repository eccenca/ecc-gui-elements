import React, { Component } from 'react';
import Alert from './Alert';
import PropTypes from 'prop-types';

class Error extends Component {
    displayName: 'Error';

    // define property types
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    // template rendering
    render() {
        const {children, ...otherProps} = this.props;

        return (
            <Alert type="error" {...otherProps}>
                {children}
            </Alert>
        );
    }
}
export default Error;
