import React from 'react';
import Datetime from 'react-datetime';
import _ from 'lodash';
import moment from 'moment';
import TextField from './../TextField/TextField';
import PerformanceMixin from './../../mixins/PerformanceMixin';

const DateField = React.createClass({
    mixins: [PerformanceMixin],

    propTypes: {
        label: React.PropTypes.string, // input label as string
        value: React.PropTypes.oneOfType([
            React.PropTypes.string, // date value as string
            React.PropTypes.object, // can be a moment object as well
        ]),
        onChange: React.PropTypes.func.isRequired, // on change function
        timeFormat: React.PropTypes.oneOfType([
            React.PropTypes.string, // time format as string
            React.PropTypes.bool, // time select can be disabled
        ]),
        dateFormat: React.PropTypes.oneOfType([
            React.PropTypes.string, // date format as string
            React.PropTypes.bool, // date select can be disabled
        ]),
        placeholder: React.PropTypes.string, // text shown on empty input element
        disabled: React.PropTypes.bool, // prevent change of input element
        inputClassName: React.PropTypes.string, // class name of input element
        input: React.PropTypes.bool, // show/hide input element
        closeOnSelect: React.PropTypes.bool, // auto close picker after date select
    },

    getDefaultProps() {
        return {
            timeFormat: false,
            dateFormat: 'YYYY-MM-DD',
        };
    },

    componentWillMount() {
        const {value, onChange} = this.props;
        // initial input formatting
        if (!moment.isMoment(value)) {
            console.warn(
                'Datefield: Please provide the value as a Moment Object, otherwise it could result in false value conversions'
            );
            this.extendedOnChange({onChange, value});
        }
    },

    // construct the date/time for moment
    getFormats() {
        const {dateFormat, timeFormat} = this.props;
        // set format output
        const fullFormat = [];
        let date = false;
        let time = false;

        if (dateFormat) {
            date = _.isString(dateFormat) ? dateFormat : 'YYYY-MM-DD';
            fullFormat.push(date);
        }

        if (timeFormat) {
            time = _.isString(timeFormat) ? timeFormat : 'HH:mm:ss';
            fullFormat.push(time);
        }

        if (_.isEmpty(fullFormat)) {
            throw new Error(
                'Datefield: Please define dateFormat, timeFormat or both.'
            );
        }

        return {
            date,
            time,
            full: fullFormat.join(' '),
        };
    },
    convertToMoment(value, format) {
        if (moment.isMoment(value)) {
            return value;
        }
        return moment(value, format, true);
    },
    extendedOnChange({onChange, value}) {
        const format = this.getFormats().full;

        const newValue = this.convertToMoment(value, format);
        const oldValue = this.convertToMoment(this.props.value, format);

        // only return value if value is a new one
        if (!oldValue.isSame(newValue) && _.isFunction(onChange)) {
            onChange({
                value: newValue,
                rawValue: newValue,
                isValid: newValue.isValid(),
                name: this.props.name,
            });
        }
    },

    textFieldOnChange({rawValue}) {
        if (
            rawValue !== this.props.value &&
            _.isFunction(this.props.onChange)
        ) {
            this.extendedOnChange({
                onChange: this.props.onChange,
                value: rawValue,
            });
        }
    },

    renderInput(props) {
        return (
            <TextField
                {...props}
                stretch={this.props.stretch}
                error={this.props.error}
                onChange={this.textFieldOnChange}
            />
        );
    },

    render() {
        const {
            // outer props
            label,
            value,
            onChange,
            className,
            // inner props
            placeholder,
            disabled,
            inputClassName,
            // rest outer props
            ...otherProps
        } = this.props;
        delete otherProps.initialFormat;
        delete otherProps.dateFormat;
        delete otherProps.timeFormat;
        delete otherProps.name;

        const inputProps = {
            label: label || placeholder,
            disabled,
            className: className || inputClassName,
        };

        const formats = this.getFormats();

        // try to convert value to moment object
        const inputValue = this.convertToMoment(value, formats.full);

        return (
            <Datetime
                value={
                    inputValue.isValid()
                        ? inputValue
                        : inputValue.creationData().input
                }
                onChange={newValue => {
                    this.extendedOnChange({onChange, value: newValue});
                }}
                dateFormat={formats.date}
                timeFormat={formats.time}
                strictParsing
                inputProps={inputProps}
                renderInput={this.renderInput}
                {...otherProps}
            />
        );
    },
});

export default DateField;
