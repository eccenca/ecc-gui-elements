import React from 'react';
import {Button, Card, CardTitle, CardContent, Tabs} from '../../index';

class TestTabs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tabContent: [
                {tabTitle: 'profiling Tab', tabContent: "i'm profiling Tab"},
                {tabTitle: 'discovery Tab', tabContent: "i'm discovery Tab"},
                {tabTitle: 'kpiTab', tabContent: "i'm kpiTab Tab"},
            ],
        }
    }


    tabClick(tabName) {
        console.warn('tabClick:', tabName);
    }

    render() {
        return (
            <Card>
                <CardTitle documentLevel="h4">Test Tabs</CardTitle>
                <CardContent>
                    <Tabs
                        prefixTabNames="tab-container"
                        tabs={this.state.tabContent}
                        onTabClick={TestTabs.tabClick}
                        activeTab="kpiTab"
                    />
                    <Button
                        onClick={() =>
                            this.setState({
                                tabContent: [
                                    {
                                        tabTitle: 'profiling Tab',
                                        tabContent: "i'm profiling Tab",
                                    },
                                    {
                                        tabTitle: 'discovery Tab',
                                        tabContent: false,
                                    },
                                    {
                                        tabTitle: 'kpiTab',
                                        tabContent: "i'm kpiTab Tab",
                                    },
                                ],
                            })
                        }>
                        Remove content from discovery tab
                    </Button>
                </CardContent>
            </Card>
        );
    }
}

export default TestTabs;
