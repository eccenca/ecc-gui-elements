import React from 'react';
import PerformanceMixin from '../../mixins/PerformanceMixin';
import Datefield from './DateField';

/**
 * This Component creates a date and time input field based on DateField.
 */
const DateTimefield = React.createClass({
    mixins: [PerformanceMixin],

    getDefaultProps() {
        return {
            timeFormat: 'HH:mm',
            dateFormat: 'DD-MM-YYYY',
        };
    },

    // template rendering
    render() {
        return <Datefield {...this.props} />;
    },
});

export default DateTimefield;
