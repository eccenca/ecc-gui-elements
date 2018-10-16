import React from 'react';
import ReactMDLCheckbox from 'react-mdl/lib/Checkbox';
import classNames from 'classnames';
import extendedOnChangeBoolean from '../../utils/extendedOnChangeBoolean';

const Checkbox = props => {
    const {
        label,
        children,
        className,
        hideLabel = false,
        ripple = false,
        checked,
        onChange,
        ...otherProperties
    } = props;

    let checkboxlabel = label || '';
    if (!checkboxlabel && children) {
        checkboxlabel = children;
    }

    const classes = classNames(
        {
            'mdl-checkbox--hiddenlabel': hideLabel === true,
        },
        className
    );

    return (
        <ReactMDLCheckbox
            checked={!!checked}
            label={checkboxlabel}
            ripple={ripple}
            value="test"
            onChange={extendedOnChangeBoolean.bind(null, onChange)}
            className={classes}
            {...otherProperties}
        />
    );
};

Checkbox.propTypes = {
    checked: React.PropTypes.bool.isRequired,
    className: React.PropTypes.string,
    hideLabel: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,
};

export default Checkbox;
