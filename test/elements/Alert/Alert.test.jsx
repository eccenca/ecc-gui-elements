import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../../../src/elements/Alert/Alert';

const selectors = {
    VERTSPACING: '.mdl-alert--spacing',
    BORDER: '.mdl-alert--border',
    ALERT: '.mdl-alert',
};

describe('Alert', () => {
    it('should render Alert component with info child', () => {
        const wrapper = shallow(
            <Alert>
                <p>test alert</p>
            </Alert>
        );
        expect(wrapper.find(selectors.ALERT)).toHaveLength(1);
    });

    it('should render Alert component with border property', () => {
        const wrapper = shallow(
            <Alert
                border={true}
            >
                <p>This is a test</p>
            </Alert>
        );
        expect(wrapper.find(selectors.BORDER)).toHaveLength(1);
    });

    it('should render Alert component with vertSpacing property ', () => {
        const wrapper = shallow(
            <Alert
                vertSpacing
            >
                <p>This is a test</p>
            </Alert>
        );
        expect(wrapper.find(selectors.VERTSPACING)).toHaveLength(1);
    });

    it('should render Alert component with handlerDismiss property ', () => {
        const handleDismissMoc = jest.fn();
        const wrapper = shallow(
            <Alert
                handlerDismiss={handleDismissMoc}
            >
                <p>This is a test</p>
            </Alert>
        );
        wrapper.find('Button').simulate('click');
        expect(handleDismissMoc.mock.calls).toHaveLength(1);
    });

    it('should render the Alert component with labelDismiss property', () => {
        const wrapper = shallow(
            <Alert
                handlerDismiss={() => {}}
                labelDismiss="label for handler"
            >
                <p>This is a test</p>
            </Alert>
        );
        expect(wrapper.find('Button')).toHaveLength(1);
        expect(wrapper.find('Button').get(0).props.tooltip).toEqual('label for handler');
    });
});
