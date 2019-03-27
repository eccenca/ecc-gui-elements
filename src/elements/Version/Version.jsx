// react
import React from 'react';
import PropTypes from 'prop-types';

const Version = props => {
    const { version } = props;
    return (
        <span>
            {version}
        </span>
    );
};
Version.propTypes = {
    version: PropTypes.string.isRequired,
};

Version.displayName = 'Version';

export default Version;
