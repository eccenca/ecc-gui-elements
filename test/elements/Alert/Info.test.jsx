import React from 'react';
import { shallow } from 'enzyme';
import Info from '../../../src/elements/Alert/Info';

const selectors = {
    INFO: 'Alert[type="info"]',
};

describe('Alert', () => {
    it('should render Info component with', () => {
        const wrapper = shallow(
            <Info>
                info
            </Info>
        );
        expect(wrapper.find(selectors.INFO)).toHaveLength(1);
    });

    it('should render Info component with border property', () => {
        const wrapper = shallow(
            <Info
                border={true}
            >
                <p>This is a test</p>
            </Info>
        );
        expect(wrapper.find(selectors.INFO).get(0).props.border).toEqual(true);
    });

    it('should render Alert component with vertSpacing property ', () => {
        const wrapper = shallow(
            <Info
                vertSpacing
            >
                <p>This is a test</p>
            </Info>
        );
        expect(wrapper.find(selectors.INFO).get(0).props.vertSpacing).toEqual(true);
    });
});
