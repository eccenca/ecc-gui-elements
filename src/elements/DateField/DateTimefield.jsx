import React, { Component } from 'react';
import Datefield from './DateField';


/**
 * This Component creates a date and time input field based on DateField.
 */
class DateTimefield extends Component{
    displayName: 'DateTimefield';

    static defaultProps = {
            timeFormat: 'HH:mm',
            dateFormat: 'DD-MM-YYYY',
    };

    // template rendering
    render() {
        return <Datefield {...this.props} />;
    }
}

export default DateTimefield;
