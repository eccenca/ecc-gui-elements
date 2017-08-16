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
    },

    getDefaultProps() {
        return {
            shadow: 1,
            stretch: true,
        };
    },

    render() {

        const {
            className,
            stretch,
            shadow,
            children,
            ...otherProps
        } = this.props;

        const classes = classNames(
            {
                'mdl-card--stretch': (stretch === true)
            },
            className
        );

        return <ReactMDLCard
            className={classes}
            shadow={(shadow > 0) ? (shadow - 1) : undefined}
            {...otherProps}
        >
            {children}
        </ReactMDLCard>;
    },
});

export default Card;
