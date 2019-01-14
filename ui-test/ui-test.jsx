/* eslint no-console: 0 */
import React from 'react';
import ReactDOM from 'react-dom';

import {Header, Drawer, Navigation} from 'react-mdl';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import _ from 'lodash';

// test styles
import '../style/test.scss';
// test cases
import TestSpinner from './tests/Spinner';
import TestProgressbar from './tests/Progressbar';
import TestAlerts from './tests/Alerts';
import TestDialogs from './tests/Dialogs';
import TestIcons from './tests/Icons';
import TestButtons from './tests/Buttons';
import TestChips from './tests/Chips';
import TestInputs from './tests/Inputs';
import TestSelects from './tests/Selects';
import TestTabs from './tests/Tabs';
import TestTable from './tests/Table';
import TestScrolling from './tests/Scrolling';
import TestPagination from './tests/Pagination';
import TestTooltips from './tests/Tooltips';
import TestCards from './tests/Cards';
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
    Layout,
    Content,
    Footer,
    Card,
    CardTitle,
    CardContent,
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
            {
                name: 'Context Menu',
                code: (
                    <Card>
                        <CardTitle>Test Context Menu</CardTitle>
                        <CardContent>
                            <ContextMenu align="left" key="contextmenu1">
                                <MenuItem className="ownClassName" key="no1">
                                    First First Item
                                </MenuItem>
                                <MenuItem>First Second Item</MenuItem>
                                <MenuItem>First Menu Item 3</MenuItem>
                                <MenuItem>First Another Menu Item</MenuItem>
                                <MenuItem onClick={this.addContextMenuItem}>
                                    First Add Another
                                </MenuItem>
                                {this.state &&
                                this.state.insertContextMenuItem ? (
                                    <MenuItem
                                        onClick={this.removeContextMenuItem}>
                                        Remove me
                                    </MenuItem>
                                ) : (
                                    false
                                )}
                            </ContextMenu>
                            <ContextMenu
                                align="right"
                                iconName="add"
                                tooltip="add property"
                                key="contextmenu2">
                                <MenuItem>Second First Item</MenuItem>
                                <MenuItem>Second Second Item</MenuItem>
                                <MenuItem>Second Menu Item 3</MenuItem>
                                <MenuItem>Second Another Menu Item</MenuItem>
                                <MenuItem>Second Alright</MenuItem>
                            </ContextMenu>
                            <ContextMenu valign="top" key="contextmenu3">
                                <MenuItem>Only one menu item</MenuItem>
                            </ContextMenu>
                        </CardContent>
                    </Card>
                ),
            },
            {
                name: 'Breadcrumb List',
                code: (
                    <Card>
                        <CardTitle>Test Breadcrumb List</CardTitle>
                        <CardContent>
                            <BreadcrumbList className="my-own-class">
                                <BreadcrumbItem
                                    onClick={function() {
                                        alert('Click on breadcrumb item.');
                                    }}>
                                    Button
                                </BreadcrumbItem>
                                <BreadcrumbItem href="/">Link</BreadcrumbItem>
                                <BreadcrumbItem>Span</BreadcrumbItem>
                            </BreadcrumbList>
                        </CardContent>
                    </Card>
                ),
            },
            {
                name: 'Nothing',
                code: (
                    <Card>
                        <CardTitle>Test Nothing</CardTitle>
                        <CardContent>
                            <Nothing key="nothing" />
                        </CardContent>
                    </Card>
                ),
            },
            {
                name: 'Spinner',
                code: (
                    <TestSpinner
                        key="test-spinner"
                        ref={spinner => {
                            this.testSpinner = spinner;
                        }}
                    />
                ),
            },
            {
                name: 'N/A',
                code: (
                    <Card>
                        <CardTitle>Test N/A</CardTitle>
                        <CardContent>
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
                                    This is a test with a inline
                                    <NotAvailable inline />information.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ),
            },
            {
                name: 'Progressbar',
                code: <TestProgressbar key="progress" />,
            },
            {
                name: 'Alerts',
                code: (
                    <TestAlerts
                        key="alerts"
                        ref={alerts => {
                            this.testAlerts = alerts;
                        }}
                    />
                ),
            },
            {
                name: 'Scrolling',
                code: (
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
                    />
                ),
            },
            {
                name: 'Dialogs',
                code: <TestDialogs key="dialogs" />,
            },
            {
                name: 'Tooltips',
                code: <TestTooltips key="tooltips" />,
            },
            {
                name: 'Icons',
                code: <TestIcons key="icons" />,
            },
            {
                name: 'Buttons',
                code: (
                    <TestButtons
                        key="buttons"
                        ref={buttons => {
                            this.testButtons = buttons;
                        }}
                    />
                ),
            },
            {
                name: 'Chips',
                code: (
                    <TestChips
                        key="chips"
                        ref={chips => {
                            this.testChips = chips;
                        }}
                    />
                ),
            },
            {
                name: 'Inputs',
                code: <TestInputs key="inputs" />,
            },
            {
                name: 'Selects',
                code: <TestSelects key="selects" />,
            },
            {
                name: 'Tabs',
                code: <TestTabs key="tabs" />,
            },
            {
                name: 'Pagination',
                code: <TestPagination key="pagination" />,
            },
            {
                name: 'Table',
                code: <TestTable key="table" />,
            },
            {
                name: 'Cards',
                code: <TestCards key="cards" />,
            },
        ];

        // sort the list of cases for easy searching
        testcases.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });

        const path = this.props.location.pathname.substring(1);
        if (
            path !== 'all' &&
            testcases.filter(c => c.name.toLowerCase() === path).length === 0
        ) {
            window.location = '/all';
            return 0;
        }

        return (
            <div>
                <Layout fixedHeader>
                    <Header title="Test Cases" />
                    <Drawer>
                        <Navigation>
                            <a href="all">All</a>
                            {_.map(testcases, ({name}) => (
                                <a
                                    href={`${name.toLowerCase()}`}
                                    key={`${name}`}>
                                    {name}
                                </a>
                            ))}
                        </Navigation>
                    </Drawer>
                    <Content>
                        {/* dummy cards to test scrolling */}
                        <Route
                            path="/scrolling"
                            key="dummy"
                            render={() => (
                                <div style={{margin: '10px'}}>
                                    <Card
                                        ref={spinner => {
                                            this.testSpinner = spinner;
                                        }}>
                                        <CardContent>
                                            <div style={{height: '100px'}}>
                                                A Spinner
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card
                                        ref={alert => {
                                            this.testAlerts = alert;
                                        }}>
                                        <CardContent>
                                            <div style={{height: '100px'}}>
                                                Some Alerts
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card
                                        ref={button => {
                                            this.testButtons = button;
                                        }}>
                                        <CardContent>
                                            <div style={{height: '100px'}}>
                                                One Button
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            )}
                        />

                        {_.map(testcases, ({name, code}) => (
                            <Route
                                path={`/(all|${name.toLowerCase()})`}
                                key={`${name}`}
                                render={() => (
                                    <div style={{margin: '10px'}}>{code}</div>
                                )}
                            />
                        ))}
                    </Content>
                    <Footer
                        company="Eccenca"
                        version="v0.1.0"
                        companyUrl="http://eccenca.com"
                    />
                </Layout>
            </div>
        );
    },
});

const PageWithRouter = withRouter(Page);

const PageWithRouting = props => (
    <Router>
        <PageWithRouter {...props} />
    </Router>
);

ReactDOM.render(<PageWithRouting />, document.getElementById('react'));
