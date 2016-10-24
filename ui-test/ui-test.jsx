/* eslint no-console: 0 */
import React from 'react';
import render from 'ecc-uitest-helpers';
import _ from 'lodash';
// test styles
import '../style/test.scss';
// component
import {
    Alert,
    Button,
    Checkbox,
    ContextMenu,
    Error,
    Dialog,
    ConfirmationDialog,
    BaseDialog,
    Icon,
    Info,
    MenuItem,
    Nothing,
    Progressbar,
    Spinner,
    Success,
    Switch,
    Timeline,
    Warning,
    Tabs,
    Version,
    Pagination,
    SelectBox,
    TextField,
} from '../index.js';
import {
    Layout, Content, Header
} from 'react-mdl';

const Page = React.createClass({
    getInitialState() {
        return {
            dialog: false,
            baseDialog: false,
            confirmationDialog: false,
            timelineItems: [
                {
                    id: 'http://example.com/1',
                    className: 'binding1',
                    start: '2013-01-01 09:30',
                    content: 'First'
                },
                {
                    id: 'http://example.com/2',
                    className: 'binding2',
                    start:
                    '2013-01-01 10:00',
                    end: '2013-01-01 10:45',
                    content: 'Second'
                },
                {
                    id: 'http://example.com/3',
                    className: 'binding3',
                    start: '2013-01-01 11:00',
                    content: 'Third'
                },
            ],
            tabContent: [
                {tabTitle: 'profiling Tab', tabContent: 'i\'m profiling Tab'},
                {tabTitle: 'discovery Tab', tabContent: 'i\'m discovery Tab'},
                {tabTitle: 'kpiTab', tabContent: 'i\'m kpiTab Tab'}
            ],
            paginationOffset: 15,
            paginationLimit: 15,
            selectBox1: {label: 'labelz', value: 'valuez'},
            selectBox2: 8,
            textInput: ['5'],
            switches: [false, true, undefined, undefined, true, false],
        };
    },
    openDialog() {
        this.setState({dialog: true});
    },
    closeDialog(param) {
        console.log('Dialog closed', param);
        this.setState({dialog: false});
    },
    openBaseDialog() {
        this.setState({baseDialog: true});
    },
    closeBaseDialog(param) {
        console.log('BaseDialog closed', param);
        this.setState({baseDialog: false});
    },
    tabClick(tabName) {
        console.log('tabClick:', tabName);
    },
    openConfirmationDialog() {
        this.setState({confirmationDialog: true});
    },
    closeConfirmationDialog(param) {
        console.log('ConfirmationDialog closed', param);
        this.setState({confirmationDialog: false});
    },
    handleNewPaginationOffset(offset) {
        console.log('new offset: ', offset);
        this.setState({paginationOffset: offset});
    },
    handleNewPaginationLimit(limit) {
        console.log('new limit: ', limit);
        this.setState({paginationLimit: limit});
    },
    selectBox1OnChange(value) {
        console.log('SelectBox onChange: ', value);
        this.setState({selectBox1: value});
    },
    selectBox2OnChange(value) {
        console.log('SelectBox onChange: ', value);
        this.setState({selectBox2: value});
    },
    updateSwitch(index, {value}) {
        const switches = _.clone(this.state.switches);
        switches[index] = value;
        this.setState({
            switches,
        });
    },
    updateTextInput(index, {value}) {
        const textInput = _.clone(this.state.textInput);
        textInput[index] = value;
        this.setState({
            textInput,
        });
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

        const testConfirmationDialog = (
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
            </ConfirmationDialog>
        );

        const testBaseDialog = (
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
        );
        /*
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
        */

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
                    {testDialog}{testBaseDialog}{testConfirmationDialog}
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
                    <Button iconName="access_forbidden" />ConfirmationDialog
                </div>
                <div className="mdl-card__actions">
                    <Button raised={true} accent ripple={false} onClick={this.openDialog}>Open Dialog</Button>
                    <Button raised={true} accent ripple={false} onClick={this.openBaseDialog}>Open BaseDialog</Button>
                    <Button raised={true} accent ripple={false} onClick={this.openConfirmationDialog}>Open ConfirmationDialog</Button>
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
                            checked={this.state.switches[0]}
                            onChange={this.updateSwitch.bind(null, 0)}
                    />
                    <Switch checked={this.state.switches[1]} onChange={this.updateSwitch.bind(null, 1)}>
                        Switch with Ripple
                    </Switch>
                    <Checkbox id="test_id_667"
                              ripple={true}
                              checked={this.state.switches[2]}
                              onChange={this.updateSwitch.bind(null, 2)}
                    />
                    <Checkbox label="Checkbox 1 Text" checked={this.state.switches[3]} onChange={this.updateSwitch.bind(null, 3)}/>
                    <Checkbox disabled checked={this.state.switches[4]} onChange={this.updateSwitch.bind(null, 4)}>
                        Checkbox 2 Text
                    </Checkbox>
                    <Checkbox checked={this.state.switches[5]} onChange={this.updateSwitch.bind(null, 5)}>
                        <div className="test">Checkbox 3 Text</div>
                    </Checkbox>
                </div>
            </div>
        );

        const testTimelines = (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Timelines</h4>
                </div>
                <div className="mdl-card__content">
                    <Timeline
                        items={this.state.timelineItems}
                        options={{type: 'point'}}
                        onSelect={items => console.log('Timeline', 'onSelect', items)}
                    />
                    <Button onClick={() => this.setState({timelineItems: this.state.timelineItems.concat([{
                        start: Date.now(),
                        content: '' + Date.now(),
                    }])})}>Add item to the timeline</Button>
                </div>
            </div>
        );

        const testTab = (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Tabs</h4>
                </div>
                <div className="mdl-card__content">
                    <Tabs
                        prefixTabNames={'tab-container'}
                        tabs={this.state.tabContent}
                        onTabClick={this.tabClick}
                        activeTab={'kpiTab'}
                    />
                    <Button onClick={() => this.setState({tabContent:
                    [
                        {tabTitle: 'profiling Tab', tabContent: 'i\'m profiling Tab'},
                        {tabTitle: 'discovery Tab', tabContent: false},
                        {tabTitle: 'kpiTab', tabContent: 'i\'m kpiTab Tab'}
                    ]
                    })}>Remove content from discovery tab</Button>
                </div>
            </div>
        );
        const testVersion = (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Version</h4>
                </div>
                <div className="mdl-card__content">
                    <Version
                        version={'v0.1.0'}
                    />
                </div>
            </div>
        );
        const testSelectBox = (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test SelectBox</h4>
                </div>
                <div className="mdl-card__content">
                    <h5>With objects</h5>
                    <SelectBox
                        placeholder={'Value deleted'}
                        options={[{label: 'labelz', value: 'valuez'}, {label: 'label1', value: 'value1'}, {label: 'label2', value: 'value2'}]}
                        value={this.state.selectBox1}
                        onChange={this.selectBox1OnChange}
                    />
                    <h5>With mixed strings and numbers</h5>
                    <SelectBox
                        placeholder={'No Value'}
                        options={['label1', 3, 8]}
                        value={this.state.selectBox2}
                        onChange={this.selectBox2OnChange}
                    />
                </div>
            </div>
        );

        const testPagination = (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Pagination</h4>
                </div>
                <div className="mdl-card__content">
                    <h5>Pagination with Elements</h5>
                    <Pagination
                        offset={this.state.paginationOffset}
                        limit={this.state.paginationLimit}
                        actualResults={15}
                        totalResults={31}
                        handleNewOffset={this.handleNewPaginationOffset}
                        offsetAsPage={false}
                        handleNewLimit={this.handleNewPaginationLimit}
                    />
                    <h5>Pagination with Page</h5>
                    Note: if offset is not a multiple of limit the page can be shown wrong
                    because page have to change offset by itself to fit "one page" instead
                    of e.g. show last elements from page 2 and first elements form page 3
                    <Pagination
                        offset={this.state.paginationOffset}
                        limit={this.state.paginationLimit}
                        totalResults={31}
                        handleNewOffset={this.handleNewPaginationOffset}
                        offsetAsPage={true}
                        handleNewLimit={this.handleNewPaginationLimit}
                    />
                </div>
            </div>
        );

        const testTextField = (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test TextField</h4>
                </div>
                <div className="mdl-card__content">
                    <TextField
                        value={this.state.textInput[0]}
                        label="Test Input"
                        onChange={this.updateTextInput.bind(null, 0)}
                    />
                    <TextField
                        className="mdl-textfield--full-width"
                        value={this.state.textInput[1]}
                        onChange={this.updateTextInput.bind(null, 1)}
                    />
                </div>
            </div>
        );

        return (
            <Layout fixedHeader={true}>
                <Header>
                    <ContextMenu
                        align="left"
                    >
                        <MenuItem>First First Item</MenuItem>
                        <MenuItem>First Second Item</MenuItem>
                        <MenuItem>First Menu Item 3</MenuItem>
                        <MenuItem>First Another Menu Item</MenuItem>
                        <MenuItem>First Alright</MenuItem>
                    </ContextMenu>
                    <ContextMenu
                        align="left"
                    >
                        <MenuItem>Second First Item</MenuItem>
                        <MenuItem>Second Second Item</MenuItem>
                        <MenuItem>Second Menu Item 3</MenuItem>
                        <MenuItem>Second Another Menu Item</MenuItem>
                        <MenuItem>Second Alright</MenuItem>
                    </ContextMenu>
                </Header>
                <Content>
                    <Nothing />
                    {testSpinner}
                    <hr className="mdl-layout-spacer"/>
                    {/*(typeof testStepper !== 'undefined') ? testStepper : false*/}
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
                    {testTimelines}
                    <hr className="mdl-layout-spacer"/>
                    {testTab}
                    <hr className="mdl-layout-spacer"/>
                    {testVersion}
                    <hr className="mdl-layout-spacer"/>
                    {testPagination}
                    <hr className="mdl-layout-spacer"/>
                    {testSelectBox}
                    <hr className="mdl-layout-spacer"/>
                    {testTextField}
                    <hr className="mdl-layout-spacer"/>
                </Content>
                <footer className="mdl-mini-footer">
                    Footer
                </footer>
            </Layout>
        );
    },
});

render({Component: Page});
