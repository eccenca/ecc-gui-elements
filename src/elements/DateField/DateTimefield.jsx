import React from 'react';
import Datefield from './DateField';


/**
 * This Component creates a date and time input field based on DateField.
 */
const DateTimefield = props => (
    <Datefield {...props} />
);

DateTimefield.defaultProps = {
    timeFormat: 'HH:mm',
    dateFormat: 'DD-MM-YYYY',
};

DateTimefield.displayName = 'DateTimefield';

export default DateTimefield;
