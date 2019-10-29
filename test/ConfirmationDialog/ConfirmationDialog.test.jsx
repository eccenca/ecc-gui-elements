import React from 'react';
import { shallow } from 'enzyme';
import ConfirmationDialog from '../../src/elements/Dialog/ConfirmationDialog';
import { Button } from '../../src/elements/Button';

const handleCancelButton = jest.fn();
const handleConfirmButton = jest.fn();
const wrapper = shallow(
    <ConfirmationDialog
        className="ConfirmationDialog-test"
        title="ConfirmationDialog Title"
        active={true}
        modal
        size="mini"
        cancelButton={<Button onClick={handleCancelButton}>Cancel</Button>}
        confirmButton={<Button onClick={handleConfirmButton}>Yes</Button>}
    />
);
describe('ConfirmationDialog', () => {
    it('should render the ConfirmationDialog', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('BaseDialog').get(0).props.active).toEqual(true);
    });

    it('should render the component with title property', () => {
        expect(wrapper.find('BaseDialog').get(0).props.title).toEqual('ConfirmationDialog Title');
    });

    it('should render the component with active property', () => {
        expect(wrapper.find('BaseDialog').get(0).props.active).toEqual(true);
    });

    it('should render the component with button row property', () => {
        expect(wrapper.find('BaseDialog').get(0).props.buttonRow).toHaveLength(2);
    });

    it('should render the component with mini property', () => {
        expect(wrapper.find('BaseDialog').get(0).props.size).toEqual('mini');
    });

    it('should render the component with modal property', () => {
        expect(wrapper.find('BaseDialog').get(0).props.modal).toEqual(true);
    });
});
