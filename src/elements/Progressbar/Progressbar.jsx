import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactMDLProgressBar from 'react-mdl/lib/ProgressBar';

const Progressbar = props => {
    const {
        className,
        appearGlobal,
        appearLocal,
        ...otherProps
    } = props;
    const classes = classNames(
        {
            'mdl-progress--global': appearGlobal === true,
            'mdl-progress--local': appearLocal === true,
        },
        className
    );
    return <ReactMDLProgressBar className={classes} {...otherProps} />;
};
// define property types
Progressbar.propTypes = {
    appearGlobal: PropTypes.bool,
    appearLocal: PropTypes.bool,
    className: PropTypes.string,
};
Progressbar.defaultProps = {
    appearGlobal: false,
    appearLocal: false,
};
Progressbar.displayName = 'Progressbar';
export default Progressbar;
