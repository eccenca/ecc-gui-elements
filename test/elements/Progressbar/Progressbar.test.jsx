import React from 'react';
import { shallow } from 'enzyme';
import Progressbar from '../../../src/elements/Progressbar/Progressbar';


describe('Progressbar', () => {
    let wrapper;

    describe('render', () => {
        it('render the component', () => {
            wrapper = shallow(<Progressbar appearGlobal={true} />);
            expect(wrapper.exists()).toBe(true);
        });
    });
});
