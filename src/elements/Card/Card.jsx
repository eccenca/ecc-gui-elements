import React, { Component } from 'react';
import classNames from 'classnames';
import ReactMDLCard from 'react-mdl/lib/Card/Card';
import PropTypes from 'prop-types';

class Card extends Component{
    displayName: 'Card';

    // define property types
    static propTypes = {
        className: PropTypes.string,
        shadow: PropTypes.number,
        stretch: PropTypes.bool,
        fixedActions: PropTypes.bool,
        reducedSize: PropTypes.bool,
    };

    static defaultProps = {
            shadow: 1,
            stretch: true,
            fixedActions: false,
            reducedSize: false,

    };
    render() {
        const {
            className,
            stretch,
            shadow,
            fixedActions,
            reducedSize,
            children,
            ...otherProps
        } = this.props;

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
    }
}

export default Card;
