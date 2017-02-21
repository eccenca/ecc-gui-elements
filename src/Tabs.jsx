import React from 'react';
//import classNames from 'classnames';
import ReactMDLTabs from 'react-mdl/lib/Tabs/Tabs';
import ReactMDLTab from 'react-mdl/lib/Tabs/Tab';
//import ReactMDLTabBar from 'react-mdl/lib/Tabs/TabBar';
import _ from 'lodash';
import Info from './Alert/Info';
import PerformanceMixin from './mixins/PerformanceMixin';

// get pure title names from i18n format
const clearTabTitles = (tabs) => {
    return _.forEach(
        tabs, it => it.tabTitle = _.has(it, 'tabTitle.props.message') ?
        it.tabTitle.props.message : it.tabTitle
    );
};

const Tabs = React.createClass({
    mixins: [PerformanceMixin],

    propTypes: {
        prefixTabNames: React.PropTypes.string, // html class prefix
        activeTab: React.PropTypes.string, // set default active tab
        tabs: React.PropTypes.array, // tab content [{tabTitle: 'name', tabContent: value}]
        onTabClick: React.PropTypes.func, // handle tab header click
    },
    getDefaultProps() {
        return {
            prefixTabNames: 'tabBar'
        };
    },
    handleSelect(tabSelect) {
        tabSelect = this.props.tabs[tabSelect].tabTitle;
        this.setState({activeTab: tabSelect});
        if(_.isFunction(this.props.onTabClick)){
            if (__DEBUG__) {
                console.log('selected tab: ' + tabSelect);
            }
            this.props.onTabClick(tabSelect);
        }
    },

    render() {

        let content = false;

        const tabs = clearTabTitles(
                        _.reject(
                            this.props.tabs,
                            ({tabContent}) => _.isEmpty(tabContent)
                        )
                    );

        const activeTabTitle = (this.state && this.state.activeTab) ? this.state.activeTab : this.props.activeTab;

        if (!_.isEmpty(tabs)) {
            // set active tab if given and matches // else take first tab
            let activeTab = _.findIndex(tabs, {tabTitle: activeTabTitle});
            activeTab = activeTab === -1 ? 0 : activeTab;
            // create tab header
            const tabPanel = _.map(tabs, it =>
                <ReactMDLTab
                    className={this.props.prefixTabNames + '-header-' + _.kebabCase(it.tabTitle)}
                    key={_.kebabCase(it.tabTitle)}
                >
                    {it.tabTitle}
                </ReactMDLTab>
            );
            // create tab content
            const tabContent = tabs[activeTab].tabContent;
            content = (
                <div className="mdl-tabs">
                    <ReactMDLTabs activeTab={activeTab} onChange={this.handleSelect}>
                        {tabPanel}
                    </ReactMDLTabs>
                    <section className="mdl-tabs__panel">
                        {tabContent}
                    </section>
                </div>
            );
        } else {content = <Info>No tab content</Info>; }

        return (
            <div className="ecc-tab-container">
                {content}
            </div>
        );
    },
});

export default Tabs;
