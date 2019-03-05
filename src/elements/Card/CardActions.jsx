import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactMDLCardActions from 'react-mdl/lib/Card/CardActions';


const CardActions = props => {

    const {children, className, fixed, ...otherProps} = props;

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
    )

};

// define property types
CardActions.propTypes = {
    border: PropTypes.bool,
    fixed: PropTypes.bool,
};

CardActions.defaultProps = {
    border: true,
    fixed: false,
};

CardActions.displayName = 'CardActions';

export default CardActions;
