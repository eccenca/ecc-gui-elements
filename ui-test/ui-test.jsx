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

        const testStepper = (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Stepper</h4>
                </div>
                <div className="mdl-card__content">
                    <h5>Linear Stepper</h5>
                    <ul data-upgraded=",MaterialStepper" className="mdl-stepper mdl-stepper--linear" id="demo-stepper-linear">
                        <li className="mdl-step is-active">
                          <span className="mdl-step__label">
                            <span className="mdl-step__title"><span className="mdl-step__title-text">Title of step 1</span>
                          <span className="mdl-step__title-message">Summarize if needed</span>
                          </span>
                          <span className="mdl-step__label-indicator"><span className="mdl-step__label-indicator-content">1</span></span></span>
                          <div className="mdl-step__content">
                          </div>
                          <div className="mdl-step__actions">
                            <button data-upgraded=",MaterialButton,MaterialRipple" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored mdl-button--raised" data-stepper-next="">
                              Continue
                            <span className="mdl-button__ripple-container"><span className="mdl-ripple"></span></span></button>
                            <button data-upgraded=",MaterialButton,MaterialRipple" className="mdl-button mdl-js-button mdl-js-ripple-effect" data-stepper-cancel="">
                              Cancel
                            <span className="mdl-button__ripple-container"><span className="mdl-ripple"></span></span></button>
                          </div>
                        </li>
                        <li className="mdl-step"><span className="mdl-step__label">
                          <span className="mdl-step__title"><span className="mdl-step__title-text">Title of step 2</span>
                          </span>
                          <span className="mdl-step__label-indicator"><span className="mdl-step__label-indicator-content">2</span></span></span>
                          <div className="mdl-step__content">
                          </div>
                          <div className="mdl-step__actions">
                            <button data-upgraded=",MaterialButton,MaterialRipple" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored mdl-button--raised" data-stepper-next="">
                              Continue
                            <span className="mdl-button__ripple-container"><span className="mdl-ripple"></span></span></button>
                            <button data-upgraded=",MaterialButton,MaterialRipple" className="mdl-button mdl-js-button mdl-js-ripple-effect" data-stepper-cancel="">
                              Cancel
                            <span className="mdl-button__ripple-container"><span className="mdl-ripple"></span></span></button>
                          </div>
                        </li>
                        <li className="mdl-step"><span className="mdl-step__label">
                          <span className="mdl-step__title"><span className="mdl-step__title-text">Title of step 3</span>
                          </span>
                          <span className="mdl-step__label-indicator"><span className="mdl-step__label-indicator-content">3</span></span></span>
                          <div className="mdl-step__content">
                          </div>
                          <div className="mdl-step__actions">
                            <button data-upgraded=",MaterialButton,MaterialRipple" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored mdl-button--raised" data-stepper-next="">
                              Continue
                            <span className="mdl-button__ripple-container"><span className="mdl-ripple"></span></span></button>
                            <button data-upgraded=",MaterialButton,MaterialRipple" className="mdl-button mdl-js-button mdl-js-ripple-effect" data-stepper-cancel="">
                              Cancel
                            <span className="mdl-button__ripple-container"><span className="mdl-ripple"></span></span></button>
                          </div>
                        </li>
                    </ul>
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
                    <Icon name="arrow_firstpage" />
                    <Icon name="arrow_prevpage" />
                    <Icon name="arrow_nextpage" />
                    <Icon name="arrow_lastpage" />
                    <Icon name="arrow_dropdown" />
                    <Icon name="expand_more" />
                    <Icon name="expand_less" />
                    <Icon name="menu_more" />
                    <Icon name="filter" />
                    <Icon name="sort" />
                    <Icon name="hide" />
                    <Icon name="access_forbidden" />
                    <h5>Other Icons</h5>
                    <Icon name="widgets" tooltip="no tooltip on the next (canonical) icon" />
                    <Icon name="access_forbidden" tooltip={false} />
                </div>
            </div>
        );

        const testButtons = (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Buttons</h4>
                </div>
                <div className="mdl-card__content">
                    {testDialog}
                    <h5>Buttons using canonical icons</h5>
                    <Button colored iconName="edit" tooltip="own tooltip"/>
                    <Button accent iconName="delete" tooltip={false} />
                    <Button raised iconName="arrow_nextpage" />
                    <Button raised colored iconName="arrow_prevpage" />
                    <Button raised accent iconName="arrow_lastpage" />
                    <Button fabSize="mini" iconName="arrow_firstpage" />
                    <Button fabSize="large" iconName="arrow_dropdown" />
                    <Button iconName="expand_more" />
                    <Button iconName="expand_less" />
                    <Button iconName="menu_more" />
                    <Button iconName="filter" />
                    <Button iconName="sort" />
                    <Button iconName="hide" />
                    <Button iconName="access_forbidden" />
                </div>
                <div className="mdl-card__actions">
                    <Button raised={true} accent ripple={false} onClick={this.openDialog}>Open Dialog</Button>
                    <Button raised={true} ripple={false} tooltip="This is a Test!" fabSize="mini">
                        <Icon name="mood" />
                    </Button>
                    <Button raised={true}>
                        <Icon name="hide" />
                        Hide
                    </Button>
                    <Button iconName="more_vert" />
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
                        {testStepper}
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
