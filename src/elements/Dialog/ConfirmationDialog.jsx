import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BaseDialog from './BaseDialog';

/**
 * This Component creates a confirmation dialog based on BaseDialog.
 */

class ConfirmationDialog extends Component{
    displayName: 'ConfirmationDialog';

    // define property types
    static propTypes = {
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
    // template rendering
    render() {
        const {active} = this.props;

        if (active !== true) {
            return false;
        }

        const buttonRow = [
            React.cloneElement(this.props.cancelButton, {key: 'cancel'}),
            React.cloneElement(this.props.confirmButton, {key: 'confirm'}),
        ];

        // push data with formatted buttons to base dialog
        return (
            <BaseDialog
                active={this.props.active}
                className={this.props.className}
                modal={this.props.modal}
                size={this.props.size}
                title={this.props.title}
                buttonRow={buttonRow}>
                {this.props.children}
            </BaseDialog>
        );
    }
}

export default ConfirmationDialog;
