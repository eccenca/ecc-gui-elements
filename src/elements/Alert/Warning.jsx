import React from 'react';
import Alert from './Alert';
import PropTypes from 'prop-types'

const Warning = props => {
    const {children, ...otherProps} = props;

    return (
        <Alert type="warning" {...otherProps}>
            {children}
        </Alert>
    );
};
Warning.propTypes = {
    children: PropTypes.node.isRequired,
};
Warning.displayName ='Warning';

export default Warning;
