import _ from 'lodash';
import React from 'react';
import ReactMDLRadioGroup from 'react-mdl/lib/RadioGroup';

const extendedOnChange = (onChangeFn, event) => {
    if (_.isFunction(onChangeFn)) {
        onChangeFn({
            event,
            value: event.target.value,
            rawValue: event.target.value,
        });
    }
};

const RadioGroup = (props) => {
    const {
        onChange,
        ...otherProps
    } = props;
    return (
        <ReactMDLRadioGroup
            onChange={extendedOnChange.bind(null, onChange)}
            {...otherProps}
        />
    );
};


export default RadioGroup;
