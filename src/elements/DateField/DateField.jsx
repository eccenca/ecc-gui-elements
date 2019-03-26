import React from 'react';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';
import _ from 'lodash';
import moment from 'moment';
import TextField from '../TextField/TextField';
import ScrollingHOC from '../../hocs/ScrollingHOC';


const DateField = props => {
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
    } = props;

    delete otherProps.initialFormat;
    delete otherProps.dateFormat;
    delete otherProps.timeFormat;
    delete otherProps.name;
    delete otherProps.scrollElementIntoView;
    delete otherProps.scrollIntoView;

    // construct the date/time for moment
    const getFormats = () => {
        const { dateFormat, timeFormat } = props;
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
    };

    const convertToMoment = (value, format) => {
        if (moment.isMoment(value)) {
            return value;
        }
        return moment(value, format, true);
    };

    const extendedOnChange = ({ onChange, value }) => {
        const format = getFormats().full;

        const newValue = convertToMoment(value, format);
        const oldValue = convertToMoment(props.value, format);

        // only return value if value is a new one
        if (!oldValue.isSame(newValue) && _.isFunction(onChange)) {
            onChange({
                value: newValue,
                rawValue: newValue,
                isValid: newValue.isValid(),
                name: props.name,
            });
        }
    };

    if (!moment.isMoment(value)) {
        console.warn(
            'Datefield: Please provide the value as a Moment Object, otherwise it could result in false value conversions'
        );
        extendedOnChange({ onChange, value });
    }

    const textFieldOnChange = ({ rawValue }) => {
        if (
            rawValue !== props.value
            && _.isFunction(props.onChange)
        ) {
            extendedOnChange({
                onChange: props.onChange,
                value: rawValue,
            });
        }
    };

    const renderInput = props => {
        return (
            <TextField
                {...props}
                stretch={props.stretch}
                error={props.error}
                onChange={textFieldOnChange}
            />
        );
    };

    const inputProps = {
        label: label || placeholder,
        disabled,
        className: className || inputClassName,
    };

    const formats = getFormats();

    // try to convert value to moment object
    const inputValue = convertToMoment(value, formats.full);

    return (
        <Datetime
            value={
                inputValue.isValid()
                    ? inputValue
                    : inputValue.creationData().input
            }
            onChange={newValue => {
                extendedOnChange({ onChange, value: newValue });
            }}
            dateFormat={formats.date}
            timeFormat={formats.time}
            strictParsing
            inputProps={inputProps}
            renderInput={renderInput}
            {...otherProps}
        />
    );
};

DateField.propTypes = {
    label: PropTypes.string, // input label as string
    value: PropTypes.oneOfType([
        PropTypes.string, // date value as string
        PropTypes.object, // can be a moment object as well
    ]),
    onChange: PropTypes.func.isRequired, // on change function
    timeFormat: PropTypes.oneOfType([
        PropTypes.string, // time format as string
        PropTypes.bool, // time select can be disabled
    ]),
    dateFormat: PropTypes.oneOfType([
        PropTypes.string, // date format as string
        PropTypes.bool, // date select can be disabled
    ]),
    placeholder: PropTypes.string, // text shown on empty input element
    disabled: PropTypes.bool, // prevent change of input element
    inputClassName: PropTypes.string, // class name of input element
    input: PropTypes.bool, // show/hide input element
    closeOnSelect: PropTypes.bool, // auto close picker after date select
};

DateField.defaultProps = {
    timeFormat: false,
    dateFormat: 'YYYY-MM-DD',
};


DateField.displayName = 'DateField';

export default ScrollingHOC(DateField);
