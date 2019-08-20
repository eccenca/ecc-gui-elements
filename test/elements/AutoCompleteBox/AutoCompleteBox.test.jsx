import React from 'react';
import { shallow } from 'enzyme';
import SelectBox from '../../../src/elements/SelectBox/SelectBox';

const onChangeMock = jest.fn();
const optionsArray = ['test1', 'test2', 'test3', 'test4'];
const newLabel = 'selectBox label';

let wrapper = shallow(
    <SelectBox
        placeholder="Label for SelectBox"
        options={optionsArray}
        optionsOnTop={true}
        value="test"
        onChange={onChangeMock}
        creatable={true}
        promptTextCreator={(`New stuff: ${newLabel}`)}
        multi={true}
        clearable={false}
        searchable={true}
        reducedSize={false}
    />
);

describe('AutoCompleteBox', () => {
    it('should render the AutoCompleteBox', () => {
        expect(wrapper.find('SelectBox')).toHaveLength(1);
    });

    it('should render the component with value property', () => {
        expect(wrapper.find('SelectBox').get(0).props.value).toEqual('test');
    });

    it('should render the component with options property', () => {
        expect(wrapper.find('SelectBox').get(0).props.options).toEqual(optionsArray);
    });

    it('should render the component with optionsOnTop property', () => {
        expect(wrapper.find('SelectBox').get(0).props.optionsOnTop).toEqual(true);
    });

    it('should render the component with creatable property', () => {
        expect(wrapper.find('SelectBox').get(0).props.creatable).toEqual(true);
    });

    it('should render the component with promptTextCreator property', () => {
        expect(wrapper.find('SelectBox').get(0).props.promptTextCreator).toEqual("New stuff: selectBox label");
    });

    it('should render the component with multi property', () => {
        expect(wrapper.find('SelectBox').get(0).props.multi).toEqual(true);
    });

    it('should render the component with clearable property', () => {
        expect(wrapper.find('SelectBox').get(0).props.clearable).toEqual(false);
    });

    it('should render the component with searchable property', () => {
        expect(wrapper.find('SelectBox').get(0).props.searchable).toEqual(true);
    });

    it('should render the component with reducedSize property', () => {
        expect(wrapper.find('SelectBox').get(0).props.reducedSize).toEqual(false);
    });

    it('should add some text into the selectbox', () => {
        wrapper = shallow(
            <SelectBox
                value="new value"
                options={optionsArray}
                onChange={onChangeMock}
            />
        );
        expect(wrapper.find('SelectBox').get(0).props.value).toEqual('new value');
    });
});
