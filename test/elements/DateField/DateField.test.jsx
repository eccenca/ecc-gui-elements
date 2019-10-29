import React from 'react';
import { shallow } from 'enzyme';
import DateField from '../../../src/elements/DateField/DateField';

describe('<DateField />', () => {
    let wrapper;


    it('should render the DateField component', () => {
        wrapper = shallow(<DateField onChange={() => {}} />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('DateField')).toHaveLength(1);
    });

    it('should render the DateField component with label property', () => {
        wrapper = shallow(<DateField onChange={() => {}} label="dataField label" />);
        expect(wrapper.find('DateField').get(0).props.label).toBe('dataField label');
    });

    it('should render the DateField component with onChange property', () => {
        const onChangeMock = jest.fn();
        wrapper = shallow(
            <DateField
                onChange={onChangeMock}
                value="custom value"
            />
        );
        wrapper.find('DateField').simulate('change');
        expect(onChangeMock.mock.calls).toHaveLength(1);
    });

    it('should render the DateField component with dateformat property', () => {
        const format = 'DD-MM-YYYY';
        wrapper = shallow(
            <DateField
                dateFormat="DD-MM-YYYY"
                onChange={() => {}}
            />
        );
        expect(wrapper.find('DateField').get(0).props.dateFormat).toEqual(format);
    });

    it('should render the DateField component with stretch property', () => {
        wrapper = shallow(
            <DateField
                stretch={false}
                onChange={() => {}}
            />
        );
        expect(wrapper.find('DateField').get(0).props.stretch).toEqual(false);
    });

    it('should render the DateField component with error property', () => {
        wrapper = shallow(
            <DateField
                error="This error is shown"
                onChange={() => {}}
            />
        );
        expect(wrapper.find('DateField').get(0).props.error).toEqual('This error is shown');
    });

    it('should render the DateField component with value property', () => {
        wrapper = shallow(
            <DateField
                value="test value"
                onChange={() => {}}
            />
        );
        expect(wrapper.find('DateField').get(0).props.value).toEqual('test value');
    });

    it('should render the DateField component with name property', () => {
        wrapper = shallow(
            <DateField
                name="dateInput[0]"
                onChange={() => {}}
            />
        );
        expect(wrapper.find('DateField').get(0).props.name).toEqual('dateInput[0]');
    });

    it('should render the DateField component with disabled property', () => {
        wrapper = shallow(
            <DateField
                disabled
                onChange={() => {}}
            />
        );
        expect(wrapper.find('DateField').get(0).props.disabled).toEqual(true);
    });

    it('should render the DateField component with placeholder property', () => {
        wrapper = shallow(
            <DateField
                placeholder
                onChange={() => {}}
            />
        );
        expect(wrapper.find('DateField').get(0).props.placeholder).toEqual(true);
    });
});
