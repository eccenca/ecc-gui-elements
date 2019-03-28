/* eslint no-console: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Header, Drawer, Navigation} from 'react-mdl';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import _ from 'lodash';

// component
import {Layout, Content, Footer, ContextMenu, MenuItem} from '../index';

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
import TestBreadcrumbList from './tests/BreadcrumbList';
import TestContextMenu from './tests/ContextMenu';
import TestTypography from './tests/Typography';

window.enablePerformanceMixingLog = true;

class Page extends React.Component {
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
            {
                name: 'Typography',
                code: <TestTypography key="typography" />,
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
            path !== 'all'
            && testcases.filter(c => c.name.toLowerCase() === path).length === 0
        ) {
            window.location = '/all';
            return 0;
        }

        return (
            <div>
                <Layout fixedHeader>
                    <Header>
                        <div className="mdl-layout-title">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAACjlBMVEUAAAD/AAD/gAD/VQD/gAD/ZgD/VQD/bQD/YAD/cQD/ZgD/XQD/agD/YgD/bQD/ZgD/YAD/aQD/YwD/awD/ZgD/YQD/aAD/ZAD/agD/ZgD/YgD/aAD/ZAD/agD/ZgD/YwD/aAD/ZAD/aQD/ZgD/YwD/ZwD/ZQD/aQD/ZQD/ZAD/ZwD/ZQD/aAD/ZgD/ZAD/ZwD/ZQD/aAD/ZgD/ZwD/aAD/ZgD/ZAD/ZwD/aAD/ZgD/ZAD/ZwD/ZQD/ZwD/ZgD/ZQD/ZgD/ZQD/ZwD/ZwD/ZgD/ZQD/ZQD/ZwD/ZgD/ZgD/ZQD/ZwD/ZgD/ZwD/ZQD/ZwD/ZgD/ZwD/ZgD/ZgD/ZQD/ZgD/ZwD/ZgD/ZQD/ZgD/ZgD/ZwD/ZgD/ZQD/ZgD/ZgD/ZwD/ZQD/ZgD/ZgD/ZwD/ZgD/ZQD/ZgD/ZgD/ZwD/ZgD/ZQD/ZgD/ZgD/ZwD/ZgD/ZQD/ZgD/ZgD/ZwD/ZQD/ZgD/ZgD/ZwD/ZgD/ZQD/ZgD/ZgD/ZgD/ZgD/ZgD/ZQD/ZgD/ZgD/ZwD/ZgD/ZQD/ZgD/ZgD/ZwD/ZgD/ZQD/ZgD/ZgD/ZwD/ZgD/ZQD/ZgD/ZwD/ZgD/ZQD/ZgD/ZgD/ZwD/ZgD/ZQD/ZgD/ZgD/ZgD/ZQD/ZgD/ZgD/ZgD/ZgD/ZgD/ZwD/ZgD/ZQD/ZgD/ZgD/ZwD/ZgD/ZQD/ZgD/ZgD/ZwD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgC/KffHAAAA2XRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKy4vMDEyMzQ1Njc5Ozw9PkBBQkNERUZJS0xNT1BRU1RVWl1eX2FiY2RmZ2lqbG1ub3BxcnN0dXZ3eXp7fH1+f4CBgoOEhYaHiImKi42Oj5CRkpOUlpmbnJ2en6ChoqOkpaanqKmqq6yur7CxsrO0tba3ubq7vL7AwcLDxMXGx8jJysvMzc7P0NHS09TW19jZ2tvc3d7f4OHi4+Tl5ujp6uvs7e7v8PHy8/T19vf5+vv8DIkkHAAABdBJREFUeNrd3YlX1UUUB/DvW+SRYiAg5JYLYSZuLZgibbiUZppbQlBRpuJSomaSZiplZdkmuGVa7iKaZYopuGYpPnk+wOR9/5uOnNzh8ZbfMnc+/8Gcc2fmzj1zZ2COpEFjChaXlu+uOuX11pP1Xu+pqt1lqxfnjxmYCBlSswtKD/oYhK+yND87BQpz9Zu0poYhurChMDMGCuqbu6WeYarf/Fo6VOIavryaETq5bJgTSnBmllxgVGrXZNs/lh6zz9AAp2d1h41cozYGaJDAxpEu2CNu0nEa6lRhAqzXtfgKDedd0AXWSi5upCn+XWHlUJKKfDRNfUkqrOF5y0dT1b0RAwvknKTpTrwEsz26jZbYmg4zuXPraZFrRSbGV0YlLfTb4zCHe16AlgrMdcMEvXbRcvvTYbgJftrg6ngYK3YlbbLmARiox37a5lBvGOaZWtro0ggYZOJ12iowBUZwFNF2JU5EzbOWCvgu6inf4Scq4eeOiErCbiqiIhFRSNxPZRzqjIglH6FCjiQjQvGVVMrhTohI+x1UzN44RCB2O5WzzYOwOb6ggtY5EK6FVNJ8hOlVKmpKmPluExV1PQthePgSlXW5N0IWe4AKOxR6ArmKSvsMIZpAxY1DSNKuUnH+dITAvZfKq2iHts2jALPRpiEBCtA0EG1wH6IIh9sKrhkU4k0E1fcahWh8BMFsoxhbEMRoCvI8WhXzJwU54UFrCilKPlqR7KMoVxLRskUU5j20qLOfwtSnoCVLKc5itKDbNYrTkBp+/UdMdajjFQrkjcO98ijSNNzDVU2Raly42ygKlYO7baJQ5bhL9wCFauqGOxVRrBm4g/MMxapx4LanKdiTuG05BfsQtzgvULALTtyURdGG6hFZ5FLcdJKiVeF/fSlcGtAsl8JNBZptoXAb0Mztp3B+N24YQvEG3H82lHxO/JbifYUbzlO8swDwEDWQAuBZaiALQAE1kAfgU2pgFYCD1EAFAB814AWSqIUEDKIWMvAitTAaBdTC61hMLRSjlFpYiXJq4QfsoRZ2oopaOIrz1MIZXKQW/kYdteBFI7XQgAC1ENBmINqEljaTXZvlV5sNUZ8UZTe1sANl1ML3WE0tfIJF1MICfYoPY6iFUboU6PojkVqIB+o0KWKjkhrYD6BUj20EyKcGpgPIpgaGA+hMDXQGgHM6nEZuWEfxvsQN00k9bp4Nonj9Nbl45nOh2WYKVwboMUmmAM3SKVwfTS4wH8NNy0g92hWGUbSncJPzLwp2zolbPqJgH+C2TAr2BG5znqZY1Q7cYRbFekeXhsqumrS4luFuI3VpOnadFN8GLjsFnop7dailQJc74D4LKNAc3K9LI6nHCy9LKM5CtCT5KoXxp6BFxRRmLlqWVEdRvAloRQFFmY7WxBynIMfaoVU5FOQ5BLGVYmxCMOmNFKIhDUG9TSEKEJz7oCaPsmKwjGdyB6BNcyjATLTNvYfK2+VCCPr4qLi6XgjJeCpuLEL0CZX2MULlqaDC9nkQsh4Xqax/uiMMI9T9tmMYwjKRipqMML0voP4TEsfnVNDXDoQtdhuVs9WDCLT/hYrZE4eIPHiASvm1kx6f1v2ehIh12kdlHExGFOJ3URE74xGV9j9SCdvjEKUYJfaTb2I1+Y7WASO8cp22apoMg2RdtDVvHwbDdNtL21T2hIE8JbTJihgYa5yPNqgbC8P13EHL7U2DCdyzm2ipppkumOOxClro8GCYxp3rp0UaC90wU9oWWmJTH5gt+w+a7vgLsEC7/Cs0lTe3HazRsbCOpvEXd4J1koobaIqGklRYK3X+ZRqudl4KrOd5uYqGqsntAHu4csoDNEhTWY4LNur2bg0NUD2jK2zXr6iaUTlfkumAEpxDlx5nhKqWZDqhkj5TN1xlmHzlU3pDQa6MaWvPMkRn107r74LCkkfkrTzgZRDeipW5WcmQISFjdN7CVet3Hq2u9fpJv7e2+ujO9asW5o3OiIcp/gM00AYFsWp8XgAAAABJRU5ErkJggg=="
                                alt="eccenca Corporate Memory"
                                className="mdl-layout--hide-on-phone"
                            />
                            <span className="mdl-layout--hide-on-tablet"><abbr title="eccenca GUI elements">eGe</abbr> Test Cases</span>
                        </div>
                        <div className="mdl-layout-spacer"></div>
                        <Navigation className="mdl-layout--large-screen-only">
                            <a href="#" className="mdl-typography--text-uppercase">Module</a>
                            <a href="#" className="mdl-typography--text-uppercase">Name</a>
                            <a href="#" className="mdl-typography--text-uppercase active">Example</a>
                            <a href="#" className="mdl-typography--text-uppercase">Other</a>
                            <a href="#" className="mdl-typography--text-uppercase">Test</a>
                        </Navigation>
                        <ContextMenu>
                            <MenuItem>Info</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </ContextMenu>
                    </Header>
                    <Drawer>
                        <Navigation>
                            <a
                                className={path === 'all' ? 'mdl-navigation__link--current' : ''}
                                href="all"
                            >
                                All
                            </a>
                            {_.map(testcases, ({name}) => (
                                <a
                                    className={name.toLowerCase() === path ? 'mdl-navigation__link--current' : ''}
                                    href={`${name.toLowerCase()}`}
                                    key={`${name}`}
                                >
                                    {name}
                                </a>
                            ))}
                        </Navigation>
                    </Drawer>
                    <Content>
                        {_.map(testcases, ({ name, code }) => (
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
                    >
                        <div>This is an additional footer content part.</div>
                    </Footer>
                </Layout>
            </div>
        );
    }
}

const PageWithRouter = withRouter(Page);

const PageWithRouting = props => (
    <Router>
        <PageWithRouter {...props} />
    </Router>
);

ReactDOM.render(<PageWithRouting />, document.getElementById('react'));
