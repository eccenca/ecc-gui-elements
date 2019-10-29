import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import _ from 'lodash';
import SelectBox from '../../../src/elements/SelectBox/SelectBox';

describe('<SelectBox />', () => {
    let wrapper;
    const selectOptions = [
        {
            label: 'Label 1',
            value: 'http://example.com/one',
            description: 'This is one of the options with a description',
        },
        {
            label: 'label two',
            value: 'http://example.com/two',
        },
        {
            label: 'label three',
            value: 'http://example.com/three',
            description: 'This is one of the options with another description',
        },
        {
            label: 'http://example.com/four',
            value: 'http://example.com/four',
            description:
                'The fourth option has the same data for label and value',
        },
    ];
    const selectBoxValue = _.head(selectOptions);
    it('should render the selectBox', () => {
        const onChange = jest.fn();
        wrapper = shallow(
            <SelectBox
                onChange={onChange}
                placeholder="Label for SelectBox"
                options={selectOptions}
                optionsOnTop={true}
                value={selectBoxValue}
                creatable={true}
                multi={true}
                clearable={false}
                searchable={true}
            />
        );
        expect(wrapper.exists()).toBe(true);
    });

    it('should call onChange be true', () => {
        const onChangeMock = jest.fn();
        const onSearchMock = jest.fn();
        wrapper = shallow(
            <SelectBox
                onChange={onChangeMock}
                options={selectOptions}
                onSearch={onSearchMock}
            />
        );
        expect(wrapper.find('SelectBox')).toHaveLength(1);
        const selectWrapper = wrapper.find('SelectBox');
        selectWrapper.simulate('change');
        expect(onChangeMock.mock.calls).toHaveLength(1);
    });

    it('should call onChange with a value', () => {
        const mockFun = jest.fn();
        wrapper = shallow(
            <SelectBox
                optionsOnTop={true}
                value={selectOptions[1].label}
                creatable={true}
                multi={true}
                clearable={false}
                searchable
                onChange={mockFun}
                options={selectOptions}
            />
        );
        wrapper
            .find('SelectBox')
            .simulate('change', { currentTarget: { value: 'label three' } });
        expect(mockFun).toBeCalledWith({
            currentTarget: { value: 'label three' },
        });
    });
});
