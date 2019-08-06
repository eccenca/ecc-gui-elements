import React from 'react';
import { shallow } from 'enzyme';
import Tabs from '../../../src/elements/Tabs/Tabs';

const selectors = {
    TAB: '.ecc-tab-container',
    PROFILING_TAB: '.tab-container-header-profiling-tab',
};
describe('Tabs test', () => {
    let wrapper;
    it('should render the Tabs component', () => {
        wrapper = shallow(<Tabs />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find(selectors.TAB)).toHaveLength(1);
    });

    it('should render the Tabs component with all proptypes', () => {
        const mockFun = jest.fn();
        const tabContent = [
            { tabTitle: 'profiling Tab', tabContent: 'i\'m profiling Tab' },
            { tabTitle: 'discovery Tab', tabContent: 'i\'m discovery Tab' },
            { tabTitle: 'kpiTab', tabContent: 'i\'m kpiTab Tab' },
        ];
        const wrapper = shallow(
            <Tabs
                prefixTabNames="tab-container"
                tabs={tabContent}
                onTabClick={mockFun}
                activeTab="profiling Tab"
            />
        );
        expect(wrapper.find(selectors.PROFILING_TAB)).toHaveLength(1);
        expect(wrapper.find(selectors.TAB).text()).toContain('profiling Tab');
    });
});
