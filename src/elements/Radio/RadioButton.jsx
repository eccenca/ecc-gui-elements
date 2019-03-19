import React from 'react';
import PropTypes from 'prop-types';
import ReactMDLRadio from 'react-mdl/lib/Radio';
import classNames from 'classnames';

/**
```js
import { Radio } from '@eccenca/gui-elements';
const Page = React.createClass({
    // template rendering
    render() {
        return (
            <Radio
                checked={true} // Boolean (required), describes the checked state of Radio, default: false
                className="my-radioselect-class" // String (optional), additional CSS class names
                disabled={true} // Boolean (optional), describes if Radio is disabled, default: false
                hideLabel{true} // Boolean (optional), describes if Radio label is not visible, default: false
                name="optionname" // String (required), name of input that Radio select is related to
                label={"My radio label"} // String (optional), label that describes the Radio select for the user
                onChange={this.myRadioSelectHandlerMethod} // function (required), update handler for changes on Radio select element
                ripple={true} // Boolean (optional), MDL ripple effect is used on Radio element, default: false
                value={1} // String or Number (required), value for input when Radio is selected
            />
            <Radio>
                <div className="my-radioselect-label"><p>Use child elements instead of a label property.</p></div>
            </Radio>
        )
    },
    // ....
});
```
*/
const Radio = props => {
    const {
        children, label, className, hideLabel, ...otherProps
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
        <ReactMDLRadio className={classes} {...otherProps}>
            {radioLabel || <span>&nbsp;</span>}
        </ReactMDLRadio>
    );
};

Radio.propTypes = {
    /**
     describes the selected state of Radio
    */
    checked: PropTypes.bool.isRequired,
    /**
     additional CSS class names
    */
    className: PropTypes.string,
    /**
     describes if Radio is disabled
    */
    disabled: PropTypes.bool,
    /**
     describes if Radio label is not visible
    */
    hideLabel: PropTypes.bool,
    /**
     name of input that Radio select is related to
    */
    name: PropTypes.string.isRequired,
    /**
     label that describes the Radio select for the user
    */
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),
    /**
     update handler for changes on Radio select element
    */
    onChange: PropTypes.func,
    /**
     MDL ripple effect is used on Radio element
    */
    ripple: PropTypes.bool,
    /**
     value for input when Radio is selected
    */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};

Radio.defaultProps = {
    className: null,
    disabled: false,
    hideLabel: false,
    label: null,
    ripple: false,
    onChange: undefined,
};

Radio.displayName = 'Radio select';

export default Radio;
