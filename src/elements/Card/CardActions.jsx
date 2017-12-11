import React from 'react';
import classNames from 'classnames';
import ReactMDLCardActions from 'react-mdl/lib/Card/CardActions';
import PerformanceMixin from '../../mixins/PerformanceMixin';

const CardActions = React.createClass({
    mixins: [PerformanceMixin],

    // define property types
    propTypes: {
        border: React.PropTypes.bool,
        fixed: React.PropTypes.bool,
    },

    getDefaultProps() {
        return {
            border: true,
            fixed: false,
        };
    },

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
    },
});

export default CardActions;
