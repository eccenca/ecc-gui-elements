import React from 'react';
import ReactMDLCheckbox from 'react-mdl/lib/Checkbox';
import extendedOnChangeBoolean from '../../utils/extendedOnChangeBoolean';

const Checkbox = props => {
    const {
        label,
        children,
        ripple = false,
        checked,
        onChange,
        ...otherProperties
    } = props;

    let checkboxlabel = label || '';
    if (!checkboxlabel && children) {
        checkboxlabel = children;
    }

    return (
        <ReactMDLCheckbox
            checked={!!checked}
            label={checkboxlabel}
            ripple={ripple}
            value="test"
            onChange={extendedOnChangeBoolean.bind(null, onChange)}
            {...otherProperties}
        />
    );
};

Checkbox.propTypes = {
    checked: React.PropTypes.bool.isRequired,
    onChange: React.PropTypes.func.isRequired,
};

export default Checkbox;
