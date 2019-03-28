import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactMDLSpinner from 'react-mdl/lib/Spinner';


const Spinner = props => {
    const {
        className,
        appearGlobal,
        appearInline,
        appearLocal,
        ...otherProps
    } = props;
    const classes = classNames(
        {
            'mdl-spinner--global':
                    appearGlobal === true
                    && appearInline === false
                    && appearLocal === false,
            'mdl-spinner--inline': appearInline === true,
            'mdl-spinner--local': appearLocal === true,
        },
        className
    );
    return (
        <ReactMDLSpinner singleColor className={classes} {...otherProps} />
    );
};
Spinner.displayName = 'Spinner';

// define property types
Spinner.propTypes = {
    appearGlobal: PropTypes.bool,
    appearInline: PropTypes.bool,
    appearLocal: PropTypes.bool,
    className: PropTypes.string,
};
Spinner.defaultProps = {
    appearGlobal: true,
    appearInline: false,
    appearLocal: false,
};

export default Spinner;
