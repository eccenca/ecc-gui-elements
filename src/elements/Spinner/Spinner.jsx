import React, { Component } from 'react';
import classNames from 'classnames';
import ReactMDLSpinner from 'react-mdl/lib/Spinner';
import PropTypes from 'prop-types';

class Spinner extends Component{
    displayName: 'Spinner';

    // define property types
    static propTypes = {
        appearGlobal: PropTypes.bool,
        appearInline: PropTypes.bool,
        appearLocal: PropTypes.bool,
        className: PropTypes.string,
    };
    static defaultProps = {
            appearGlobal: true,
            appearInline: false,
            appearLocal: false,
    };

    // template rendering
    render() {
        const {
            className,
            appearGlobal,
            appearInline,
            appearLocal,
            ...otherProps
        } = this.props;
        const classes = classNames(
            {
                'mdl-spinner--global':
                    appearGlobal === true &&
                    appearInline === false &&
                    appearLocal === false,
                'mdl-spinner--inline': appearInline === true,
                'mdl-spinner--local': appearLocal === true,
            },
            className
        );
        return (
            <ReactMDLSpinner singleColor className={classes} {...otherProps} />
        );
    }
}

export default Spinner;
