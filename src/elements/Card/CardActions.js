import React from 'react';
import classNames from 'classnames';
import ReactMDLCardActions from 'react-mdl/lib/Card/CardActions';
import PerformanceMixin from '../../mixins/PerformanceMixin';

const CardActions = React.createClass({
    mixins: [PerformanceMixin],

    // define property types
    propTypes: {
        border: React.PropTypes.bool,
    },

    getDefaultProps() {
        return {
            border: true,
        };
    },

    render() {

        const {
            children,
            ...otherProps
        } = this.props;

        return <ReactMDLCardActions
            {...otherProps}
        >
            {children}
        </ReactMDLCardActions>;
    },
});

export default CardActions;
