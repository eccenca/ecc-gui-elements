import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tooltip from '../Tooltip/Tooltip';

/* TODO:

* add option `iconName` to use icon

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

    const visibleLabel = <span className="ecc-gui-elements__notavailable-label">{label || 'n/a'}</span>;
    const addedTooltip = description || (label ? '' : 'not available');

    return (
        <span className={classes}>
            { addedTooltip ? <Tooltip label={addedTooltip}>{visibleLabel}</Tooltip> : visibleLabel}
        </span>
    );
};

// define property types
Button.propTypes = {
    className: PropTypes.string, // additional classname
    description: PropTypes.string, // long description
    // TODO iconName: PropTypes.string,
    inline: PropTypes.bool, // displayed as inline text
    label: PropTypes.string, // short description
};

Button.defaultProps = {
    className: '',
    description: '',
    inline: false,
    label: '',
};

Button.displayName = 'NotAvailable';
export default Button;
