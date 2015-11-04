import React from 'react';
import {MaterialMixin} from 'ecc-mixins';
import classNames from 'classnames';
import Button from './Button';

const Alert = React.createClass({
    mixins: [MaterialMixin],

    // define property types
    propTypes: {
        children: React.PropTypes.oneOfType([
            React.PropTypes.node
        ]).isRequired,
        className: React.PropTypes.string,
        dismissLabel: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        type: React.PropTypes.string,
        border: React.PropTypes.bool,
        vertSpacing: React.PropTypes.bool,
    },

    // template rendering
    render() {
        const {className, border, dismissLabel, type, vertSpacing, ...otherProps} = this.props;

        const classes = classNames('mdl-alert', {
            'mdl-alert--info': type === 'info',
            'mdl-alert--success': type === 'success',
            'mdl-alert--warning': type === 'warning',
            'mdl-alert--danger': type === 'error',
            'mdl-alert--border': border,
            'mdl-alert--spacing': vertSpacing,
            'mdl-alert--dismissable': typeof dismissLabel !== 'undefined',
        }, className);

        // TODO: add onclick event to remove alert
        let dismiss = false;
        if (dismissLabel) {
            dismiss = (
                <div className="mdl-alert__dismiss">
                    <Button type="button" iconName="close" tooltip={dismissLabel} />
                </div>
            );
        }

        return (
            <div className={classes} {...otherProps}>
                <div className="mdl-alert__content">
                    {this.props.children}
                </div>
                {dismiss}
            </div>
        );

    },
});

export default Alert;
