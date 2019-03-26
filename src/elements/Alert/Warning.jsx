import React from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';

const Warning = props => {
    const { children, ...otherProps } = props;

    return (
        <Alert type="warning" {...otherProps}>
            {children}
        </Alert>
    );
};
Warning.propTypes = {
    children: PropTypes.node.isRequired,
};
Warning.displayName = 'Warning';

export default Warning;
