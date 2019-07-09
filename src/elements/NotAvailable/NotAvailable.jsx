import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tooltip from '../Tooltip/Tooltip';

/**
Use that element as very simple "not available" placeholder information, e.g. in empty table cells or statistic
overviews. It currently only supports short label strings and long descriptions used as tooltip addition.

```js
import { NotAvailable } from '@eccenca/gui-elements';

const Page = React.createClass({
    // template rendering
    render() {
        return (
            <NotAvailable
                label="N/A" // short label that is shown, default: 'n/a'
                description="Not available element" // long description that is only shown on hover
                inline={false|true} // show it as inline text element, default: false
            />
        )
    },
    // ....
});

```
*/


const Button = props => {
    const {
        className, description, inline, label,
    } = props;

    const classes = classNames(
        {
            'ecc-gui-elements__notavailable': true,
            'ecc-gui-elements__notavailable--inline': inline,
        },
        className
    );

    const visibleLabel = <span className="ecc-gui-elements__notavailable-label">{label}</span>;
    const addedTooltip = description || (label !== 'n/a' ? '' : 'not available');

    return (
        <span className={classes}>
            { addedTooltip ? <Tooltip label={addedTooltip}>{visibleLabel}</Tooltip> : visibleLabel}
        </span>
    );
};

// define property types
Button.propTypes = {
    /**
        string (optional): additional CSS class name
    */
    className: PropTypes.string,
    /**
        string (optional): long description that is only shown on hover, default: empty string when label is given,
        otherwise "not available"
    */
    description: PropTypes.string,
    /* TODO *
        string (optional): name of icon that is used instead of label string
    */
    // iconName: PropTypes.string,
    /**
        boolean (default: false): show it as inline text element, default: false
    */
    inline: PropTypes.bool,
    /**
        string (optional): short label that is shown, default: 'n/a'
    */
    label: PropTypes.string, // short description
};

Button.defaultProps = {
    className: '',
    description: '',
    inline: false,
    label: 'n/a',
};

Button.displayName = 'NotAvailable';
export default Button;
