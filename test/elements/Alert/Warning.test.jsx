import React from 'react';
import { shallow } from 'enzyme';
import Warning from '../../../src/elements/Alert/Warning';

const selectors = {
    WARNING: 'Alert[type="warning"]',
};

describe('Alert', () => {
    it('should render Warning component', () => {
        const wrapper = shallow(
            <Warning border vertSpacing>
                warning
            </Warning>
        );
        expect(wrapper.find(selectors.WARNING)).toHaveLength(1);
    });

    it('should render Warning  component with border property', () => {
        const wrapper = shallow(
            <Warning border>
                warning
            </Warning>
        );
        expect(wrapper.find(selectors.WARNING).get(0).props.border).toEqual(true);
    });

    it('should render Warning component with vertSpacing property ', () => {
        const wrapper = shallow(
            <Warning vertSpacing>
                warning
            </Warning>
        );
        expect(wrapper.find(selectors.WARNING).get(0).props.vertSpacing).toEqual(true);
    });
});
