import React from 'react';
import classNames from 'classnames';

const Dialog = React.createClass({
    // define property types
    propTypes: {
        active: React.PropTypes.bool.isRequired,
        className: React.PropTypes.string,
        modal: React.PropTypes.bool,
        size: React.PropTypes.string,
        cancelButton: React.PropTypes.element.isRequired,
        confirmButton: React.PropTypes.element.isRequired,
        title: React.PropTypes.string
    },

    // template rendering
    render() {
        const {className, active, size, modal, confirmButton, ...otherProps} = this.props;

        const classes = classNames('mdl-dialog mdl-shadow--16dp', {
            'is-activated': active === true,
            'mdl-dialog--modal': modal === true,
            'mdl-dialog--mini': size === 'mini',
            'mdl-dialog--large': size === 'large',
        }, className);

        let modalbg = false;
        if (modal === true) {
            modalbg = <div className="mdl-dialog__modalbackground"></div>;
        }

        let title = false;
        if (this.props.title) {
            title = (
                <div className="mdl-dialog__title">
                    <strong className="mdl-dialog__title-text">
                        {this.props.title}
                    </strong>
                </div>
            );
        }

        let content = false;
        if (this.props.children) {
            content = (
                <div className="mdl-dialog__content">
                    {this.props.children}
                </div>
            );
        }

        const cb = React.cloneElement(confirmButton, {accent: true});

        const actions = (
            <div className="mdl-dialog__actions">
                {this.props.cancelButton}
                {cb}
            </div>
        );

        let containerClass = '';
        if (active === true) {
            containerClass = 'mdl-dialog__container';
        }

        const dialog = (
            <div className={containerClass}>
                {modalbg}
                <div className={classes} {...otherProps}>
                    {title}
                    {content}
                    {actions}
                </div>
            </div>
        );

        return dialog;

    },
});

export default Dialog;
