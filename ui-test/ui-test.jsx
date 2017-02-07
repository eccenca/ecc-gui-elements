/* eslint no-console: 0 */
import React from 'react';
import render from 'ecc-uitest-helpers';
import _ from 'lodash';
// test styles
import '../style/test.scss';
// test cases
import TestSpinner from './tests/Spinner';
import TestProgressbar from './tests/Progressbar';
import TestAlerts from './tests/Alerts';
import TestDialogs from './tests/Dialogs';
//import TestStepper from './tests/Stepper';
import TestIcons from './tests/Icons';
import TestButtons from './tests/Buttons';
import TestInputs from './tests/Inputs';
import TestTimeline from './tests/Timeline';
import TestTabs from './tests/Tabs';
import TestPagination from './tests/Pagination';

// component
import {
    ContextMenu,
    MenuItem,
    Nothing,
    Version,
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

        const testcases = [
            <Nothing />,
            <TestSpinner />,
            <hr className="mdl-layout-spacer"/>,
            <TestProgressbar />,
            <hr className="mdl-layout-spacer"/>,
            <TestAlerts />,
            <hr className="mdl-layout-spacer"/>,
            <TestDialogs />,
            <hr className="mdl-layout-spacer"/>,
            // <TestStepper />,
            // <hr className="mdl-layout-spacer"/>,
            <TestIcons />,
            <hr className="mdl-layout-spacer"/>,
            <TestButtons />,
            <hr className="mdl-layout-spacer"/>,
            <TestInputs />,
            <hr className="mdl-layout-spacer"/>,
            <TestTimeline />,
            <hr className="mdl-layout-spacer"/>,
            <TestTabs />,
            <hr className="mdl-layout-spacer"/>,
            <TestPagination />,
            <hr className="mdl-layout-spacer"/>,
        ];

        return (
            <Layout fixedHeader={true}>
                <Header>
                    <ContextMenu
                        align="left"
                    >
                        <MenuItem className="ownClassName">First First Item</MenuItem>
                        <MenuItem>First Second Item</MenuItem>
                        <MenuItem>First Menu Item 3</MenuItem>
                        <MenuItem>First Another Menu Item</MenuItem>
                        <MenuItem>First Alright</MenuItem>
                    </ContextMenu>
                    <ContextMenu
                        align="right"
                        iconName="add"
                        tooltip="add property"
                    >
                        <MenuItem>Second First Item</MenuItem>
                        <MenuItem>Second Second Item</MenuItem>
                        <MenuItem>Second Menu Item 3</MenuItem>
                        <MenuItem>Second Another Menu Item</MenuItem>
                        <MenuItem>Second Alright</MenuItem>
                    </ContextMenu>
                    <ContextMenu
                        valign="top"
                    >
                        <MenuItem>Only one menu item</MenuItem>
                    </ContextMenu>
                </Header>
                <Content>
                    {testcases}
                </Content>
                <footer className="mdl-mini-footer">
                    <Version
                        version={'v0.1.0'}
                    />
                </footer>
            </Layout>
        );
    },
});

render({Component: Page, importCoreStyles: false});
