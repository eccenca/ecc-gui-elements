import React from 'react';
import ReactMDLRadio from 'react-mdl/lib/Radio';
import classNames from 'classnames';

const Radio = props => {
    const {
        children,
        label,
        className,
        ripple,
        hideLabel,
        ...otherProps
    } = props;

    let radioLabel = false;

    if (label && !children) {
        radioLabel = label;
    }

    if (!label && children) {
        radioLabel = children;
    }

    if (label && children) {
        radioLabel = <div title={label}>{children}</div>;
    }

    if (__DEBUG__ && radioLabel === false) {
        console.warn(
            'Add label property or children content to <Radio /> element.'
        );
    }

    const classes = classNames(
        {
            'mdl-radio--hiddenlabel': hideLabel === true,
        },
        className
    );

    return (
        <ReactMDLRadio
            ripple={ripple || false}
            className={classes}
            {...otherProps}>
            {radioLabel || <span>&nbsp;</span>}
        </ReactMDLRadio>
    );
};

export default Radio;
