import React from 'react';
import {
    Button,
    Dialog,
    ConfirmationDialog,
    BaseDialog,
} from '../../index.js';

const TestDialogs = React.createClass({
    getInitialState() {
        return {
            dialog: false,
            baseDialog: false,
            confirmationDialog: false,
        };
    },

    openDialog() {
        this.setState({dialog: true});
    },
    closeDialog(param) {
        console.log('Dialog closed', param);
        this.setState({dialog: false});
    },
    openConfirmationDialog() {
        this.setState({confirmationDialog: true});
    },
    closeConfirmationDialog(param) {
        console.log('ConfirmationDialog closed', param);
        this.setState({confirmationDialog: false});
    },
    openBaseDialog() {
        this.setState({baseDialog: true});
    },
    closeBaseDialog(param) {
        console.log('BaseDialog closed', param);
        this.setState({baseDialog: false});
    },

    render() {
        const testcontent = [
            <Dialog title="Dialog Title"
                    active={this.state.dialog}
                    modal={true}
                    size="mini"
                    cancelButton={<Button onClick={this.closeDialog.bind(null, 'Cancel')}>Cancel</Button>}
                    confirmButton={<Button onClick={this.closeDialog.bind(null, 'Yes')}>Yes</Button>}
            >
                <p>Dialog Content</p>
                <p>Dialog Content</p>
                <p>Dialog Content</p>
                <p>Dialog Content</p>
                <p>Dialog Content</p>
                <p>Dialog Content</p>
                <p>Dialog Content</p>
                <p>Dialog Content</p>
                <p>Dialog Content</p>
                <p>Dialog Content</p>
                <p>Dialog Content</p>
                <p>Dialog Content</p>
                <p>Dialog Content</p>
                <p>Dialog Content</p>
                <p>Dialog Content</p>
                <p>Dialog Content</p>
                <p>Dialog Content</p>
                <p>Dialog Content</p>
                <p>Dialog Content</p>
            </Dialog>,
            <ConfirmationDialog title="ConfirmationDialog Title"
                    active={this.state.confirmationDialog}
                    modal={true}
                    size="mini"
                    cancelButton={<Button onClick={this.closeConfirmationDialog.bind(null, 'Cancel')}>Cancel</Button>}
                    confirmButton={<Button onClick={this.closeConfirmationDialog.bind(null, 'Yes')}>Yes</Button>}
            >
                <p>ConfirmationDialog Content</p>
                <p>ConfirmationDialog Content</p>
                <p>ConfirmationDialog Content</p>
                <p>ConfirmationDialog Content</p>
                <p>ConfirmationDialog Content</p>
                <p>ConfirmationDialog Content</p>
                <p>ConfirmationDialog Content</p>
                <p>ConfirmationDialog Content</p>
                <p>ConfirmationDialog Content</p>
                <p>ConfirmationDialog Content</p>
                <p>ConfirmationDialog Content</p>
                <p>ConfirmationDialog Content</p>
                <p>ConfirmationDialog Content</p>
                <p>ConfirmationDialog Content</p>
                <p>ConfirmationDialog Content</p>
                <p>ConfirmationDialog Content</p>
                <p>ConfirmationDialog Content</p>
                <p>ConfirmationDialog Content</p>
                <p>ConfirmationDialog Content</p>
            </ConfirmationDialog>,
            <BaseDialog title="DialogCustomActions Title"
                    active={this.state.baseDialog}
                    modal={true}
                    titleCancelButton={this.closeBaseDialog.bind(null, 'Abort')}
                    size="large"
                    buttonRow={[
                        <Button onClick={this.closeBaseDialog.bind(null, 'Cancel')}>Cancel</Button>,
                        <Button onClick={this.closeBaseDialog.bind(null, 'Yes')}>Yes</Button>,
                        <Button onClick={this.closeBaseDialog.bind(null, 'Custom')}>Custom</Button>
                    ]}
            >
                <p>DialogCustomActions Content</p>
                <p>DialogCustomActions Content</p>
                <p>DialogCustomActions Content</p>
                <p>DialogCustomActions Content</p>
                <p>DialogCustomActions Content</p>
                <p>DialogCustomActions Content</p>
                <p>DialogCustomActions Content</p>
                <p>DialogCustomActions Content</p>
                <p>DialogCustomActions Content</p>
                <p>DialogCustomActions Content</p>
            </BaseDialog>,
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Dialogs</h4>
                </div>
                <div className="mdl-card__actions">
                    <Button raised accent onClick={this.openDialog}>Open Dialog</Button>
                    <Button raised accent onClick={this.openBaseDialog}>Open BaseDialog</Button>
                    <Button raised accent onClick={this.openConfirmationDialog}>Open ConfirmationDialog</Button>
                </div>
            </div>

        ];

        return (
            <div>
                {testcontent}
            </div>
        );
    }
});

export default TestDialogs;
