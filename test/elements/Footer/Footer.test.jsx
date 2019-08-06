import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../../src/elements/Footer/Footer';

const year = new Date().getFullYear();

let wrapper = shallow(
    <Footer
        company="eccenca"
        version="0.1.0"
        companyUrl="www.eccenca.com"
        year={year}
    />
);
describe('Footer', () => {
    it('should render the Footer Component', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    it('should render the mini Footer', () => {
        wrapper = shallow(
            <Footer
                company="eccenca"
                version="1.0.0"
                companyUrl="www.eccenca.com"
                workspace="ecc GUI Elements"
            />
        );
        expect(wrapper.exists()).toEqual(true);
        expect(wrapper.text()).toContain('ecc GUI Elements');
    });
});
