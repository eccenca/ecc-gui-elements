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

    render() {

        const {options, value, ...passProps} = this.props;

        // parse values to object format if needed
        const parsedOptions = _.isPlainObject(options[0]) ? options :
            (
                _.map(options, it => {
                    return {value: it, label: it};
                })
            );

        // parse values to object format if needed
        const parsedValue = _.isPlainObject(value) ? value : {value, label: value};

        console.warn(passProps, parsedOptions, parsedValue)

        return (
            <Select
                {...passProps}
                value={parsedValue}
                options={parsedOptions}
            />
        );
    }
});

export default SelectBox;
