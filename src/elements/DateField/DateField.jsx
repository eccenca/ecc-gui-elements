import React from 'react';
import Datetime from 'react-datetime';
import _ from 'lodash';
import moment from 'moment';
import TextField from './../TextField/TextField';
import PerformanceMixin from './../../mixins/PerformanceMixin';

const DateField = React.createClass({
    mixins: [PerformanceMixin],

    propTypes: {
        value: React.PropTypes.oneOfType([
            React.PropTypes.string, // date value as string
            React.PropTypes.object, // can be a moment object as well
        ]),
        onChange: React.PropTypes.func.isRequired, // on change function
        initialFormat: React.PropTypes.string, // only applied for initial given value
        timeFormat: React.PropTypes.oneOfType([
            React.PropTypes.string, // time format as string
            React.PropTypes.bool, // time select can be disabled
        ]),
        dateFormat: React.PropTypes.oneOfType([
            React.PropTypes.string, // date format as string
            React.PropTypes.bool, // date select can be disabled
        ]),
        initialFormat: React.PropTypes.string, // initial time and/or date format as string
        placeholder: React.PropTypes.string, // text shown on empty input element
        disabled: React.PropTypes.bool, // prevent change of input element
        inputClassName: React.PropTypes.string, // class name of input element
        input: React.PropTypes.bool, // show/hide input element
        closeOnSelect: React.PropTypes.bool, // auto close picker after date select
    },

    getDefaultProps() {
        return {
            timeFormat: false,
            dateFormat: 'DD-MM-YYYY',
        };
    },

    componentWillMount() {
        const {value, onChange, dateFormat, timeFormat, initialFormat = ''} = this.props;
        // initial input formatting
        if (!_.isEmpty(value)) {
            this.extendedOnChange({onChange, dateFormat, timeFormat, value: moment(value, initialFormat)});
        }
    },

    // construct the date/time for moment
    getFormatting() {
        const {dateFormat, timeFormat} = this.props;
        // set format output
        let format = '';
        // of only time is given
        if (!dateFormat && timeFormat) {
            format = timeFormat;
            // if only date is given
        } else if (dateFormat && !timeFormat) {
            format = dateFormat;
            // if time and date is given
        } else if (dateFormat && timeFormat) {
            format = dateFormat + ', ' + timeFormat;
        }
        return format;
    },

    extendedOnChange ({onChange, value}) {
        // try to strict format moment object to date
        const formattedValue = moment(value).format(this.getFormatting());

        // check if date is a correct moment object
        const isValid = moment(value, this.getFormatting(), true).isValid();

        // only return value if value is a new one
        if (formattedValue !== this.props.value && _.isFunction(onChange)) {
            onChange({
                value: _.isString(value) ? value : formattedValue,
                // FIXME: should we return the moment object as raw value (that's the true raw) or just full datetime format (as it is now)?
                // if valid return ISO 8601 format else plain string
                rawValue: isValid ? moment(value).format() : value,
                isValid,
            });
        }
    },

    renderInput: function(props) {
        return (
            <TextField
                className="my-class"
                onChange={this.extendedOnChange}
                {...props}
            />
        );
    },

    render() {
        const {
            // outer props
            value, onChange, dateFormat, timeFormat,
            // inner props
            placeholder, disabled, inputClassName,
            // rest outer props
            ...otherProps
        } = this.props;
        delete otherProps.initialFormat;

        const inputProps = {
            placeholder: placeholder,
            disabled: disabled,
            className: inputClassName,
        };

        // try to convert value to moment object
        const inputValue = moment(value, this.getFormatting(), true);

        return (
            <Datetime
                value={moment(inputValue).isValid() ? inputValue : value}
                onChange={newValue => {this.extendedOnChange({onChange, value: newValue})}}
                dateFormat={dateFormat}
                timeFormat={timeFormat}
                strictParsing
                inputProps={inputProps}
                renderInput={this.renderInput}
                {...otherProps}
            />
        );
    },
});

export default DateField;
