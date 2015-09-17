import React from 'react';
import mdlUpgrade from 'react-mdl/lib/utils/mdlUpgrade';
import ReactMDLSpinner from 'react-mdl/lib/Spinner';

const Spinner = React.createClass({
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

export default mdlUpgrade(Spinner);

