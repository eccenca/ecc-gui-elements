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
import TestNA from './tests/NA';
import TestNothing from './tests/Nothing';
import TestBreadcrumbList from './tests/BreadcrumbList';
import TestContextMenu from './tests/ContextMenu';

import PerformanceMixin from './../src/mixins/PerformanceMixin';

// component
import {Layout, Content, Footer} from '../index';

window.enablePerformanceMixingLog = true;

const Page = React.createClass({
    mixins: [PerformanceMixin],

    // template rendering
    render() {
        const testcases = [
            {
                name: 'Context Menu',
                code: <TestContextMenu key="contextmenu" />,
            },
            {
                name: 'Breadcrumb List',
                code: <TestBreadcrumbList key="breadcrumblist" />,
            },
            {
                name: 'Nothing',
                code: <TestNothing key="nothing" />,
            },
            {
                name: 'Spinner',
                code: <TestSpinner key="test-spinner" />,
            },
            {
                name: 'N/A',
                code: <TestNA key="N/A" />,
            },
            {
                name: 'Progressbar',
                code: <TestProgressbar key="progress" />,
            },
            {
                name: 'Alerts',
                code: <TestAlerts key="alerts" />,
            },
            {
                name: 'Scrolling',
                code: <TestScrolling key="scrolling" />,
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
                code: <TestButtons key="buttons" />,
            },
            {
                name: 'Chips',
                code: <TestChips key="chips" />,
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
                        {_.map(testcases, ({name, code}) => (
                            <Route
                                path={`/(all|${name.toLowerCase()})`}
                                key={`${name}`}
                                render={() => (
                                    <div className="uitest-divmargin">
                                        {code}
                                    </div>
                                )}
                            />
                        ))}
                    </Content>
                    <Footer
                        company="eccenca"
                        version="v3.4.2"
                        companyUrl="http://eccenca.com"
                        workspace={document.title}
                        userName="userB"
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
