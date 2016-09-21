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
        cancelButton: React.PropTypes.element.isRequired,
        confirmButton: React.PropTypes.element.isRequired,
        title: React.PropTypes.node
    },
    // template rendering
    render() {
        // push data with formatted buttons to base dialog
        return (
            <BaseDialog
                active={this.props.active}
                className={this.props.className}
                modal={this.props.modal}
                size={this.props.size}
                title={this.props.title}
                buttonRow={[
                    this.props.cancelButton,
                    this.props.confirmButton
                ]}
            >
                {this.props.children}
            </BaseDialog>
        );
    },
});

export default ConfirmationDialog;
