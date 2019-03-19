import React from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';

const Success = props => {
    const { children, ...otherProps } = props;

    return (
        <Alert type="success" {...otherProps}>
            {children}
        </Alert>
    );
};

Success.propTypes = {
    children: PropTypes.node.isRequired,
};
Success.displayName = 'Success';

export default Success;
