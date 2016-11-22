import React from 'react';
import BaseDialog from './BaseDialog';

/**
 * This Component creates a confirmation dialog based on BaseDialog.
 */
const ConfirmationDialog = React.createClass({
    // define property types
    propTypes: {
        active: React.PropTypes.bool.isRequired,
        className: React.PropTypes.string,
        modal: React.PropTypes.bool,
        size: React.PropTypes.string,
        cancelButton: React.PropTypes.any.isRequired,
        confirmButton: React.PropTypes.any.isRequired,
        title: React.PropTypes.node
    },
    // template rendering
    render() {
        const buttons = [];
        if (React.isValidElement(this.props.cancelButton)) {
            buttons.push(this.props.cancelButton);
        }
        if (React.isValidElement(this.props.confirmButton)) {
            buttons.push(this.props.confirmButton);
        }
        // push data with formatted buttons to base dialog
        return (
            <BaseDialog
                active={this.props.active}
                className={this.props.className}
                modal={this.props.modal}
                size={this.props.size}
                title={this.props.title}
                buttonRow={buttons}
            >
                {this.props.children}
            </BaseDialog>
        );
    },
});

export default ConfirmationDialog;
