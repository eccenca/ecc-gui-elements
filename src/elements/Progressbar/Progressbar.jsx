import React, { Component } from 'react';
import classNames from 'classnames';
import ReactMDLProgressBar from 'react-mdl/lib/ProgressBar';
import PropTypes from 'prop-types';

class Progressbar extends Component{
    displayName: 'Progressbar';
    // define property types
    static propTypes = {
        appearGlobal: PropTypes.bool,
        appearLocal: PropTypes.bool,
        className: PropTypes.string,
    };
    static defaultProps = {
            appearGlobal: false,
            appearLocal: false,
    };

    // template rendering
    render() {
        const {
            className,
            appearGlobal,
            appearLocal,
            ...otherProps
        } = this.props;
        const classes = classNames(
            {
                'mdl-progress--global': appearGlobal === true,
                'mdl-progress--local': appearLocal === true,
            },
            className
        );
        return <ReactMDLProgressBar className={classes} {...otherProps} />;
    }
}

export default Progressbar;
