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
import TestInputs from './tests/Inputs';
import TestSelects from './tests/Selects';
import TestTabs from './tests/Tabs';
import TestTable from './tests/Table';
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
                code: [
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
                        {this.state && this.state.insertContextMenuItem ? (
                            <MenuItem onClick={this.removeContextMenuItem}>
                                Remove me
                            </MenuItem>
                        ) : (
                            false
                        )}
                    </ContextMenu>,
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
                    </ContextMenu>,
                    <ContextMenu valign="top" key="contextmenu3">
                        <MenuItem>Only one menu item</MenuItem>
                    </ContextMenu>,
                ],
            },
            {
                name: 'Breadcrumb List',
                code: (
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
                ),
            },
            {
                name: 'Nothing',
                code: <Nothing key="nothing" />,
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
                    </div>
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
        ];

        // sort the list of cases for easy searching
        testcases.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });

        return (
            <div>
                <Layout fixedHeader>
                    <Header title="Test Cases" />
                    <Drawer>
                        <Navigation>
                            <a href="all">All</a>
                            {_.map(testcases, ({name}) => (
                                <a href={`${name.toLowerCase()}`}>{name}</a>
                            ))}
                        </Navigation>
                    </Drawer>
                    <Content>
                        {_.map(testcases, ({name, code}) => (
                            <Route
                                path={`/(all|${name.toLowerCase()})`}
                                key={`${name}`}
                                render={() => (
                                    <Card>
                                        {name ? (
                                            <CardTitle>{name}</CardTitle>
                                        ) : null}
                                        <CardContent>{code}</CardContent>
                                    </Card>
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
