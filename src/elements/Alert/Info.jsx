import React from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';


const Info = props => {
    const { children, ...otherProps } = props;

    return (
        <Alert type="info" {...otherProps}>
            {children}
        </Alert>
    );
};

Info.propTypes = {
    children: PropTypes.node.isRequired,
};

Info.displayName = 'Info';

export default Info;
