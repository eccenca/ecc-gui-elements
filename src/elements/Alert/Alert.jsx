import React, { Component } from 'react';
import classNames from 'classnames';
import Button from '../../elements/Button/Button';
import PropTypes from 'prop-types';

class Alert extends Component {
    displayName: 'Alert';
    // define property types
    static propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
        handlerDismiss: PropTypes.func,
        labelDismiss: PropTypes.string,
        iconDismiss: PropTypes.string,
        type: PropTypes.string,
        border: PropTypes.bool,
        vertSpacing: PropTypes.bool,
    };

    // template rendering
    render() {
        const {
            className,
            border,
            handlerDismiss,
            labelDismiss,
            iconDismiss,
            type,
            vertSpacing,
            children,
            ...otherProps
        } = this.props;

        const classes = classNames(
            'mdl-alert',
            {
                'mdl-alert--info': type === 'info',
                'mdl-alert--success': type === 'success',
                'mdl-alert--warning': type === 'warning',
                'mdl-alert--danger': type === 'error',
                'mdl-alert--border': border,
                'mdl-alert--spacing': vertSpacing,
                'mdl-alert--dismissable': typeof handlerDismiss !== 'undefined',
            },
            className
        );

        // TODO: add onclick event to remove alert
        let dismiss = false;
        if (handlerDismiss) {
            dismiss = (
                <div className="mdl-alert__dismiss">
                    <Button
                        type="button"
                        iconName={iconDismiss || 'hide'}
                        tooltip={labelDismiss || 'Hide'}
                        onClick={handlerDismiss}
                    />
                </div>
            );
        }

        return (
            <div className={classes} {...otherProps}>
                <div className="mdl-alert__content">{children}</div>
                {dismiss}
            </div>
        );
    }
}

export default Alert;
