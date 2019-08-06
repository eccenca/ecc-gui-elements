import React from 'react';
import { mount, shallow } from 'enzyme';
import BaseDialog from '../../../src/elements/Dialog/BaseDialog';
import { Button } from '../../../index';

const selectors = {
    cancel: 'span.mdl-dialog__actions__2-button button',
    custom: '[data-test-id="baseDialog-Custom-button"]',
    yesButton: '[data-test-id="baseDialog-Yes-button"]',
};

const handleCloseMock = jest.fn();
const handleYesMock = jest.fn();
const handleCustomMock = jest.fn();
let mountComponent = () =>
    shallow(
        <BaseDialog
            title="DialogCustomActions Title"
            active={true}
            size="large"
            buttonRow={[
                <Button
                    key="Cancel"
                    onClick={() => {}}
                >
                    Cancel
                </Button>,
                <Button
                    key="Yes"
                    onClick={() => {}}
                >
                    Yes
                </Button>,
                <Button
                    key="Custom"
                    onClick={() => {}}
                >
                    Custom
                </Button>,
            ]}
        />
    );

describe('BaseDialog ', () => {
    let wrapper;
    it('should render the BaseDialog', () => {
        wrapper = mountComponent();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.is-activated')).toHaveLength(1);
    });

    it('should have a title', () => {
        const selector = '.mdl-card__title-text';
        wrapper = mountComponent();
        expect(wrapper.find(selector).text()).toEqual('DialogCustomActions Title');
    });

    it('should have a row of buttons', () => {
        wrapper = mountComponent();
        expect(wrapper.find('CardActions')).toHaveLength(1);
    });
});
