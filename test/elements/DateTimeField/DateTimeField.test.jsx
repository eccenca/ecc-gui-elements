import React from 'react';
import { shallow } from 'enzyme';
import DateTimeField from '../../../src/elements/DateField/DateTimefield';


describe('<DateField />', () => {
    let wrapper;

    it('should render the DateTimeField component', () => {
        wrapper = shallow(
            <DateTimeField />
        );
        expect(wrapper.exists()).toBe(true);
    });

    it('should render the DateTimeField component with timeFormat property', () => {
        const timeFormat = 'HH:mm';
        wrapper = shallow(
            <DateTimeField
                timeFormat="HH:mm"
            />
        );
        expect(wrapper.props().timeFormat).toEqual(timeFormat);
    });

    it('should render the DateTimeField component with dateFormat property', () => {
        const dateFormat = 'DD-MM-YYYY';
        wrapper = shallow(
            <DateTimeField
                dateFormat="DD-MM-YYYY"
            />
        );
        expect(wrapper.props().dateFormat).toEqual(dateFormat);
    });
});
