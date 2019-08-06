import React from 'react';
import { shallow } from 'enzyme';
import Switch from '../../../src/elements/Switch/Switch';

describe('Switch', () => {
    let wrapper;

    it('should render the Switch component', () => {
        wrapper = shallow(<Switch onChange={() => {}} checked={true} />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('Switch')).toHaveLength(1);
    });
});
