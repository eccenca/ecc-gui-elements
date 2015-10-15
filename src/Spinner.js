import React from 'react';
import {MaterialMixin} from 'ecc-mixins';
import ReactMDLSpinner from 'react-mdl/lib/Spinner';

const Spinner = React.createClass({
    mixins: [MaterialMixin],

    // define property types
    propTypes: {
        className: React.PropTypes.string,
    },

    // template rendering
    render() {
        const {className, ...otherProps} = this.props;
        return <ReactMDLSpinner singleColor={true} className={className} {...otherProps} />;
    },
});

export default Spinner;
