/* eslint no-console: 0 */
import React from 'react';
import render from 'ecc-uitest-helpers';
import {Header} from 'react-mdl';

// test styles
import '../style/test.scss';
// test cases
import TestSpinner from './tests/Spinner';
import TestProgressbar from './tests/Progressbar';
import TestAlerts from './tests/Alerts';
import TestDialogs from './tests/Dialogs';
import TestIcons from './tests/Icons';
import TestButtons from './tests/Buttons';
import TestInputs from './tests/Inputs';
import TestTabs from './tests/Tabs';
import TestScrolling from './tests/Scrolling';
import TestPagination from './tests/Pagination';
import TestTooltips from './tests/Tooltips';
import PerformanceMixin from './../src/mixins/PerformanceMixin';
import ScrollingMixin from './../src/mixins/ScrollingMixin';

// component
import {
    BreadcrumbList,
    BreadcrumbItem,
    ContextMenu,
    MenuItem,
    Nothing,
    NotAvailable,
    Version,
    Layout,
    Content,
} from '../index';

window.enablePerformanceMixingLog = true;

const Page = React.createClass({
    mixins: [PerformanceMixin],

    addContextMenuItem() {
        this.setState({
            insertContextMenuItem: true,
        });
        console.log('insert MenuItem');
    },

    removeContextMenuItem() {
        this.setState({
            insertContextMenuItem: false,
        });
        console.log('remove MenuItem');
    },

    handleScrollTo(ref) {
        ScrollingMixin.scrollElementIntoView(this[ref], {topOffset: 100});
    },

    // template rendering
    render() {
        const testcases = [
            <Nothing key="nothing" />,
            <TestSpinner
                key="test-spinner"
                ref={spinner => {
                    this.testSpinner = spinner;
                }}
            />,
            <div key="N/A">
                <p>
                    This is a test with a block{' '}
                    <NotAvailable
                        label="N/A"
                        description="Not available element"
                    />{' '}
                    information.
                </p>
                <p>
                    This is a test with a inline <NotAvailable inline />{' '}
                    information.
                </p>
            </div>,
            <hr key="spacer1" className="mdl-layout-spacer" />,
            <TestProgressbar key="progress" />,
            <hr key="spacer2" className="mdl-layout-spacer" />,
            <TestAlerts
                key="alerts"
                ref={alerts => {
                    this.testAlerts = alerts;
                }}
            />,
            <hr key="spacer3" className="mdl-layout-spacer" />,
            <TestScrolling
                key="scrolling"
                scrollTestCases={[
                    {
                        label: 'Scroll to spinner test',
                        handleScroll: this.handleScrollTo,
                        handleRef: 'testSpinner',
                    },
                    {
                        label: 'Scroll to alert test',
                        handleScroll: this.handleScrollTo,
                        handleRef: 'testAlerts',
                    },
                    {
                        label: 'Scroll to button test',
                        handleScroll: this.handleScrollTo,
                        handleRef: 'testButtons',
                    },
                ]}
            />,
            <hr key="spacer4" className="mdl-layout-spacer" />,
            <TestDialogs key="dialogs" />,
            <hr key="spacer5" className="mdl-layout-spacer" />,
            <TestTooltips key="tooltips" />,
            <hr key="spacer6" className="mdl-layout-spacer" />,
            <TestIcons key="icons" />,
            <hr key="spacer7" className="mdl-layout-spacer" />,
            <TestButtons
                key="buttons"
                ref={buttons => {
                    this.testButtons = buttons;
                }}
            />,
            <hr key="spacer8" className="mdl-layout-spacer" />,
            <TestInputs key="inputs" />,
            <hr key="spacer9" className="mdl-layout-spacer" />,
            <TestTabs key="tabs" />,
            <hr key="spacer0" className="mdl-layout-spacer" />,
            <TestPagination key="pagination" />,
            <hr key="spacerA" className="mdl-layout-spacer" />,
        ];

        return (
            <Layout fixedHeader>
                <Header>
                    <ContextMenu align="left">
                        <MenuItem className="ownClassName" key="no1">
                            First First Item
                        </MenuItem>
                        <MenuItem>First Second Item</MenuItem>
                        <MenuItem>First Menu Item 3</MenuItem>
                        <MenuItem>First Another Menu Item</MenuItem>
                        <MenuItem onClick={this.addContextMenuItem}>
                            First Add Another
                        </MenuItem>
                        {this.state && this.state.insertContextMenuItem ? (
                            <MenuItem onClick={this.removeContextMenuItem}>
                                Remove me
                            </MenuItem>
                        ) : (
                            false
                        )}
                    </ContextMenu>
                    <ContextMenu
                        align="right"
                        iconName="add"
                        tooltip="add property">
                        <MenuItem>Second First Item</MenuItem>
                        <MenuItem>Second Second Item</MenuItem>
                        <MenuItem>Second Menu Item 3</MenuItem>
                        <MenuItem>Second Another Menu Item</MenuItem>
                        <MenuItem>Second Alright</MenuItem>
                    </ContextMenu>
                    <ContextMenu valign="top">
                        <MenuItem>Only one menu item</MenuItem>
                    </ContextMenu>
                    {this.state && this.state.insertContextMenuItem ? (
                        <ContextMenu>
                            <MenuItem>test</MenuItem>
                        </ContextMenu>
                    ) : (
                        false
                    )}
                </Header>
                <Content>
                    <div className="ecc-application__workspace">
                        <BreadcrumbList className="my-own-class">
                            <BreadcrumbItem
                                onClick={function() {
                                    alert('Click on breadcrumb item.');
                                }}>
                                Button
                            </BreadcrumbItem>
                            <BreadcrumbItem href="#">Link</BreadcrumbItem>
                            <BreadcrumbItem>Span</BreadcrumbItem>
                        </BreadcrumbList>
                        <hr className="mdl-layout-spacer" />
                        {testcases}
                    </div>
                </Content>
                <footer className="mdl-mini-footer">
                    <Version version={'v0.1.0'} />
                </footer>
            </Layout>
        );
    },
});

render({Component: Page, importCoreStyles: false});
