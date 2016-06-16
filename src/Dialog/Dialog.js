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
        title: React.PropTypes.node
    },

    // template rendering
    render() {
        const {active, className, modal, size, cancelButton, confirmButton, title, ...otherProps} = this.props;

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

        let dialogTitle = title;
        if (dialogTitle) {
            dialogTitle = (
                <div className="mdl-dialog__title">
                    <strong className="mdl-dialog__title-text">
                        {this.props.title}
                    </strong>
                </div>
            );
        } else {
            dialogTitle = false;
        }

        let content = false;
        if (this.props.children) {
            content = (
                <div className="mdl-dialog__content">
                    {this.props.children}
                </div>
            );
        }

        const buttonLayout = {
            accent: true,
            colored: false,
            fabSize: ''
        };
        const buttonCancel = React.cloneElement(cancelButton, buttonLayout);
        const buttonConfirm = React.cloneElement(confirmButton, buttonLayout);

        const actions = (
            <div className="mdl-dialog__actions">
                {buttonConfirm}
                {buttonCancel}
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
                    {dialogTitle}
                    {content}
                    {actions}
                </div>
            </div>
        );

        return dialog;

    },
});

export default Dialog;
