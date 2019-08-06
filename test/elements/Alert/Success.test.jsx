import React from 'react';
import { shallow } from 'enzyme';
import Success from '../../../src/elements/Alert/Success';

const selectors = {
    SUCCESS: 'Alert[type="success"]',
};

describe('Alert', () => {
    it('should render Success component with', () => {
        const wrapper = shallow(
            <Success>
                success
            </Success>
        );
        expect(wrapper.find(selectors.SUCCESS)).toHaveLength(1);
    });

    it('should render Success component with border property', () => {
        const wrapper = shallow(
            <Success border>
                success
            </Success>
        );
        expect(wrapper.find(selectors.SUCCESS).get(0).props.border).toEqual(true);
    });

    it('should render Success component with vertSpacing property ', () => {
        const wrapper = shallow(
            <Success vertSpacing>
                success
            </Success>
        );
        expect(wrapper.find(selectors.SUCCESS).get(0).props.vertSpacing).toEqual(true);
    });
});
