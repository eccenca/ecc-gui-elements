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


class TestDialogs extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            baseDialog: false,
            confirmationDialog: false,
        };

        this.openConfirmationDialog = this.openConfirmationDialog.bind(this);
        this.closeConfirmationDialog = this.openConfirmationDialog.bind(this);
        this.openBaseDialog = this.openBaseDialog.bind(this);
        this.closeBaseDialog = this.closeBaseDialog.bind(this);
    }

    openConfirmationDialog() {
        this.setState({confirmationDialog: true});
    }
    closeConfirmationDialog() {
        console.warn('ConfirmationDialog closed');
        this.setState({confirmationDialog: false});
    }
    openBaseDialog() {
        this.setState({baseDialog: true});
    }
    closeBaseDialog(param) {
        console.log('BaseDialog closed', param);
        this.setState({baseDialog: false});
    }

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
                        <Button onClick={() => this.setState({confirmationDialog: false})}>
                            Cancel
                        </Button>
                    }
                    confirmButton={
                        <Button onClick={() => this.setState({confirmationDialog: false})}>
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
                    titleCancelButton={() => this.closeBaseDialog('Abort')}
                    size="large"
                    buttonRow={[
                        <Button
                            key="Cancel"
                            onClick={() => this.closeBaseDialog('Cancel')}>
                            Cancel
                        </Button>,
                        <Button
                            key="Yes"
                            onClick={() => this.closeBaseDialog('Yes')}>
                            Yes
                        </Button>,
                        <Button
                            key="Custom"
                            onClick={() => this.closeBaseDialog('Custom')}>
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
    }
}

export default TestDialogs;
