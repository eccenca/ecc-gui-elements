import React from 'react';
import {
    Button,
    ContextMenu,
    MenuItem,
    Card,
    CardTitle,
    CardMenu,
    CardActions,
    FloatingActionList,
    ConfirmationDialog,
    BaseDialog,
} from '../../index';

const TestDialogs = React.createClass({
    getInitialState() {
        return {
            baseDialog: false,
            confirmationDialog: false,
        };
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

    // template rendering
    render() {
        return (
            <div>
                <ConfirmationDialog
                    title="ConfirmationDialog Title"
                    active={this.state.confirmationDialog}
                    modal
                    size="mini"
                    cancelButton={
                        <Button
                            onClick={this.closeConfirmationDialog.bind(
                                null,
                                'Cancel'
                            )}>
                            Cancel
                        </Button>
                    }
                    confirmButton={
                        <Button
                            onClick={this.closeConfirmationDialog.bind(
                                null,
                                'Yes'
                            )}>
                            Yes
                        </Button>
                    }>
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
                </ConfirmationDialog>
                <BaseDialog
                    title="DialogCustomActions Title"
                    active={this.state.baseDialog}
                    modal
                    titleCancelButton={this.closeBaseDialog.bind(null, 'Abort')}
                    size="large"
                    buttonRow={[
                        <Button
                            key="Cancel"
                            onClick={this.closeBaseDialog.bind(null, 'Cancel')}>
                            Cancel
                        </Button>,
                        <Button
                            key="Yes"
                            onClick={this.closeBaseDialog.bind(null, 'Yes')}>
                            Yes
                        </Button>,
                        <Button
                            key="Custom"
                            onClick={this.closeBaseDialog.bind(null, 'Custom')}>
                            Custom
                        </Button>,
                    ]}>
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
                </BaseDialog>
                <Card className="my-own-class" reducedSize>
                    <CardTitle className="my-own-class" documentLevel="h4">
                        Test Dialogs
                    </CardTitle>
                    <CardMenu className="my-own-class">
                        <ContextMenu>
                            <MenuItem onClick={this.openConfirmationDialog}>
                                Open ConfirmationDialog
                            </MenuItem>
                            <MenuItem onClick={this.openBaseDialog}>
                                Open BaseDialog
                            </MenuItem>
                        </ContextMenu>
                    </CardMenu>
                    <FloatingActionList
                        actions={[
                            {
                                icon: 'info',
                                label: 'Open ConfirmationDialog',
                                handler: this.openConfirmationDialog,
                            },
                            {
                                icon: 'info',
                                label: 'Open BaseDialog',
                                handler: this.openBaseDialog,
                            },
                        ]}
                    />
                    <CardActions className="my-own-class">
                        <Button
                            raised
                            accent
                            onClick={this.openConfirmationDialog}>
                            Open ConfirmationDialog
                        </Button>
                        <Button raised accent onClick={this.openBaseDialog}>
                            Open BaseDialog
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    },
});

export default TestDialogs;
