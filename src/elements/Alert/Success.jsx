import React, { Component } from 'react';
import Alert from './Alert';
import PropTypes from 'prop-types';

class  Success extends Component{
    displayName: 'Success';

    // define property types
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    // template rendering
    render() {
        const {children, ...otherProps} = this.props;

        return (
            <Alert type="success" {...otherProps}>
                {children}
            </Alert>
        );
    }
}

export default Success;
