import React from 'react';
import MaterialMixin from '../mixins/MaterialMixin';
import Alert from './Alert';
import _ from 'lodash';


const Info = React.createClass({
    mixins: [MaterialMixin],

    // define property types
    propTypes: {
        children: React.PropTypes.node.isRequired,
    },
    shouldComponentUpdate(nextProps, nextState) {
        return !_.isEqual(this.props, nextState);
    },

    // template rendering
    render() {
        const {children, ...otherProps} = this.props;

        return (
            <Alert type="info" {...otherProps}>
                {children}
            </Alert>
        );

    },
});

export default Info;
