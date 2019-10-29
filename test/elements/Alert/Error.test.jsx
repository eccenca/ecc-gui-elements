import React from 'react';
import { shallow } from 'enzyme';
import Error from '../../../src/elements/Alert/Error';

const selectors = {
    Error: 'Alert[type="error"]',
};

describe('Alert', () => {
    it('should render Error component with p child', () => {
        const wrapper = shallow(
            <Error
                handlerDismiss={() => {}}
                labelDismiss="remove error"
                vertSpacing
                reducedHeight
                border
            >
                <p> Test Errors </p>
            </Error>
        );
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find(selectors.Error)).toHaveLength(1);
    });

    it('should render Error component with border property', () => {
        const wrapper = shallow(
            <Error
                border={true}
            >
                <p>This is a test</p>
            </Error>
        );
        expect(wrapper.find(selectors.Error).get(0).props.border).toEqual(true);
    });

    it('should render Error component with vertSpacing property ', () => {
        const wrapper = shallow(
            <Error
                vertSpacing
            >
                <p>This is a test</p>
            </Error>
        );
        expect(wrapper.find(selectors.Error).get(0).props.vertSpacing).toEqual(true);
    });

    it('should render the Alert component with reducedHeight property', () => {
        const wrapper = shallow(
            <Error
                reducedHeight
            >
                <p>This is a test</p>
            </Error>
        );
        expect(wrapper.find(selectors.Error).get(0).props.reducedHeight).toEqual(true);
    });

    it('should render the Alert component with reducedHeight property ', () => {
        const wrapper = shallow(
            <Error
                labelDismiss="remove error"
            >
                <p>This is a test</p>
            </Error>
        );
        expect(wrapper.find(selectors.Error).get(0).props.labelDismiss).toEqual('remove error');
    });
});
