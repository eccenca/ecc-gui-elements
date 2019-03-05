import React from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';

const Error = props => {
    const {children, ...otherProps} = props;

    return (
        <Alert type="error" {...otherProps}>
            {children}
        </Alert>
    );

};

// define property types
Error.propTypes = {
    children: PropTypes.node.isRequired,
};

Error.displayName = 'Error';

export default Error;
