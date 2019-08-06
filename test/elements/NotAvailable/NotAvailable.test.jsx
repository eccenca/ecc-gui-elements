import React from 'react';
import { shallow } from 'enzyme';
import NotAvailable from '../../../src/elements/NotAvailable/NotAvailable';

describe('NotAvailable', () => {
    let wrapper;

    it('should render the NotAvailable component', () => {
        const selector = '.ecc-gui-elements__notavailable';
        wrapper = shallow(<NotAvailable />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find(selector)).toHaveLength(1);
    });

    it('should render component with inline props', () => {
        wrapper = shallow(<NotAvailable inline={true} />);
        expect(wrapper.find('.ecc-gui-elements__notavailable--inline')).toHaveLength(1);
    });
});
