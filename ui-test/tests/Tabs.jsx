import React from 'react';
import {
    Button,
    Card,
    CardTitle,
    CardContent,
    CardActions,
    Tabs,
} from '../../index';

class TestTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabContent: [
                {
                    tabTitle: 'profiling Tab',
                    tabContent: <CardContent>Content of profiling tab.</CardContent>,
                },
                {
                    tabTitle: 'discovery Tab',
                    tabContent: <CardContent>Content of discovery tab.</CardContent>,
                },
                {
                    tabTitle: 'kpiTab',
                    tabContent: <CardContent>Content of KPI tab.</CardContent>,
                },
            ],
        };
    }


    tabClick(tabName) {
        console.warn('tabClick:', tabName);
    }

    render() {
        return (
            <Card>
                <CardTitle documentLevel="h4">Test Tabs</CardTitle>
                <Tabs
                    prefixTabNames="tab-container"
                    tabs={this.state.tabContent}
                    onTabClick={this.tabClick}
                    activeTab="kpiTab"
                />
                <CardActions>
                    <Button
                        onClick={() =>
                            this.setState({
                                tabContent: [
                                    {
                                        tabTitle: 'profiling Tab',
                                        tabContent: <CardContent>Content of profiling tab.</CardContent>,
                                    },
                                    {
                                        tabTitle: 'discovery Tab',
                                        tabContent: false,
                                    },
                                    {
                                        tabTitle: 'kpiTab',
                                        tabContent: <CardContent>Content of KPI tab.</CardContent>,
                                    },
                                ],
                            })
                        }
                    >
                        Remove content from discovery tab
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default TestTabs;
