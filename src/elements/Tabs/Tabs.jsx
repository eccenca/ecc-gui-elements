import React, { Component } from 'react';
// import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactMDLTabs from 'react-mdl/lib/Tabs/Tabs';
import ReactMDLTab from 'react-mdl/lib/Tabs/Tab';
// import ReactMDLTabBar from 'react-mdl/lib/Tabs/TabBar';
import _ from 'lodash';
import { Info } from '../Alert';

// get pure title names from i18n format
const clearTabTitles = tabs =>
    _.map(tabs, it => {
        const tab = it;
        tab.tabTitle = _.has(tab, 'tabTitle.props.message')
            ? tab.tabTitle.props.message
            : tab.tabTitle;
        return tab;
    });

class Tabs extends Component {
    static displayName = 'Tabs';

    static propTypes = {
        prefixTabNames: PropTypes.string, // html class prefix
        activeTab: PropTypes.string, // set default active tab
        tabs: PropTypes.array, // tab content [{tabTitle: 'name', tabContent: value}]
        onTabClick: PropTypes.func, // handle tab header click
    };

    static defaultProps = {
        prefixTabNames: 'tabBar',
    };

    constructor(props) {
        super(props);
        this.state = {
            ...props,
            // remove entries with empty tabContent and get clear names from i18n
            tabs: clearTabTitles(
                _.reject(this.props.tabs, ({ tabContent }) =>
                    _.isEmpty(tabContent))
            ),

        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillReceiveProps(props) {
        const newProps = _.cloneDeep(props);
        // remove entries with empty tabContent and get clear names from i18n
        newProps.tabs = clearTabTitles(
            _.reject(props.tabs, ({ tabContent }) => _.isEmpty(tabContent))
        );
        this.setState(newProps);
    }

    handleSelect(selected) {
        const activeTab = this.state.tabs[selected].tabId;
        // do nothing if tab not changed
        if (_.isEqual(activeTab, this.state.activeTab)) {
            return;
        }
        this.setState({ activeTab });
        if (_.isFunction(this.state.onTabClick)) {
            this.state.onTabClick(activeTab);
        }
    }

    render() {
        /* eslint no-script-url: 0 */
        let content = false;

        const { tabs, prefixTabNames } = this.state;

        if (!_.isEmpty(tabs)) {
            // set active tab if given and matches // else take first tab
            let activeTab = _.findIndex(tabs, {
                tabId: this.state.activeTab,
            });
            activeTab = activeTab === -1 ? 0 : activeTab;
            // create tab header
            const tabPanel = _.map(tabs, tab => {
                const key = _.kebabCase(tab.tabId);

                return (
                    <ReactMDLTab
                        className={`${prefixTabNames}-header-${key}`}
                        key={key}
                        href="javascript:void(0)"
                    >
                        {tab.tabTitle}
                    </ReactMDLTab>
                );
            });
            // create tab content
            const { tabContent } = tabs[activeTab];
            content = (
                <div className="mdl-tabs">
                    <ReactMDLTabs
                        activeTab={activeTab}
                        onChange={this.handleSelect}
                    >
                        {tabPanel}
                    </ReactMDLTabs>
                    <section className="mdl-tabs__panel">{tabContent}</section>
                </div>
            );
        } else {
            content = <Info>No tab content</Info>;
        }

        return <div className="ecc-tab-container">{content}</div>;
    }
}

export default Tabs;
