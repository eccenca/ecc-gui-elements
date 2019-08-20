import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../../../src/elements/Checkbox/Checkbox';

const onChangeMock = jest.fn();
const mountComponent = () =>
    shallow(
        <Checkbox
            name="switches[3b]"
            hideLabel
            label="Hidden string label"
            checked
            onChange={onChangeMock}
        />
    );
describe('Checkbox', () => {
    let wrapper;
    it('should click on the Checkbox', () => {
        wrapper = mountComponent();
        wrapper.find('Checkbox').simulate('click');
        expect(wrapper.props().checked).toEqual(true);
    });
});
