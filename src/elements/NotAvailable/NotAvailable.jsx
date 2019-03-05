import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tooltip from '../Tooltip/Tooltip';

/* TODO:

* add option `iconName` to use icon

*/

class Button extends Component{
    displayName: 'NotAvailable';

    // define property types
    static propTypes = {
        className: PropTypes.string, // additional classname
        description: PropTypes.string, // long description
        // TODO iconName: PropTypes.string,
        inline: PropTypes.bool, // displayed as inline text
        label: PropTypes.string, // short description
    };

    // template rendering
    render() {
        const {className, description, inline, label} = this.props;

        const classes = classNames(
            {
                'ecc-gui-elements__notavailable': true,
                'ecc-gui-elements__notavailable--inline': inline,
            },
            className
        );

        return (
            <span className={classes}>
                <Tooltip label={description || (label ? '' : 'not available')}>
                    <span className="ecc-gui-elements__notavailable-label">
                        {label || 'n/a'}
                    </span>
                </Tooltip>
            </span>
        );
    }
}

export default Button;
