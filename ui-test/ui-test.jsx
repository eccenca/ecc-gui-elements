/* eslint no-console: 0 */
import React from 'react';
import render from 'ecc-uitest-helpers';
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
import PerformanceMixin from './../src/mixins/PerformanceMixin';

// component
import {
    ContextMenu,
    MenuItem,
    Nothing,
    Version,
    Layout,
    Content,
} from '../index.js';
import {
    Header
} from 'react-mdl';

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
                        <MenuItem className="ownClassName" key="no1">First First Item</MenuItem>
                        <MenuItem>First Second Item</MenuItem>
                        <MenuItem>First Menu Item 3</MenuItem>
                        <MenuItem>First Another Menu Item</MenuItem>
                        <MenuItem onClick={this.addContextMenuItem}>First Add Another</MenuItem>
                        {
                            (this.state && this.state.insertContextMenuItem) ?
                                <MenuItem onClick={this.removeContextMenuItem}>Remove me</MenuItem> :
                                false
                        }
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
                    {
                        (this.state && this.state.insertContextMenuItem) ?
                            <ContextMenu><MenuItem>test</MenuItem></ContextMenu> :
                            false
                    }
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
