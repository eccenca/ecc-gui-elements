import React from 'react';
import { shallow } from 'enzyme';
import RadioButton from '../../../src/elements/Radio/RadioButton';
import RadioGroup from '../../../src/elements/Radio/RadioGroup';
import { Radio, TableCell } from '../../../index';

let wrapper;
describe('Radio', () => {
    it('should render the component', () => {
        wrapper = shallow(
            <RadioButton
                checked={true}
                name="Radio text one"
                onChange={() => {}}
                value={3}
            />
        );
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('Radio')).toHaveLength(1);
    });

    it('render the component', () => {
        const onChangeMock = jest.fn();
        wrapper = shallow(
            <RadioGroup
                name="selectedRadio"
                onChange={onChangeMock}
                value={3}
            >
                <Radio checked={undefined} value="one" onChange={() => {}} />
                <Radio
                    checked={undefined}
                    value="two"
                    label="Radio 2 Text"
                    onChange={() => {}}
                />
            </RadioGroup>
        );
        expect(wrapper.exists()).toBe(true);
    });
});
