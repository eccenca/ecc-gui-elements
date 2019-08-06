import React from 'react';
import { shallow } from 'enzyme';
import { DateField } from '../../../src/elements/DateField/index';

describe('<DateField />', () => {
    const mocFunction = jest.fn();
    let wrapper;

    it('should render the DateField component without error', () => {
        wrapper = shallow(<DateField onChange={() => {}} />);
        expect(wrapper.exists()).toBe(true);
    });

    it('should change the DateField component', () => {
        wrapper = shallow(<DateField onChange={mocFunction} />);
        expect(mocFunction.mock.calls).toHaveLength(0);
    });

    it('should has YYYY-MM-DD date format', () => {
        const format = 'YYYY-MM-DD';
        wrapper = shallow(<DateField onChange={() => {}} />);
        expect(wrapper.props().dateFormat).toEqual(format);
    });
});
