// react
import React from 'react';
import PropTypes from 'prop-types';

const Version = props => {
    return (
        <span
            className="version-info"
            style={{ marginLeft: '5px', marginRight: '5px' }}
        >
            {props.version}
        </span>
    );
};
Version.propTypes = {
    version: PropTypes.string.isRequired,
};

Version.displayName = 'Version';

export default Version;
