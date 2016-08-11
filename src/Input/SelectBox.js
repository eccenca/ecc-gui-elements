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
            if (containObjects === false && ( !_.isString(propValue[key]) && !_.isNumber(propValue[key]))) {
                return new Error(
                  'Invalid prop `' + propFullName + '` supplied to' +
                  ' `' + componentName + '`. No mixed content (object vs string/number) allowed.'
                );
            } else if (containObjects === true && !_.isPlainObject(propValue[key])) {
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
    getInitialState() {
        return {
            // check if this.props.options using plain objects (withiin array) or not
            usePlainObjectsOption: _.isArray(this.props.options) && _.isPlainObject(this.props.options[0]),
            // check if this.props.value is a plain object
            usePlainObjectValue: _.isPlainObject(this.props.value),
        };
    },
    // catch onChange event and parse values back to used datatype
    handleChange(value) {
        this.state.usePlainObjectValue ?
            this.props.onChange(value) :
            // return just the label or value itself if value is null
            this.props.onChange(value ? value.label : value);
    },

    render() {
        // parse values to object format if needed
        const parsedOptions = this.state.usePlainObjectsOption ? (
            this.props.options)
            : (_.map(this.props.options, it => {return {value: it, label: it}; })
        );
        // parse values to object format if needed
        const parsedValue = this.state.usePlainObjectValue ? (
            this.props.value) : {value: this.props.value, label: this.props.value};

        return (
            <Select
                {...this.props}
                value={parsedValue}
                options={parsedOptions}
                onChange={this.handleChange}
            />
        );
    }
});

export default SelectBox;
