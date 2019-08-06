import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../../../src/elements/Icon/Icon';

describe('Icon', () => {
    let wrapper;

    it('should render Icon Component ', () => {
        wrapper = shallow(<Icon name="info" />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.text()).toEqual('info');
    });
});
