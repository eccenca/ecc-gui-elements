import React from 'react';
import classNames from 'classnames';
import ReactMDLCard from 'react-mdl/lib/Card/Card';
import PerformanceMixin from '../../mixins/PerformanceMixin';

const Card = React.createClass({
    mixins: [PerformanceMixin],

    // define property types
    propTypes: {
        className: React.PropTypes.string,
        shadow: React.PropTypes.number,
        stretch: React.PropTypes.bool,
        fixedActions: React.PropTypes.bool,
    },

    getDefaultProps() {
        return {
            shadow: 1,
            stretch: true,
            fixedActions: false,
        };
    },

    render() {
        const {
            className,
            stretch,
            shadow,
            fixedActions,
            children,
            ...otherProps
        } = this.props;

        const classes = classNames(
            {
                'mdl-card--stretch': stretch === true,
                'mdl-card--has-fixed-actions': fixedActions === true,
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
    },
});

export default Card;
