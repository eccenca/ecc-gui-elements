import React, { Component } from 'react';
import Alert from './Alert';
import PropTypes from 'prop-types';


class Info extends Component {
    displayName: 'Info';

    // define property types
   static propTypes = {
        children: PropTypes.node.isRequired,
    };

    // template rendering
    render() {
        const {children, ...otherProps} = this.props;

        return (
            <Alert type="info" {...otherProps}>
                {children}
            </Alert>
        );
    }
}

export default Info;
