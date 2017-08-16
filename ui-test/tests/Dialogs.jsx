import React from 'react';
import {
    Button,
    ContextMenu,
    MenuItem,
    Card,
    CardTitle,
    CardMenu,
    CardContent,
    CardActions,
    ConfirmationDialog,
    BaseDialog,
} from '../../index.js';

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
                <ConfirmationDialog title="ConfirmationDialog Title"
                                    active={this.state.confirmationDialog}
                                    modal={true}
                                    size="mini"
                                    cancelButton={<Button onClick={this.closeConfirmationDialog.bind(null, 'Cancel')}>Cancel</Button>}
                                    confirmButton={<Button
                                        onClick={this.closeConfirmationDialog.bind(null, 'Yes')}>Yes</Button>}
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
                </ConfirmationDialog>
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
                </BaseDialog>
                <Card className="my-own-class">
                    <CardTitle className="my-own-class" documentLevel={4}>
                        Test Dialogs
                    </CardTitle>
                    <CardMenu className="my-own-class">
                        <ContextMenu>
                            <MenuItem onClick={this.openConfirmationDialog}>Open ConfirmationDialog</MenuItem>
                            <MenuItem onClick={this.openBaseDialog}>Open BaseDialog</MenuItem>
                        </ContextMenu>
                    </CardMenu>
                    <CardActions className="my-own-class">
                        <Button raised accent onClick={this.openConfirmationDialog}>Open ConfirmationDialog</Button>
                        <Button raised accent onClick={this.openBaseDialog}>Open BaseDialog</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
});

export default TestDialogs;
