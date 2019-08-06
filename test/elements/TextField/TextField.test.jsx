import React from 'react';
import { shallow } from 'enzyme';
import TextField from '../../../src/elements/TextField/TextField';

describe('TextField', () => {
    it('should render the TextField component', () => {
        const wrapper = shallow(
            <TextField
                value="test"
                label="Test Input"
                onChange={() => {}}
            />
        );
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('TextField')).toHaveLength(
            1
        );
    });

    it('should render the TextField component with some properties', () => {
        const mockFun = jest.fn();
        const wrapper = shallow(
            <TextField
                value="test the input"
                label="Test Input (not full width)"
                onChange={mockFun}
                stretch={false}
            />
        );
        console.warn(wrapper.debug());

        expect(wrapper.find('TextField').get(0).props.value).toEqual('test the input');
    });
});
