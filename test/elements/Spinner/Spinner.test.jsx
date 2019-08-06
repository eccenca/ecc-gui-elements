import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../../src/elements/Spinner/Spinner';

describe('Spinner', () => {
    let wrapper;

    it('should render the Spinner component', () => {
        wrapper = shallow(<Spinner appearGlobal={true} />);
        expect(wrapper.exists()).toBe(true);
    });
});
