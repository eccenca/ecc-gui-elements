import React, { Component } from 'react';
import classNames from 'classnames';
import ReactMDLCardActions from 'react-mdl/lib/Card/CardActions';
import PropTypes from 'prop-types';

class CardActions extends Component{
    displayName: 'CardActions';

    // define property types
    static propTypes = {
        border: PropTypes.bool,
        fixed: PropTypes.bool,
    };

    static defaultProps = {
            border: true,
            fixed: false,
    };

    render() {
        const {children, className, fixed, ...otherProps} = this.props;

        const classes = classNames(
            {
                'mdl-card__actions--fixed': fixed === true,
            },
            className
        );

        return (
            <ReactMDLCardActions className={classes} {...otherProps}>
                {children}
            </ReactMDLCardActions>
        );
    }
}

export default CardActions;
