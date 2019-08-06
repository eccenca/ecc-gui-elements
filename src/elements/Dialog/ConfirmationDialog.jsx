import React from 'react';
import PropTypes from 'prop-types';
import BaseDialog from './BaseDialog';

/**
 * This Component creates a confirmation dialog based on BaseDialog.
 */
const ConfirmationDialog = props => {
    const { active } = props;

    if (active !== true) {
        return false;
    }

    const buttonRow = [
        React.cloneElement(props.cancelButton, { key: 'cancel' }),
        React.cloneElement(props.confirmButton, { key: 'confirm' }),
    ];

        // push data with formatted buttons to base dialog
    return (
        <BaseDialog
            active={props.active}
            className={props.className}
            modal={props.modal}
            size={props.size}
            title={props.title}
            buttonRow={buttonRow}
        >
            {props.children}
        </BaseDialog>
    );
};
// define property types
ConfirmationDialog.propTypes = {
    active: PropTypes.bool.isRequired,
    className: PropTypes.string,
    modal: PropTypes.bool,
    size: PropTypes.string,
    // a Confirmation Dialog should always have two buttons per spec:
    // https://material.google.com/components/dialogs.html#dialogs-confirmation-dialogs
    cancelButton: PropTypes.element.isRequired,
    confirmButton: PropTypes.element.isRequired,
    title: PropTypes.node,
};
ConfirmationDialog.displayName = 'ConfirmationDialog';

export default ConfirmationDialog;
