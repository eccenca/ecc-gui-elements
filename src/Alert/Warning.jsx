import React from 'react';
import MaterialMixin from '../mixins/MaterialMixin';
import Alert from './Alert';
import PerformanceMixin from '../mixins/PerformanceMixin';


const Warning = React.createClass({
    mixins: [MaterialMixin, PerformanceMixin],

    // define property types
    propTypes: {
        children: React.PropTypes.node.isRequired,
    },

    // template rendering
    render() {
        const {children, ...otherProps} = this.props;

        return (
            <Alert type="warning" {...otherProps}>
                {children}
            </Alert>
        );

    },
});

export default Warning;
