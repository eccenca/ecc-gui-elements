import React from 'react';
import ReactMDLCheckbox from 'react-mdl/lib/Checkbox';
import classNames from 'classnames';
import extendedOnChangeBoolean from '../../utils/extendedOnChangeBoolean';

/**
```js
import { Checkbox } from '@eccenca/gui-elements';
const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Checkbox
                checked={true} // Boolean (required), describes the checked state of Checkbox, default: false
                className="my-checkbox-class" // String (optional), additional CSS class names
                disabled={true} // Boolean (optional), describes if Checkbox is disabled, default: false
                hideLabel{true} // Boolean (optional), describes if Checkbox label is not visible, default: false
                label={"My checkbox label"} // String (optional), label that describes the input checkbox for the user
                onChange={this.myCheckboxHandlerMethod} // function (required), update handler for changes on Checkbox
                ripple={true} // Boolean (optional), MDL ripple effect is used on Checkbox, default: false
            />
            <Checkbox>
                <div className="my-checkbox-label"><p>Use child elements instead of a label property.</p></div>
            </Checkbox>
        )
    },
    // ....
});
```
*/
const Checkbox = props => {
    const {
        label,
        children,
        className,
        hideLabel,
        ripple,
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
    /**
     describes the checked state of Checkbox
     */
    checked: React.PropTypes.bool.isRequired,
    /**
     additional CSS class names
     */
    className: React.PropTypes.string,
    /**
     describes if Checkbox is disabled
     */
    disabled: React.PropTypes.bool,
    /**
     describes if Checkbox label is not visible
     */
    hideLabel: React.PropTypes.bool,
    /**
     label that describes the input checkbox for the user
     */
    label: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.element,
    ]),
    /**
     update handler for changes on Checkbox
     */
    onChange: React.PropTypes.func.isRequired,
    /**
     MDL ripple effect is used on Checkbox
     */
    ripple: React.PropTypes.bool,
};

Checkbox.defaultProps = {
    className: null,
    disabled: false,
    hideLabel: false,
    label: null,
    ripple: false,
};

Checkbox.displayName = 'Checkbox input';

export default Checkbox;
