import React from 'react';
import {
    Button,
    Tabs,
} from '../../index.js';

const TestTabs = React.createClass({
    getInitialState() {
        return {
            tabContent: [
                {tabTitle: 'profiling Tab', tabContent: 'i\'m profiling Tab'},
                {tabTitle: 'discovery Tab', tabContent: 'i\'m discovery Tab'},
                {tabTitle: 'kpiTab', tabContent: 'i\'m kpiTab Tab'}
            ],
        };
    },

    tabClick(tabName) {
        console.log('tabClick:', tabName);
    },

    render() {
        return (
            <div className="mdl-card mdl-shadow--2dp mdl-card--stretch">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Test Tabs</h4>
                </div>
                <div className="mdl-card__content">
                    <Tabs
                        prefixTabNames={'tab-container'}
                        tabs={this.state.tabContent}
                        onTabClick={this.tabClick}
                        activeTab={'kpiTab'}
                    />
                    <Button onClick={() => this.setState({tabContent:
                    [
                        {tabTitle: 'profiling Tab', tabContent: 'i\'m profiling Tab'},
                        {tabTitle: 'discovery Tab', tabContent: false},
                        {tabTitle: 'kpiTab', tabContent: 'i\'m kpiTab Tab'}
                    ]
                    })}>Remove content from discovery tab</Button>
                </div>
            </div>
        );
    }
});

export default TestTabs;
