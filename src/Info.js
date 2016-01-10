import React from 'react';
import MaterialMixin from './MaterialMixin';
import Alert from './Alert';

const Info = React.createClass({
    mixins: [MaterialMixin],

    // define property types
    propTypes: {
        children: React.PropTypes.node.isRequired,
    },

    // template rendering
    render() {
        const {children, ...otherProps} = this.props;

        return (
            <Alert type="info" {...otherProps}>
                {this.props.children}
            </Alert>
        );

    },
});

export default Info;
