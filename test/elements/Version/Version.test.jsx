import React from 'react';
import { shallow, mount } from 'enzyme';
import Version from '../../../src/elements/Version/Version';

describe('Version', () => {
    let wrapper;
    it('should render the Version component', () => {
        wrapper = shallow(<Version version="v0.1.0" />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.text()).toBe('v0.1.0');
    });
});
