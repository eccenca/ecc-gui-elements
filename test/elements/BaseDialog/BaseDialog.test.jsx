import React from 'react';
import { shallow } from 'enzyme';
import BaseDialog from '../../../src/elements/Dialog/BaseDialog';
import { Button } from '../../../index';

describe('BaseDialog ', () => {
    let wrapper;
    it('should render the BaseDialog', () => {
        wrapper = shallow(
            <BaseDialog
                active={true}
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
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.is-activated')).toHaveLength(1);
    });

    it('should have a title', () => {
        wrapper = shallow(
            <BaseDialog
                title="DialogCustomActions Title"
                active={true}
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
        expect(wrapper.find('.mdl-card__title-text').text()).toEqual('DialogCustomActions Title');
    });

    it('should render the component with modal property', () => {
        wrapper = shallow(
            <BaseDialog
                active={true}
                buttonRow={[]}
                modal
            />
        );
        expect(wrapper.find('.mdl-dialog--modal')).toHaveLength(1);
    });

    it('should render the component with size property', () => {
        wrapper = shallow(
            <BaseDialog
                active={true}
                buttonRow={[]}
                size="large"
            />
        );
        expect(wrapper.find('.mdl-dialog--large')).toHaveLength(1);
    });
});
