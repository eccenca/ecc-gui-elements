/* eslint no-console: 0 */
import React from 'react';
import render from 'ecc-uitest-helpers';
// test styles
import '../style/test.less';
// component
import {
    Alert,
    Button,
    Dialog,
    Icon,
    Info,
    Error,
    Warning,
    Spinner,
    Success
} from '../index.js';
import {
    Layout, Content, Header
} from 'react-mdl';

const Page = React.createClass({
    getInitialState() {
        return {
        };
    },

    // template rendering
    render() {

        const testSpinner = (
            <div className="mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Spinner</h4>
                </div>
                <div className="mdl-card__content">
                <Spinner appearInline={true} />
                <Spinner appearLocal={true} />
                </div>
                <Spinner />
            </div>
        );

        const testAlerts = (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Alerts</h4>
                </div>
                <div className="mdl-card__content">
                    <Alert border={true} vertSpacing={true} dismissLabel="remove">
                        <p>This is a</p>
                        <p>untyped message.</p>
                    </Alert>
                    <Info border={true} vertSpacing={true} >
                        info
                    </Info>
                    <Success border={true} vertSpacing={true} >
                       success
                    </Success>
                    <Warning border={true} vertSpacing={true} >
                        warning
                    </Warning>
                    <Error dismissLabel="remove error" vertSpacing={true} >
                        error
                    </Error>
                </div>
            </div>
        );

        const testDialog = (
            <Dialog title="Dialog Title"
                    active={false}
                    modal={true}
                    size="mini"
                    cancelButton={<Button>Cancel</Button>}
                    confirmButton={<Button>Yes</Button>}
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
                    <Button raised={true} accent={true} ripple={false}>Test</Button>
                    <Button raised={true} ripple={false} tooltip="This is a Test!" fabSize="mini">
                        <Icon name="mood" />
                    </Button>
                    <Button iconName="more_vert" tooltip="more tooltip" />
                    <Icon name="cloud_download" tooltip="cloudy clouds" />
                </div>
            </div>
        );

        return (
            <div className="mdl-layout__container">
                <Layout fixedHeader={true}>
                    <Header />
                    <Content>
                        {testSpinner}
                        {testAlerts}
                        {testButtons}
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
