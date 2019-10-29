import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../../src/elements/Footer/Footer';

const year = new Date().getFullYear();

describe('Footer', () => {
    const wrapper = shallow(
        <Footer
            company="eccenca"
            version="0.1.0"
            companyUrl="www.eccenca.com"
            year={year}
        />
    );
    it('should render the Footer Component', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    it('should render the Footer Component with company property', () => {
        expect(wrapper.find('a').text()).toContain('eccenca');
    });

    it('should render the Footer Component with version property', () => {
        expect(wrapper.find('Version')).toHaveLength(1);
    });

    it('should render the Footer Component with companyUrl property', () => {
        expect(wrapper.find('a')).toHaveLength(1);
    });

    it('should render the Footer Component with year property', () => {
        expect(wrapper.text()).toContain(year);
    });
});
