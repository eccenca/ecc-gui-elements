import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select/lib/Select';
import Creatable from 'react-select/lib/Creatable';
import Async from 'react-select/lib/Async';
import AsyncCreatable from 'react-select/lib/AsyncCreatable';
import _ from 'lodash';
import UniqueIdWrapper from '../../utils/uniqueId';
import Button from '../Button/Button';

// format value to lowercase string
const stringCompare = function (value) {
    return _.toLower(_.toString(value));
};

const clearRenderer = () => (
    <Button iconName="clear" className="mdl-button--clearance" />
);

/**
The SelectBox wraps [react-select](https://github.com/JedWatson/react-select) to use mixed content of strings and numbers as well as the default object type.
The SelectBox behaves like a [controlled input](https://facebook.github.io/react/docs/forms.html#controlled-components).
Please refer to all available properties in the linked documentations.

```js
import { SelectBox } from '@eccenca/gui-elements';

const Page = React.createClass({
    getInitialState(){
      return {
          value: 8,
      };
    },
    selectBoxOnChange(value){
       this.setState({
           value
       });
    },
    // template rendering
    render() {
        return (
            <SelectBox
                placeholder="Label for SelectBox"
                options={['label1', 3]}
                optionsOnTop={true} // option list opens up on top of select input (default: false)
                value={this.state.value}
                onChange={this.selectBoxOnChange}
                creatable={true} // allow creation of new values
                promptTextCreator={(newLabel) => ('New stuff: ' + newLabel)} // change default "Create option 'newLabel'" to "New stuff: 'newLabel'"
                multi={true} // allow multi selection
                clearable={false} // hide 'remove all selected values' button
                searchable={true} // whether to behave like a type-ahead or not
                reducedSize={false} // remove vertical whitespace around element, default: false
            />
        )
    },
});

```

Note:

- if objects are used in multi selectable options you can add {"clearableValue": false} to it to hide delete button for this specifc object
- if "creatable" is set new values will be applied on Enter, Tab and Comma (",")
- ``placeholder`` label is used within MDL floating label layout

 */
class SelectBox extends Component {
    static displayName = 'SelectBox';

    static propTypes = {
        /**
         * contains values which are available in dropdown list
         * options is an array of objects or strings and/or numbers
         */
        options: PropTypes.arrayOf(
            (propValue, key, componentName, location, propFullName) => {
                const containObjects = _.isPlainObject(_.head(propValue));

                const isObject = _.isPlainObject(propValue[key]);

                const isNumberOrString = _.isString(propValue[key]) || _.isNumber(propValue[key]);

                if (
                    (!containObjects && !isNumberOrString)
                    || (containObjects && !isObject)
                ) {
                    return new Error(
                        `Invalid prop \`${propFullName}\` supplied to`
                            + ` \`${componentName}\`. No mixed content (object vs string/number) allowed.`
                    );
                }
                return false;
            }
        ).isRequired,
        /**
         * contains selected value
         * value is an object or a strings a numbers
         */
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.object,
            // only needed for multiple inputs
            PropTypes.array,
        ]),
        // onChange handler
        onChange: PropTypes.func.isRequired,
        // allow creation of new values
        creatable: PropTypes.bool,
        /**
         * remove vertical whitespace around element
         */
        reducedSize: PropTypes.bool,
    };

    static defaultProps = {
        creatable: false,
        reducedSize: false,
    };

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.uniqueOptions = this.uniqueOptions.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onChange(newValue) {
        // If the options consist of plainvalues, we just want to return the plain value
        if (_.get(newValue, '$plainValue', false)) {
            return this.props.onChange(newValue.value, this.props.name);
        }
        return this.props.onChange(newValue, this.props.name);
    }

    // default check for value creation
    // prevent double values (check case insensitive, and handle numbers as string)
    uniqueOptions({ option: newObject, options }) {
        return !_.some(
            options,
            ({ value, label }) =>
                stringCompare(value) === stringCompare(newObject.value)
                && stringCompare(label) === stringCompare(newObject.label)
        );
    }

    onFocus() {
        this.setState({
            focused: true,
        });
    }

    onBlur() {
        this.setState({
            focused: false,
        });
    }

    render() {
        const {
            autofocus,
            className,
            creatable,
            placeholder = '',
            reducedSize,
            optionsOnTop,
            value,
            async = false,
            uniqueId,
            ...passProps
        } = this.props;

        // we do not want to pass onChange, as we wrap onChange ourselves
        delete passProps.onChange;
        // we do not want to pass name, as we use it ourselves
        delete passProps.name;

        passProps.onFocus = this.onFocus;
        passProps.onBlur = this.onBlur;

        passProps.clearable = _.isUndefined(passProps.clearable)
            ? true
            : passProps.clearable;

        if (passProps.clearable) {
            passProps.clearRenderer = clearRenderer;
        }

        const focused = this.state && typeof this.state.focused !== 'undefined'
            ? this.state.focused
            : autofocus;

        const classes = classNames(
            {
                'mdl-textfield mdl-js-textfield mdl-textfield--full-width': true, // use always
                'mdl-textfield--floating-label': true, // use always
                'mdl-textfield--reduced': reducedSize === true,
                'mdl-textfield--missinglabel': !placeholder,
                'is-dirty':
                    !_.isNil(value) && (_.isNumber(value) || !_.isEmpty(value)),
                'is-focused': focused === true,
                'Select--optionsontop': optionsOnTop === true,
            },
            className
        );

        let parsedValue = null;

        // if value is not empty or a number check for formatting
        if (!_.isEmpty(value) || _.isNumber(value)) {
            // in case of multi select is used
            if (_.isArray(value)) {
                parsedValue = _.map(
                    value,
                    it => (_.isPlainObject(it) ? it : { value: it, label: it })
                );
            } else {
                parsedValue = _.isPlainObject(value)
                    ? value
                    : { value, label: value };
            }
        }

        let component = null;

        if (async) {
            const {
                ignoreCase = false,
                ignoreAccents = false,
                ...passAsyncProps
            } = passProps;

            if (creatable) {
                component = (
                    <AsyncCreatable
                        {...passAsyncProps}
                        value={parsedValue}
                        id={uniqueId}
                        onChange={this.onChange}
                        isOptionUnique={
                            this.props.isOptionUnique || this.uniqueOptions
                        }
                        ignoreAccents={ignoreAccents}
                        ignoreCase={ignoreCase}
                        placeholder=""
                    />
                );
            } else {
                component = (
                    <Async
                        {...passAsyncProps}
                        id={uniqueId}
                        value={parsedValue}
                        onChange={this.onChange}
                        ignoreAccents={ignoreAccents}
                        ignoreCase={ignoreCase}
                        placeholder=""
                    />
                );
            }
        } else {
            const { options, ...passSyncProps } = passProps;

            // parse values to object format if needed
            const parsedOptions = _.isPlainObject(options[0])
                ? options
                : _.map(options, it => ({
                    value: it,
                    label: it,
                    $plainValue: true,
                }));

            if (creatable) {
                component = (
                    <Creatable
                        {...passSyncProps}
                        id={uniqueId}
                        value={parsedValue}
                        options={parsedOptions}
                        onChange={this.onChange}
                        isOptionUnique={
                            this.props.isOptionUnique || this.uniqueOptions
                        }
                        placeholder=""
                    />
                );
            } else {
                component = (
                    <Select
                        {...passSyncProps}
                        id={uniqueId}
                        value={parsedValue}
                        options={parsedOptions}
                        onChange={this.onChange}
                        placeholder=""
                    />
                );
            }
        }

        return (
            <div
                className={classes}
                data-test-id={`ecc-gui-elements-${uniqueId}`}
            >
                {component}
                <label className="mdl-textfield__label" htmlFor={uniqueId}>
                    {placeholder}
                </label>
            </div>
        );
    }
}

export default UniqueIdWrapper(SelectBox, {
    prefix: 'selectBox',
    targetProp: 'uniqueId',
});
