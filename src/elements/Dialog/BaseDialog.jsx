import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import Button from '../Button/Button';
import {
    Card,
    CardTitle,
    CardMenu,
    CardContent,
    CardActions,
} from '../Card';

/**
 * This Component creates a customizable dialog.
 */
const BaseDialog = props => {
    const {
        active,
        className,
        modal,
        size,
        buttonRow,
        title,
        titleCancelButton,
        ...otherProps
    } = props;

    if (active !== true) {
        return false;
    }

        // set classname
    const classes = classNames(
        'mdl-dialog',
        {
            'is-activated': active === true,
            'mdl-dialog--modal': modal === true,
            'mdl-dialog--mini': size === 'mini',
            'mdl-dialog--large': size === 'large',
        },
        className
    );

        // set modal
    let modalbg = false;
    if (modal === true) {
        modalbg = <div className="mdl-dialog__modalbackground" />;
    }

        // set title cancel Button
    const cancelButton = titleCancelButton ? (
        <CardMenu>
            <Button
                className="mdl-dialog__title__close-button"
                tooltip="Close"
                iconName="hide"
                onClick={titleCancelButton}
            />
        </CardMenu>
    ) : (
        false
    );
        // set title
    const dialogTitle = title ? (
        <CardTitle documentLevel="h1" className="mdl-dialog__title">
            <h1 className="mdl-card__title-text">{title}</h1>
            {cancelButton}
        </CardTitle>
    ) : (
        false
    );

        // set content
    const content = props.children ? (
        <CardContent className="mdl-dialog__content">
            {props.children}
        </CardContent>
    ) : (
        false
    );

        // set button main layout
    const buttonLayout = {
        accent: true,
        colored: false,
        fabSize: '',
    };
        // set buttons
    const rowActions = buttonRow.reverse().map((button, idx) => {
        const key = `Button_${_.get(button, 'key', idx)}`;
        return (
            <span
                className={`mdl-dialog__actions__${idx}-button`}
                key={key}
            >
                {React.cloneElement(button, buttonLayout)}
            </span>
        );
    });

    const actions = (
        <CardActions className="mdl-dialog__actions">
            {rowActions}
        </CardActions>
    );

    let containerClass = '';
    if (active === true) {
        containerClass = 'mdl-dialog__container';
    }

        // return complete dialog
    const dialog = (
        <div className={containerClass}>
            {modalbg}
            <Card className={classes} shadow={6} {...otherProps}>
                {dialogTitle}
                {content}
                {actions}
            </Card>
        </div>
    );

    return dialog;
};

// define property types
BaseDialog.propTypes = {
    /**
     * Define if dialog is displayed.
     */
    active: PropTypes.bool.isRequired,
    /**
     * Custom dialog classname.
     */
    className: PropTypes.string,
    /**
     * Defines dialog as modal.
     */
    modal: PropTypes.bool,
    /**
     * Size of dialog.
     */
    size: PropTypes.string,
    /**
     * Contain buttons for action row.
     */
    buttonRow: PropTypes.arrayOf(PropTypes.element).isRequired,
    /**
     * Title of dialog.
     */
    title: PropTypes.node,
    /**
     * Add cancel button to title.
     */
    titleCancelButton: PropTypes.func,
};
BaseDialog.displayName = 'BaseDialog';

export default BaseDialog;
