import React from 'react';
import {
    Button,
    Card,
    CardTitle,
    CardContent,
    Tabs,
} from '../../index.js';

const TestTabs = React.createClass({
    getInitialState() {
        return {
            tabContent: [
                {tabTitle: 'profiling Tab', tabContent: 'i\'m profiling Tab'},
                {tabTitle: 'discovery Tab', tabContent: 'i\'m discovery Tab'},
                {tabTitle: 'kpiTab', tabContent: 'i\'m kpiTab Tab'},
            ],
        };
    },

    tabClick(tabName) {
        console.log('tabClick:', tabName);
    },

    render() {
        return (
            <Card>
                <CardTitle documentLevel={'h4'}>
                    Test Tabs
                </CardTitle>
                <CardContent>
                    <Tabs
                        prefixTabNames={'tab-container'}
                        tabs={this.state.tabContent}
                        onTabClick={this.tabClick}
                        activeTab={'kpiTab'}
                    />
                    <Button onClick={() => this.setState({
                        tabContent: [
                            {tabTitle: 'profiling Tab', tabContent: 'i\'m profiling Tab'},
                            {tabTitle: 'discovery Tab', tabContent: false},
                            {tabTitle: 'kpiTab', tabContent: 'i\'m kpiTab Tab'}
                        ]
                    })}>Remove content from discovery tab</Button>
            </CardContent>
            </Card>
        );
    }
});

export default TestTabs;
