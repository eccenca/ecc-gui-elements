import React from 'react';
import ReactMDLRadio from 'react-mdl/lib/Radio';

const Radio = (props) => {
    const {
        children,
        label,
        ripple,
        ...otherProps
    } = props;

    let radio_label = false;

    if (label && !children) {
        radio_label = label;
    }

    if (!label && children) {
        radio_label = children
    }

    if (label && children) {
        radio_label = <div title={label}>{children}</div>
    }

    if (__DEBUG__ && radio_label === false) {
        console.warn('Add label property or children content to <Radio /> element.');
    }

    return (
        <ReactMDLRadio
            ripple={ripple ? ripple : false}
            {...otherProps}
        >
            {radio_label ? radio_label : <span>&nbsp;</span>}
        </ReactMDLRadio>
    );
};


export default Radio;
