import React from 'react';
import ConfirmationDialog from './ConfirmationDialog';

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
    componentDidMount() {
        console.error(`Dialog is deprecated and will be removed within next update!!!
Please rename it to ConfirmationDialog.`);
    },

    // template rendering
    render() {

        return (
            <ConfirmationDialog
                active={this.props.active}
                className={this.props.className}
                modal={this.props.modal}
                size={this.props.size}
                title={this.props.title}
                cancelButton={this.props.cancelButton}
                confirmButton={this.props.confirmButton}
            >
                {this.props.children}
            </ConfirmationDialog>
        );

    },
});

export default Dialog;
