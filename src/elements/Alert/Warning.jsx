import React, { Component } from 'react';
import Alert from './Alert';
import PropTypes from 'prop-types'

class Warning extends Component {
    displayName: 'Warning';

    // define property types
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    // template rendering
    render() {
        const {children, ...otherProps} = this.props;

        return (
            <Alert type="warning" {...otherProps}>
                {children}
            </Alert>
        );
    }
}

export default Warning;
