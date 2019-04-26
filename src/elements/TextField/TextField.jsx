import React from 'react';
import Proptypes from 'prop-types';
import classNames from 'classnames';
import ReactMDLTextField from 'react-mdl/lib/Textfield';
import _ from 'lodash';
import Button from '../Button/Button';
import uniqueId from '../../utils/uniqueId';

const extendedOnChange = (onChangeFn, event) => {
    if (_.isFunction(onChangeFn)) {
        onChangeFn({
            event,
            name: event.target.name,
            value: event.target.value,
            rawValue: event.target.value,
        });
    }
};

/**

Provides a input field or area to insert text or numbers.

```js
import { TextField } from '@eccenca/gui-elements';

class Page extends React.Component {
    // event is the original react onChange event
    // value is event.target.value (a shortcut for convienience)
    onChange({event, value}) {
        this.setState({
            varname: value,
        })
    },
    // template rendering
    render() {
        return (
            <TextField
                name="varname"
                value={this.state.varname}
                label="Textfield"
                onChange={this.onChange}
                error="Please correct your input" // optional, error message
                stretch={false} // do not use full width (default: true)
                multiline={true} // use a text area (default: false)
            />
        )
    },
    // ....
};

```
 */

const TextField = props => {
    const {
        children,
        className,
        label,
        multiline,
        onChange,
        onClearValue,
        reducedSize,
        stretch,
        value,
        ...otherProps
    } = props;

    const classes = classNames(className, {
        'mdl-textfield--full-width': stretch === true,
        'mdl-textfield--clearable': _.isFunction(onClearValue),
        'mdl-textfield--reduced': reducedSize === true,
        'mdl-textfield--multiline': multiline === true,
        'mdl-textfield--missinglabel': !label,
    });

    // provides clearance button
    const clearButton = _.isFunction(onClearValue) && value ? (
        <div className="mdl-input__clearable-holder">
            <Button
                disabled={otherProps.disabled ? true : false}
                type="button"
                iconName="clear"
                onClick={onClearValue}
                className="mdl-button--clearance"
            />
        </div>
    ) : (
        false
    );
    return (
        <ReactMDLTextField
            className={classes}
            floatingLabel
            value={value}
            label={label}
            onChange={extendedOnChange.bind(null, onChange)}
            rows={multiline === true ? 3 : 0}
            {...otherProps}
        >
            {clearButton}
            {children}
        </ReactMDLTextField>
    );
};

TextField.propTypes = {
    /**
        additional class names for element
    */
    className: Proptypes.string,
    /**
        inout element is disabled and not useable
    */
    disabled: Proptypes.bool,
    /**
        error message regarding the value of input
    */
    error: Proptypes.node,
    /**
        additional class names for the native HTML input element that is used
    */
    inputClassName: Proptypes.string,
    /**
        label for input field
    */
    label: Proptypes.oneOfType([Proptypes.string, Proptypes.element])
        .isRequired,
    /**
        use a multilined textarea inout
    */
    multiline: Proptypes.bool,
    /**
        event handler when the inout value is changed, gets event object as input
    */
    onChange: Proptypes.func.isRequired,
    /**
        button to clear value is added when the event handler is given
    */
    onClearValue: Proptypes.func,
    /**
        reduce whitespace around the element
    */
    reducedSize: Proptypes.bool,
    /**
        value is required
    */
    required: Proptypes.bool,
    /**
        use full width that is available
    */
    stretch: Proptypes.bool,
    /**
        initial value of the input field
    */
    value: Proptypes.oneOfType([Proptypes.string, Proptypes.number]).isRequired,
};

TextField.defaultProps = {
    disabled: false,
    error: false,
    label: '',
    multiline: false,
    onClearValue: undefined,
    reducedSize: false,
    required: false,
    stretch: true,
};

TextField.displayName = 'TextField';

export default uniqueId(TextField, { prefix: 'textField', targetProp: 'id' });
