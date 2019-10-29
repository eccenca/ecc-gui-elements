import React from 'react';
import { shallow } from 'enzyme';
import NotAvailable from '../../../src/elements/NotAvailable/NotAvailable';

describe('NotAvailable', () => {
    let wrapper;

    it('should render the NotAvailable component', () => {
        wrapper = shallow(<NotAvailable />);
        expect(wrapper.exists()).toBe(true);
    });

    it('should render component with inline property', () => {
        const selector = '.ecc-gui-elements__notavailable--inline';
        wrapper = shallow(<NotAvailable inline={true} />);
        expect(wrapper.find(selector)).toHaveLength(1);
    });

    it('should render component with description property', () => {
        wrapper = shallow(
            <NotAvailable
                description="Tooltip description for N/A element"
            />
        );
        expect(wrapper.find('Tooltip').prop('label')).toEqual('Tooltip description for N/A element');
    });
});
