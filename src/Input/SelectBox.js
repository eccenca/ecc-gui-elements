import React from 'react';
import Select from 'react-select/lib/Select.js';
import 'react-select/dist/react-select.css';
import _ from 'lodash';

const SelectBox = React.createClass({
    propTypes: {
        /**
         * contains values which are available in dropdown list
         * options is an array of objects or strings and/or numbers
         */
        options: React.PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
            const containObjects = _.isPlainObject(_.head(propValue));

            const isObject = _.isPlainObject(propValue[key]);

            const isNumberOrString = _.isString(propValue[key]) || _.isNumber(propValue[key]);

            if (!containObjects && !isNumberOrString || containObjects && !isObject) {
                return new Error(
                    'Invalid prop `' + propFullName + '` supplied to' +
                    ' `' + componentName + '`. No mixed content (object vs string/number) allowed.'
                );
            }
        }),
        /**
         * contains selected value
         * value is an object or a strings a numbers
         */
        value: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number,
            React.PropTypes.object,
        ]),
        // onChange handler
        onChange: React.PropTypes.func.isRequired,
    },
    onChange (value) {
        // If the options consist of plainvalues, we just want to return the plain value
        if (_.get(value, '$plainValue', false)) {
            return this.props.onChange(value.value);
        }
        return this.props.onChange(value);
    },
    render() {

        const {options, value, ...passProps} = this.props;

        // we do not want to pass onChange, as we wrap onChange ourselves
        delete passProps.onChange;

        // parse values to object format if needed
        const parsedOptions = _.isPlainObject(options[0]) ? options :
            (
                _.map(options, it => {
                    return {value: it, label: it, $plainValue: true};
                })
            );

        let parsedValue = null;

        // Only set our value if it is in the options
        if (!_.isUndefined(_.find(options, value))) {
            // parse values to object format if needed
            parsedValue = _.isPlainObject(value) ? value : {value, label: value};
        }

        return (
            <Select
                {...passProps}
                value={parsedValue}
                options={parsedOptions}
                onChange={this.onChange}
            />
        );
    }
});

export default SelectBox;
