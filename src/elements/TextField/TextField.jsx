import React from 'react';
import classNames from 'classnames';
import ReactMDLTextField from 'react-mdl/lib/Textfield';
import _ from 'lodash';
import uniqueId from './../../utils/uniqueId';

const extendedOnChange = (onChangeFn, event) => {
    if (_.isFunction(onChangeFn)) {
        onChangeFn({
            event,
            value: event.target.value,
            rawValue: event.target.value,
        });
    }
};

const TextField = (props) => {
    const {
        className,
        label = '',
        onChange,
        stretch = true,
        value = '',
        ...otherProps
    } = props;

    const classes = classNames(
        className,
        {
            'mdl-textfield--full-width': (stretch === true),
        },
    );

    return <ReactMDLTextField
        className={classes}
        floatingLabel={true}
        value={value}
        label={label}
        onChange={extendedOnChange.bind(null, onChange)}
        {...otherProps}
    />;
};

export default uniqueId(TextField, {prefix: 'textField', targetProp: 'id'});
