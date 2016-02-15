/* eslint no-console: 0 */
import React from 'react';
import render from 'ecc-uitest-helpers';
// test styles
import '../style/test.scss';
// component
import {
    Alert,
    Button,
    Checkbox,
    Error,
    Dialog,
    Icon,
    Info,
    Nothing,
    Progressbar,
    Spinner,
    Success,
    Switch,
    Warning
} from '../index.js';
import {
    Layout, Content, Header
} from 'react-mdl';

const Page = React.createClass({
    getInitialState() {
        return {
            dialog: false
        };
    },
    openDialog() {
        this.setState({dialog: true});
    },
    closeDialog(param) {
        console.log('Dialog closed', param);
        this.setState({dialog: false});
    },
    // template rendering
    render() {

        const testSpinner = (
            <div className="mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Spinner</h4>
                </div>
                <div className="mdl-card__content">
                    <Spinner appearInline={true}/>
                    <Spinner appearLocal={true}/>
                </div>
                <Spinner />
            </div>
        );

        const testProgressbar = (
            <div className="mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Progressbars</h4>
                </div>
                <div className="mdl-card__content">
                    <Progressbar progress={85}/>
                    <Progressbar appearGlobal={true} indeterminate={true} progress={95}/>
                </div>
                <Progressbar appearLocal={true} progress={15}/>
            </div>
        );

        const testAlerts = (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Alerts</h4>
                </div>
                <div className="mdl-card__content">
                    <Alert border={true} vertSpacing={true} handlerDismiss={function() {}}>
                        <p>This is a</p>
                        <p>untyped message.</p>
                    </Alert>
                    <Info border={true} vertSpacing={true}>
                        info
                    </Info>
                    <Success border={true} vertSpacing={true}>
                        success
                    </Success>
                    <Warning border={true} vertSpacing={true}>
                        warning
                    </Warning>
                    <Error handlerDismiss={function() {}} labelDismiss="remove error" vertSpacing={true}>
                        error
                    </Error>
                </div>
            </div>
        );

        const testDialog = (
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
            </Dialog>
        );

        const testButtons = (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Buttons</h4>
                </div>
                <div className="mdl-card__content">
                    {testDialog}
                </div>
                <div className="mdl-card__actions">
                    <Button raised={true} accent ripple={false} onClick={this.openDialog}>Open Dialog</Button>
                    <Button raised={true} ripple={false} tooltip="This is a Test!" fabSize="mini">
                        <Icon name="mood"/>
                    </Button>
                    <Button iconName="more_vert" tooltip="more tooltip"/>
                    <Icon name="cloud_download" tooltip="cloudy clouds"/>
                </div>
            </div>
        );

        const testIcons = (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Icons</h4>
                </div>
                <div className="mdl-card__content">
                    <h5>Basic Icons with Fallback tooltips</h5>
                    <Icon name="edit" />
                    <Icon name="delete" />
                    <Icon name="arrow_nextpage" />
                    <Icon name="arrow_prevpage" />
                    <Icon name="arrow_lastpage" />
                    <Icon name="arrow_firstpage" />
                    <Icon name="arrow_dropdown" />
                    <Icon name="expand_more" />
                    <Icon name="expand_less" />
                    <Icon name="menu_more" />
                    <Icon name="filter" />
                    <Icon name="sort" />
                    <Icon name="hide" />
                    <Icon name="access_forbidden" />
                    <h5>Other Icons</h5>
                    <Icon name="widgets" tooltip={false} />
                    <Icon name="access_forbidden" tooltip={false} />
                </div>
            </div>
        );

        const testInputs = (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Inputfields</h4>
                </div>
                <div className="mdl-card__content">
                    <Switch id="test_id_666"
                            ripple={true}
                    />
                    <Switch checked>
                        Switch 2 Text
                    </Switch>
                    <Checkbox id="test_id_667"
                              ripple={true}
                    />
                    <Checkbox label="Checkbox 1 Text"/>
                    <Checkbox disabled>
                        Checkbox 2 Text
                    </Checkbox>
                    <Checkbox checked>
                        <div className="test">Checkbox 3 Text</div>
                    </Checkbox>
                </div>
            </div>
        );

        return (
            <div className="mdl-layout__container">
                <Layout fixedHeader={true}>
                    <Header />
                    <Content>
                        <Nothing />
                        {testSpinner}
                        <hr className="mdl-layout-spacer"/>
                        {testProgressbar}
                        <hr className="mdl-layout-spacer"/>
                        {testAlerts}
                        <hr className="mdl-layout-spacer"/>
                        {testIcons}
                        <hr className="mdl-layout-spacer"/>
                        {testButtons}
                        <hr className="mdl-layout-spacer"/>
                        {testInputs}
                        <hr className="mdl-layout-spacer"/>
                    </Content>
                    <footer className="mdl-mini-footer">
                        Footer
                    </footer>
                </Layout>
            </div>
        );
    },
});

render({Component: Page});
