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
        multiline = false,
        onChange,
        stretch = true,
        value = '',
        ...otherProps
    } = props;

    /*
    TODO: improve multiline support with auto height

    calculate rows depending on value and max-rows but we
    need react state for it, so we need TextField to be a
    React class.
    */

    const classes = classNames(
        className,
        {
            'mdl-textfield--full-width': (stretch === true),
        },
    );

    return (
        <ReactMDLTextField
            className={classes}
            floatingLabel={true}
            value={value}
            label={label}
            onChange={extendedOnChange.bind(null, onChange)}
            rows={(multiline === true) ? 3 : 0}
            {...otherProps}
        />
    );
};

export default uniqueId(TextField, {prefix: 'textField', targetProp: 'id'});
