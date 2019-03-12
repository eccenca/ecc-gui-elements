import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactMDLCard from 'react-mdl/lib/Card/Card';
import ScrollingHOC from '../../hocs/ScrollingHOC';


const Card = props => {
    const {
        className,
        stretch,
        shadow,
        fixedActions,
        reducedSize,
        children,
        ...otherProps
    } = props;

    const classes = classNames(
        {
            'mdl-card--stretch': stretch === true,
            'mdl-card--has-fixed-actions': fixedActions === true,
            'mdl-card--reduced': reducedSize === true,
        },
        className
    );

    return (
        <ReactMDLCard
            className={classes}
            shadow={shadow > 0 ? shadow - 1 : undefined}
            {...otherProps}>
            {children}
        </ReactMDLCard>
    );

};
// define property types
Card.propTypes = {
    className: PropTypes.string,
    shadow: PropTypes.number,
    stretch: PropTypes.bool,
    fixedActions: PropTypes.bool,
    reducedSize: PropTypes.bool,
};
Card.defaultProps = {
    shadow: 1,
    stretch: true,
    fixedActions: false,
    reducedSize: false,
};

Card.displayName = 'Card';

export default ScrollingHOC(Card);
